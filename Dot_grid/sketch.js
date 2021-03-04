var sqr; 

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(5);
  noLoop();
  sqrW = width/10
  sqrH = height/10
}

function draw() {
  for (let y = sqrH; y < height - sqrH; y = y + sqrH) {
    for (let x = sqrW; x < width - sqrW; x = x + sqrW) {
      circleColor();
      strokeWeight(5);
      point(x, y);
      strokeWeight(1);
      line(x,y,width/2,height/2);
    }
  }
}

function circleColor() {
  stroke(random(255),random(255),random(255));
}