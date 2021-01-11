// when I remove the background the previous copies of the robot are not overwritten and hang around

function setup() {
  createCanvas(400, 400);
  smooth();
  strokeWeight(2);
}

function draw() {
  background(255);
  translate(mouseX-266, mouseY-162);
  // Neck
  stroke(102);
  line(266,257,266,162);
  line(266+10,257,266+10,162);
  line(266+20,257,266+20,162);
  
  // Antennae
  line(276,155,246,112);
  line(276,155,306,56);
  line(276,155,342,170);
  
  // Body
  noStroke();
  fill(102);
  ellipse(264,377,66,66);
  fill(0);
  rect(219,257,90,120);
  fill(102);
  rect(219,274,90,6);
  
  // Head
  fill(200,150,10);
  ellipse(276,155,90,90);
  fill(12,78,107);
  ellipse(288,150,6,6);
  fill(250,10,150);
  ellipse(263,148,10,10);
  ellipse(296,130,8,8);
  fill(107,12,12)
  ellipse(305,162,6,6);
}