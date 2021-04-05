let myX, myY
let xoff = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  myY = height/2;
  myX = noise(xoff)*width;
  ellipse(myX, myY, 25, 25);
  xoff +=0.01;
}