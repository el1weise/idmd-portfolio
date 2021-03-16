//rectangular pattern
let cols = 10;
let rows = 5;
let count = 0;
let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];
let startX, startY, stopX, stopY;
let xi, yi;
let pct = 0.0;
let step = 0.05;
let dir = 1;
let w = [];
let timer = 2000;
let savedTime, elapsedTime;
let r=[];
let g=[];
let b=[];
let o=[];


function setup() {
  createCanvas(435, 345);
  background('pink');
  savedTime = millis();
  // calculate offset in pixels
  let xoff = width / (cols + 1);
  let yoff = height / (rows + 1);
  strokeWeight(3);
  for (let i = 0; i < rows; i++) { // slowest loop
    let y = (i + 1) * yoff; // calculate y pixel
    if (dir == 1) {
      for (let j = 0; j < cols; j++) { // fastest loop
        let x = (j + 1) * xoff; // calculate x pixel   
        x1.push(x);
        y1.push(y);
        w.push(random(2,7));
        r.push(random(255));
        g.push(random(255));
        b.push(random(255));
        o.push(random(100));
      }
    } else {
      for (let j = cols; j > 0; j--) { // fastest loop
        let x = (j) * xoff; // calculate x pixel  
        x1.push(x);
        y1.push(y);
        w.push(random(2,7));
         r.push(random(255));
        g.push(random(255));
        b.push(random(255));
        o.push(random(100));
      }
    }
    dir *= -1;
  }
}

function draw() {
  background('pink');
  pct += step;
  for (let i = 0; i < 50; i++) {
    fill(r[i],g[i],b[i],o[i]);
    ellipse(x1[i], y1[i], w[i] * pct, w[i] * pct);
  }

  elapsedTime = millis() - savedTime;
  if (elapsedTime >= timer) {
    savedTime = millis();
    if (step == 0.05) {
    step *= -1;
    } else {
      step *= -1;
      
    }
  }
  print(step,pct);
}