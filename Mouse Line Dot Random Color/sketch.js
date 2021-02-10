var r,g,b;
function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  r=random(255);
  g=random(255);
  b=random(255);
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(150, 150, mouseX, mouseY);
    fill(r,g,b);
    ellipse(mouseX, mouseY, 25, 25);
  }
}