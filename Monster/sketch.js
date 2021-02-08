var page=0;
var eyeDirection;
var jumpValue=0;
var jumpDir=1


function setup() {
  createCanvas(1440, 810);
}

function draw() {
  background(230);
  monster(720, 405-jumpValue);
  // call your monster function
  if (page == 0) {
    eyeDirection=map((mouseX/3)+180,380,390,0,2,true);
  } else {
    if (jumpValue==100) {
      jumpDir=-1;
    }
    if (jumpValue==0) {
      jumpDir=1;
    }
    if (jumpDir==1) {
      jumpValue=jumpValue+1;
    }
    if (jumpDir==-1) {
      jumpValue=jumpValue-1;
    }
  }
  print("page=" + page);
  print("jumpDir=" + jumpDir);
  print("jumpValue=" + jumpValue);
  // find coords
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  //https://editor.p5js.org/prewiredonline/sketches/mA6XRFf-G
  }
  
function monster(x,y) {
  legB(x,y);
  legB(x+125,y);
  legB(x+250,y);
  body(x,y);
  head(x,y);
  legF(x,y);
  legF(x-125,y);
  legF(x+125,y);
  eyeB(x,y);
  eyeS(x,y);
  eyeS(x-25,y);
}
  
function body(x,y) {
  noStroke();
  ellipse(x, y, 600, 300);
}

function head(x,y) {
  arc(x-350, y-50, 200, 100, PI-sin(-0.08715574), 2*PI+sin(0.08715574), CHORD);
  arc(x-350, y-50, 200, 100, 0, PI+sin(-0.08715574), CHORD);
}

function legF(x,y) { //foreground legs
  stroke(0);
  line(x-30,y+30,x,y-20); //short segment
  line(x+69,y+189,x,y-20); //long segment
}

function legB(x,y) { //background legs
  fill(255);
  stroke(0);
  line(x-160,y+108,x-168,y+160);
}

function eyeB(x,y) {
  stroke(0);
  strokeWeight(1);
  fill(255, 14, 14);
  ellipse(x-322, y-79, 12, 12);
  fill(0);
  ellipse(x-323+eyeDirection,y-79,8,6);
}

function eyeS(x,y) {
  
  stroke(0);
  strokeWeight(1);
  fill(255, 14, 14);
  ellipse(x-310,y-70,10,10);
  fill(0);
  ellipse(x-311+eyeDirection,y-70, 6,4);
  fill(255);
}

function mousePressed() {
  page = 1-page;
}
  