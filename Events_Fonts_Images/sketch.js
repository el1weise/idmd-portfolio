var x = 75; //x position
var y = 75; //y position
var r=75; //radius of circle
var dog;
var dogWidth = 302.4;
var aspectRatio = 403.2 / dogWidth;

function preload() {
  dog = loadImage("Kofi.JPG");
}

function setup() {
  createCanvas(800, 800);
  //background(120);
  //frameRate(3);
  textSize(28);
  textFont("Cutive Mono");
  textAlign(CENTER,CENTER);
}

function mousePressed() {
  background(120);
  image(dog, 0, 0, width, width * aspectRatio);
}

function draw() {
  background(120); //rewrite over circle
  image(dog, 0, 0, width, width * aspectRatio);
  fill(0, 255, 0); //made circle green
  ellipse(x, y, r*2, r*2); //start at 75, 75, size = 150
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x=min(width-r, x+=10);
    } else if (keyCode == LEFT_ARROW) {
      x = max(0+r, x -=10);
    } else if (keyCode == UP_ARROW) {
      y = max(0+r, y-=10);
    } else if (keyCode == DOWN_ARROW) {
      y = min(height-r, y+=10);
    }
    paintText();
  }

  //line(x-75,y,x+75,y); //to center the text
  //line(x,y-75,x,y+75); //to center the text
  //console.log(x);
  console.log(keyCode);
}

function paintText() {
  if (x==r||x==(width-r)||y==r||y==(height-r)) {
    fill (255, 100, 0);
    text("Hit wall!", x, y);
  }
}

function arrow() {
  line(0,0,50,0);
  triangle()
}