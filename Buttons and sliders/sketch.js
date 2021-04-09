//Movement and color
let xoff = 100;
let yoff = 300;
let rxoff = 1000;
let ryoff = 1001;
let gxoff = 2000;
let gyoff = 2000;
let bxoff = 3000;
let byoff = 3000;
let inc = 0.001;
let start = 0;
let rstart = 0;
let gstart = 100;
let bstart = 200;
//slider and button
let value;
let value_text;
let intensity_slider;
//direction button
let dir_button;
let dir = 1;
//random button
let rand_button;

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
  //slider
  intensity_slider = createSlider(1, 10, 5, 0.5);
  value_text = createP('the intensity is: ' + value);
  //direction button
  dir_button = createButton('change direction');
  dir_button.position(5, 375);
  dir_button.mousePressed(changeDir);
  //random button
  rand_button = createButton('randomize colors');
  rand_button.position(150, 375);
  rand_button.mousePressed(randomize);
}

function changeDir() {
  dir *= -1;
}

function randomize() {
 start *= random(10);
  rstart *= random(10);
  gstart*= random(10);
  bstart*= random(10);
}

function draw() {
  loadPixels();
  yoff = 0;
  ryoff = 0;
  gyoff = 0;
  byoff = 0;

  value = intensity_slider.value();
  value_text.html('the intensity is: ' + value / 100);

  for (y = 0; y < height; y++) {
    xoff = start;
    rxoff = rstart;
    gxoff = gstart;
    bxoff = bstart;
    for (x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let r = noise(xoff, yoff) * 255;
      let rcolor = noise(rxoff, ryoff) * 255;
      let gcolor = noise(gxoff, gyoff) * 255;
      let bcolor = noise(bxoff, byoff) * 255;
      pixels[index] = (rcolor); //red
      pixels[index + 1] = (gcolor); //green
      pixels[index + 2] = (bcolor); //blue
      pixels[index + 3] = (r); //brightness
      xoff += (value / 100) * dir;
      rxoff += (value / 100) * dir;
      gxoff += (value / 100) * dir;
      bxoff += (value / 100) * dir;
    }
    yoff += (value / 100) * dir;
    ryoff += (value / 100) * dir;
    gyoff += (value / 100) * dir;
    byoff += (value / 100) * dir;
  }
  start += (value / 100);
  rstart += (value / 100);
  gstart += (value / 100);
  bstart += (value / 100);
  updatePixels();
  //noLoop();
  //print(dir);
}