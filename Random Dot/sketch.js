var r,g,b;
function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {
  ellipse(mouseX, mouseY, 25, 25);
}

function mousePressed() {
  r=random(255);
  g=random(255);
  b=random(255);
  fill(r,g,b);
}