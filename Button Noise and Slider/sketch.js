let x, y, clr
let xoff1 = 300;
let xoff2 = 500;
let intensity_slider;
let title;
let value;
let value_text;
let color_button;
let r,g,b;

function setup() {
  createCanvas(400, 400);
  clr=color('blue');
  intensity_slider = createSlider(1, 10, 5, 0.5);
  value_text = createP('the intensity is: ' + value);
  title = createP('perlin noise movement');
  title.position(125, 5);
  color_button = createButton('change color');
  color_button.position(5,375);
  color_button.mousePressed(changeColor);
}

function draw() {
  background(220);
  value = intensity_slider.value();
  value_text.html('the intensity is: ' + value / 100);
  clr = color(r,g,b);
  fill(clr);
  // x = random(width);
  // y = random(height);
  x = noise(xoff1) * width;
  y = noise(xoff2) * height;
  ellipse(x, y, 25, 25);
  xoff1 += value / 100;
  xoff2 += value / 100;
}

function changeColor() {
  r=random(255);
  g=random(255);
  b=random(255);
}