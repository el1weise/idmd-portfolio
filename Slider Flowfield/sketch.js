let res = 20;
let rows, cols;
let xoff, yoff,zoff=1;
//let inc = 0.1;
let increment_slider;
let value;

function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res;
  noStroke();
  increment_slider = createSlider(1, 10, 5, 0.5);
  value_text = createP('the increment is: ' + value);
}

function draw() {
  background(220);
  value = increment_slider.value();
  value_text.html('the increment is: ' + value);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      n=noise(xoff,yoff,zoff)*255;
      fill(n);
      rect(i*res,j*res,res,res);
      let dx = i*res+res/2;
      let dy=j*res+res/2;
      drawDial(dx,dy,n);
      xoff+=value/250;
    }
    yoff+=value/250;
  }
  zoff+=value/1250;
}

function drawDial(x,y,n){
  push();
  translate(x,y);
  stroke(abs(255-n));
  let a = map(n,0,255,0,TWO_PI);
  let angle=atan(a);
  ellipse(0,0,5,5);
  rotate(angle*50);
  //line(0,0,0,-10);
  triangle(-2.5,0,2.5,0,0,res/2-res/10);
  noStroke();
  pop();
}