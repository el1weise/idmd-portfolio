function setup() {
    createCanvas(400, 400);
    background(212);
    noFill();
    dia = width;
}

function draw() {
  while (dia > 10) {
    circleColor();
    ellipse(width / 2, height / 2, dia, dia);
    dia -= 10;
  }
}

function circleColor() {
  fill(random(255),random(255),random(255));
}