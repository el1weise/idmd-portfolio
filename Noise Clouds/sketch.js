let xoff = 100;
let yoff = 300;
let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  yoff = 0;
  for (y = 0; y < height; y++) {
    xoff = start;
    for (x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index] = sin(r*r)*255; //red
      pixels[index + 1] = sin(r*(r+1))*255; //green
      pixels[index + 2] = sin(r*(r+2))*255; //blue
      pixels[index + 3] = r; //brightness
      xoff += inc;
    }
    yoff += inc;
  }
  start += inc;
  updatePixels();
  //noLoop();
}