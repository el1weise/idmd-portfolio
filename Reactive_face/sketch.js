/*  Originally created by Alysse Galo
    Modified by Susan Evans
    Modified by Chandru Narayan
    Last edited 02/06/2020
    
    Draws a bald man, that "sings" to music
*/

// holds the audio input object
var mic;
// holds the current volume
var vol;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

  // This is the most important part, it wasn't added to the other version and I couldn't get anything to work until it was added.
function draw() {
  background(255);
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();
  // I think a colored background should be an indication of people being too loud, so I turned the volume requirement up
  if (vol > 0.5) {
    background(random(50), random(255), random(255));
  }
  
  allHair();
  ears();
  head();
  eyes(); 
  nose();
  bowtie();
  mouth();
  eyebrows();
}

function allHair() {
  
  hair(128, 235);
  hair(373, 235);
}
// Raise hair reacting to sound!
function hair(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 500);
  fill(255-adjustedVol, 255-adjustedVol/2, 255); //as the sounds get louder, the man gets younger. His hair turns to the natural blue it used to be and grows out.
  ellipse(x, y, 50 + adjustedVol, 80 + adjustedVol);
}

function ears() {
  ear(135, 295);
  ear(367, 295);
}

function ear(x, y) {
  noStroke();
  fill(243, 205, 159);
  ellipse(x, y, 50, 50);
  
  fill(234, 184, 125);
  ellipse(x, y, 30, 30);
}

function head() {
  noStroke();
  strokeWeight(2);
  fill(243, 205, 159);
  ellipse(250, 250, 250, 250);
}

function eyes() {
  eye(196, 224);
  eye(300, 224);
}

function eye(x, y) {
  if (mouseIsPressed) {
  stroke(0);
  strokeWeight(10); //he loves wearing mascara and it makes him brave, so he puts it on when he's suprised/scared
  fill(255, 255, 255);
  ellipse(x, y, 50, 30);
  
  noStroke();
  fill(0);
  ellipse(x, y, 30, 30);
  
  fill(255);
  ellipse(x + 9, y, 10, 10);
  } else
  stroke(0);
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(x, y, 50, 30);
  
  noStroke();
  fill(0);
  ellipse(x, y, 30, 30);
  
  fill(255);
  ellipse(x + 9, y, 10, 10);
}

function nose() {
  stroke(0);
  strokeWeight(2);
  line(248, 224, 248, 281);
  
  nostril(264, 281);
  nostril(232, 281);
}

function nostril(x, y) {
  stroke(0);
  strokeWeight(1);
  fill(242, 205, 153);
  ellipse(x, y, 20, 10);
}
// I had to change the order so that the bowtie was in the background and drawn in the correct order
function bowtie() {
  fill(234, 28, 46);
  triangle(190, 366, 250, 396, 190, 420);
  triangle(308, 368, 250, 396, 308, 420);
  rect(230, 380, 40, 30, 10);
}

// Make face sing by using the vol variable and map function / I did this
function mouth() {
  var adjustedVol = map(vol, 0, 1, 0, 500);
  noStroke();
  fill(242, 159, 159);
  ellipse(249, 325, 40+adjustedVol*1.4, 10+adjustedVol*1.2);
  fill(0);
  ellipse(249, 325, 30+adjustedVol*1.4, 5+adjustedVol*1);
}

function eyebrows() {
  eyebrow(279, 200);
  eyebrow(180, 200);
}

function eyebrow(x, y) {
  
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(10); //thickens the eyebrows when mouse is pressed
    fill(255, 0, 255);
    line(x, y-40, x + 37, y-40); //raises the eyebrows in shock when mouse is pressed
  } else {
    stroke(0);
    strokeWeight(2);
    fill(255, 255,0);
    line(x, y, x + 37, y);
  }
  
  print(mouseIsPressed);
}
  //function draw() is neccesary for mouseIsPressed
 