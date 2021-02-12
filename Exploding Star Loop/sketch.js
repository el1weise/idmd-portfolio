var x = 250;
var y = 250;
var w = 5;
//var r = (w-50)/2;
var w1 = 0;
var w2 = 0;
var w3 = 0;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  //fill(r, 0, 0);
  redShade = map(w, 0, width, 0, 255);
  fill(redShade,0,0);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1; 
    //r += 1.2;
  } else {
    w = 5; 
    //r = 0;
  }
  //orange circle
  if (w>500) {
    fill(255, 145, 0);
    ellipse(x,y, w1, w1);
    w1 += 3;
  }
  //yellow circle
  if (w1>500) {
    fill(255, 230, 38);
    ellipse(x,y, w2, w2);
    w2 += 6;
  }
  //white circle
  if (w2>500) {
    fill(255);
    ellipse(x,y,w3,w3);
    w3 += 9;
  }
  //reset circles
  if (w3>600) {
    w=1;
    w1=0;
    w2=0;
    w3=0;
  }
}