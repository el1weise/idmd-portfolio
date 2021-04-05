
let start = 0;
let myX, myY;
let inc = 0.01;
let xoff = 500;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  xoff = start;
  beginShape();
  for(let i=0;i<width;i++){
    myX = i;
    myY = noise(xoff)*height;
    //point(myX,myY);
    vertex(myX,myY);
    xoff += 0.01;
  }
  start += inc;
  endShape();
}