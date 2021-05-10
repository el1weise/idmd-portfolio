//small triangles
class Monster {
  constructor(xloc, yloc, colr, sze) {
    this.x = xloc;
    this.y = yloc;
    this.c = colr;
    this.s = sze;
  }
  display() {
    fill(this.c);
    slimTriangle(this.x, this.y, this.s, this.c);
  }
  move(xdir, ydir) {
    if (dist(this.x, this.y, mouseX, mouseY) > this.s / 2) {
      this.x += 1 * xdir;
      this.y += 1 * ydir;
    }
  }
}

//small triangles
let ba = [];
let sz;
let numB;
let monster_button;
let monsterNum = 1;
let xoff, yoff, noiseX, noiseY,n,p;
//slider
let increment_slider;
let value=1;
//controlled shape
let myX, myY, speedB, rad, rColor, cColor;

function setup() {
  createCanvas(600, 400);
  //small triangles
  sz = 10;
  for (let i = 0; i < numB; i++) {
    ba.push(new Monster(width / 2, height / 2, randColor(), sz));
  }
  monster_button = createButton("Add monster");
  monster_button.position(5, 375);
  monster_button.mousePressed(addMonster);
  xoff = 100;
  yoff = 200;
  //slider
  increment_slider = createSlider(1, 10, 5, 0.5);
  value_text = createP('the increment is: ' + value/100);
  //controlled shape
  myX = width / 2;
  myY = height / 2;
  speedB = 5;
  rad = 50;
  rColor = 0;
  cColor = randColor();
  
}

function draw() {
  background(220);
  //small triangles
  n=random(1);
if (n<0.5) {
    p=-1;
  } else {
    p=1;
  }
  for (let i = 0; i < ba.length; i++) {
    noiseX = noise(xoff)*p;
    noiseY = noise(yoff)*p;
    //print(noiseX);
    ba[i].display();
    ba[i].move(noiseX, noiseY);
  }
  deleteItem(myX, myY);
  xoff += value;
  yoff += value;
  print(value);
  //slider
  value = increment_slider.value();
  value_text.html('the increment is: ' + value/100);
  //controlled shape
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      myX = min(width - rad, (myX += speedB));
    } else if (keyCode == LEFT_ARROW) {
      myX = max(0 + rad, (myX -= speedB));
    } else if (keyCode == UP_ARROW) {
      myY = max(0 + rad, (myY -= speedB));
    } else if (keyCode == DOWN_ARROW) {
      myY = min(height - rad, (myY += speedB));
    }
  }
  fill(color(cColor));
  blob(myX, myY, rad);
  rColor = ba.length * 12;
}

//small triangles
function randColor() {
  return color(random(255), random(255), random(255));
}

function addMonster() {
  ba.push(new Monster(random(width / 16, width - width / 16),random(height / 16, height - height / 16),randColor(),sz));
}

function slimTriangle(locX, locY, locS, locC) {
  push();
  translate(locX, locY);
  noStroke();
  fill(locC);
  beginShape();
  vertex(0, -locS * 2);
  vertex(-locS / 2, locS);
  vertex(locS / 2, locS);
  endShape(CLOSE);
  pop();
}

//controlled shape
function blob(locX, locY, locS) {
  ellipse(locX, locY, locS);
}
//delete triangles
function deleteItem(cX, cY) {
  for (let i = ba.length - 1; i >= 0; i--) {
    if (dist(cX, cY, ba[i].x, ba[i].y) <= rad) {
      cColor = ba[i].c;
      ba.splice(i, 1);
    }
  }
}

function posNeg() {
  
}