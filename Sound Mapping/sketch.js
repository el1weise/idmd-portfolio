var mic;
var vol = 0;
var xMax = 0;
var test = 0;

function setup() {
  createCanvas(600, 600);

  // create and start audio input
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function draw() {
  background(200);

  // get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  // add a call to the ease function here to smooth the volume variable
  // it should be of the form vol = vol + ease(......)
  //vol = vol + ease(1, vol, 3);
  //print(vol);

  // map vol from range 0 to 1 to range 0, 600
  var xVol = map(vol, 0, 1, 0, 600);

  // let x either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // map volume to x coordinate
  var xVol = map(vol, 0, 1, 0, 600);
  // let xMax either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // Draw ellipses for both instantaneous volume and Max volume
  fill(0, 0, 255);
  rect(xVol, 200, 50, 50);
  fill(255, 0, 0);
  rect(0, 400, xMax+50, 50);
}

function ease(target, current, ease) {
  return (target-current)/ease;
}