var rad = 25;
var x = rad;
var dir = 1;


function setup() {
  createCanvas(600, 52);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  let r = random(256);
  let g = random(256);
  let b = random(256);
  
  ellipse(x, height/2, rad*2, rad*2);
  if (x > width-rad || x < rad) {
    dir = dir * -1;
    fill(r, g, b);
  }
  x = x + 2*dir;
}