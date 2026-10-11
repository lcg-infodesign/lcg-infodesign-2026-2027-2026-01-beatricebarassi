let xMax = 400
let yMax = 400
let y = 0
let velocita = 0.7
  
function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(146, 138, 204);
  noStroke()

  push()
  //tentacoli medusa 
  fill(122, 60, 137)
  rect(148, 160, 23, 170, 14) // tentacolo 1
  
  fill(110, 60, 137)
  rect(176, 160, 21, 130, 14) // tentacolo 2

  fill(150, 60, 137)
  rect(203, 160, 25, 160, 14) // tentacolo 3

  fill(131, 60, 137)
  rect(233, 160, 22, 140, 14) //tentacolo 4

  fill(200, 100, 157, 95)
  rect(155, 160, 9, 190, 14) // tentacolo 1 piccolo
  
  fill(200, 100, 127, 95)
  rect(177, 160, 7, 150, 14) // tentacolo 2 piccolo

  fill(200, 100, 187, 95)
  rect(205, 160, 6, 170, 14) // tentacolo 3 piccolo

  fill(200, 100, 129, 95)
  rect(246, 160, 7, 160, 14) //tentacolo 4 piccolo

  fill(200, 100, 144, 95)
  rect(225, 160, 5, 120, 14) //tentacolo 5 piccolo

  //cappello medusa
  fill(86, 60, 127)
  noStroke()
  rectMode(CENTER)
  arc (200, 170, 180, 190, PI, TWO_PI)

/*
  //bolle sx
  fill(200, 100, 144)
  ellipse(80, 290, 16, 16);
  ellipse(75, 325, 32, 32);
  ellipse(55, 350, 18, 18);
  ellipse(113, 360, 16, 16);

  //bolle dx
   fill(200, 100, 144)
  ellipse(292, 300, 18, 18);
  ellipse(320, 345, 30, 30);
  ellipse(340, 320, 16, 16);
  ellipse(280, 345, 16, 16);
*/
  y = y - velocita
  if (y < -80 || y > 0) {
    velocita = -velocita;}
  
  fill(200, 100, 144);
  // Bolle sx
  ellipse(80, 290 + y, 16, 16);
  ellipse(75, 325 + y, 32, 32);
  ellipse(55, 350 + y, 18, 18);
  ellipse(113, 360 + y, 16, 16);


  // Bolle dx
  ellipse(292, 300 + y, 18, 18);
  ellipse(320, 345 + y, 30, 30);
  ellipse(340, 320 + y, 16, 16);
  ellipse(280, 345 + y, 16, 16);

  pop()
}