function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

//function draw() {
//  background(204);
//
//  for (let i = 0; i < mouseX; i = i + 10) {
//    line(i, 0, i, height);
//  }
//
//  for (let i = 0; i < mouseY; i = i + 10) {
//    line(0, i, width, i);
//  }
//}

function draw() {
  background(204);

  for (let i = 0; i < mouseX; i = i + 10) {
    stroke(25,60,100);
    line(i-width, 0, i, height);
  }

  for (let i = 0; i < mouseY; i = i + 10) {
    stroke(0,100,78);
    line(0, i, width, i-height);
  }
  
  //for (let j = width; j < mouseX; j = j - 10) {
  //  line(j, 0, j, height);
  //}

  //for (let k = height; k < mouseY; k = k - 10) {
  //  line(0, k, width, k);
  //}
}