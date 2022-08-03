/**@type{HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 1
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const pointer = {
  x: undefined,
  y: undefined,

};
canvas.addEventListener("click", function (e) {
  pointer.x = e.x;
  pointer.y = e.y;
  for(let i = 0; i < 10; i++)(
  particlesArray.push(new Particle())
  );
});

canvas.addEventListener("pointermove", function (e) {
  pointer.x = e.x;
  pointer.y = e.y;
  for(let i = 0; i < 1; i++)(
  particlesArray.push(new Particle())
  );
});

class Particle {
  constructor() {
    this.x = pointer.x;
    this.y = pointer.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 16 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2){
      this.size -= 0.01

    }
  }
  draw() {
    ctx.fillStyle = 'hsl('+hue+', 100%, 50%)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
// function init() {
//   for (let i = 0; i < 100; i++) {
//     particlesArray.push(new Particle());
//   }
// }
// init();

function handlePartials() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
    }
  }
  
}
function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
  ctx. fillRect(0, 0, canvas.width, canvas.height )
  handlePartials();
  hue++;
  requestAnimationFrame(animate);
}
animate();
