var movingObject = document.createElement('div');
movingObject.style.position = 'absolute';
movingObject.style.width = '100px';
movingObject.style.height = '100px';
movingObject.style.backgroundColor = 'red';
document.body.appendChild(movingObject);
var x = 0;
var y = 0;
var dx = 1;
var dy = 1;
function move() {
  x += dx;
  y += dy;
  movingObject.style.left = x + 'px';
  movingObject.style.top = y + 'px';
  if (x > window.innerWidth - 100) {
    dx = -1;
  }
  if (x < 0) {
    dx = 1;
  }
  if (y > window.innerHeight - 100) {
    dy = -1;
  }
  if (y < 0) {
    dy = 1;
  }
}
setInterval(move, 10);

document.body.style.overflow = 'hidden';

movingObject.style.borderRadius = '50px';