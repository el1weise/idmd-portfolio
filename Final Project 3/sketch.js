//small triangles
let ba = [];
let movesX = [];
let movesY = [];
let sz;
let numB;
let monster_button;
let monsterNum = 1;
let xoff, yoff, noiseX, noiseY, n, p;
//slider
let increment_slider;
let value = 1;
//controlled shape
let myX, myY, speedB, diam, rColor, cColor;

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

function setup() {
  createCanvas(600, 400);
  //small triangles
  sz = 10;
  for (let i = 0; i < numB; i++) {
    ba.push(new Monster(width / 2, height / 2, randColor(), sz));
    movesX.push(noiseX = noise(xoff) * p * value);
  movesY.push(noiseY = noise(yoff) * p * value);
  }
  monster_button = createButton("Add monster");
  monster_button.position(5, 375);
  monster_button.mousePressed(addMonster);
  xoff = 100;
  yoff = 200;
  //slider
  increment_slider = createSlider(1, 10, 5, 0.5);
  value_text = createP("the increment is: " + value);
  //controlled shape
  myX = width / 2;
  myY = height / 2;
  speedB = 5;
  diam = 50;
  rColor = 0;
  cColor = randColor();
}

function draw() {
  background(rColor);
  //small triangles
  n = random(1);
  if (n < 0.5) {
    p = -1;
  } else {
    p = 1;
  }
  // noiseX = noise(xoff) * p * value;
  // noiseY = noise(yoff) * p * value;
  for (let i = 0; i < ba.length; i++) {
    //print(noiseX);
    ba[i].display();
    ba[i].move(movesX[i],movesY[i]);
  }
  deleteItem(myX, myY);
  xoff += 0.1;
  yoff += 0.1;
  //print(value);
  //slider
  value = increment_slider.value();
  value_text.html("the increment is: " + value);
  //controlled shape
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      myX = min(width - diam / 2, (myX += speedB));
    } else if (keyCode == LEFT_ARROW) {
      myX = max(0 + diam / 2, (myX -= speedB));
    } else if (keyCode == UP_ARROW) {
      myY = max(0 + diam / 2, (myY -= speedB));
    } else if (keyCode == DOWN_ARROW) {
      myY = min(height - diam / 2, (myY += speedB));
    }
  }
  fill(color(cColor));
  blob(myX, myY, diam);
  rColor = ba.length * 3;
}

//small triangles
function randColor() {
  return color(random(255), random(255), random(255));
}

function addMonster() {
  ba.push(
    new Monster(
      random(width / 16, width - width / 16),
      random(height / 16, height - height / 16),
      randColor(),
      sz
    )
  );
  movesX.push(noiseX = noise(xoff) * p * value);
  movesY.push(noiseY = noise(yoff) * p * value);
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
    if (dist(cX, cY, ba[i].x, ba[i].y) <= diam) {
      cColor = ba[i].c;
      ba.splice(i, 1);
    }
  }
}

//noise movement
function movementX() {
  noiseX = noise(xoff) * p * value;
}
function movementY() {
  noiseY = noise(yoff) * p * value;
}
