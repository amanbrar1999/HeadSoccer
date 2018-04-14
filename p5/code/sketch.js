let player1;
let player2;
var canvasWidth = 1300;
var canvasHeight = 800;
var floorThickness = 20;
var goalWidth = 150;
var goalHeight = 200;

function stadium(){
  createCanvas(canvasWidth,canvasHeight);
  background('lightblue');
  // floor
  fill('green');
  rect(0,canvasHeight-floorThickness,canvasWidth,floorThickness);
  // goal 1
  fill('white');
  rect(0,canvasHeight-floorThickness-goalHeight,goalWidth,goalHeight,goalWidth/2, 0, 0, 0);
  // goal 2
  rect(canvasWidth-goalWidth,canvasHeight-floorThickness-goalHeight,goalWidth,goalHeight,0,0,0,0);
}

function setup() {
  player1 = new Player(1);
  player2 = new Player(2);
  stadium();
  player1.display();
  player2.display();
}

function draw() {

  player1.updatePosition();
  player2.updatePosition();
}
