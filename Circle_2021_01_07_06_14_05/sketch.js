function setup() {
  createCanvas(600,400);
}

function draw() {
  if (mouseIsPressed) {
    fill(60,100,70);
  } else {
    fill(100,70,60);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
  