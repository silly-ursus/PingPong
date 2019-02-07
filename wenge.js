var startHeight = 20;
let positionOne=20;
let positionTwo=20;
let upCode;
let downCode;
var goingUp = true;
var aiModeOn = true;
var menuOff = true;
var score = 0;
var userScore = 0;
let	puckColor;

function setup() {
	createCanvas(800, 600);
	upCode = UP_ARROW;
	downCode = DOWN_ARROW;
	console.log('setup');
  console.log('score = ' + score);
  console.log('userScore = ' + userScore);
  puckColor = random(255);
}

function myText(){
  textSize(22);
  text('USER SCORE ', 50, 550);
  textSize(32);
  text(userScore, 50, 580);
  fill(255, 255, 253);
  
  textSize(22);
  text('AI SCORE', 650, 550);
  textSize(32);
  text(score, 650, 580);
  fill(255, 255, 253);
}

function keysPressed(){
if(keyCode === upCode && positionOne > 0){
		positionOne = positionOne - 20;		
		}
if(keyCode === downCode && positionOne < 520){
		positionOne = positionOne + 20;		
		}
if(keyCode === ENTER){
		menuOff = false;		
		}
}

function draw() {
  if(menuOff === true) {
    background(20); //off-black;
      myText();
    //User or Left User Puck properties

      leftPuck(positionOne);
    if(keyIsPressed){keysPressed();}
      if(keyCode === 49){aiModeOn = false}
      if(keyCode === 50){aiModeOn = true}
    if(aiModeOn === true){
      aiMode();
  } else if(menuOff === false) {displayMenu();}
		
}
}

function aiMode(){
  if(goingUp === true){
      positionTwo = positionTwo + 10;
	    if(mouseY == positionTwo+20 || mouseY == positionTwo-20 && mouseX === 20){
        score = score + 1
        console.log('AI score = ' + score);}
      if(positionTwo === 540){
        goingUp = false;
      }
    }
  if(goingUp === false){
      positionTwo = positionTwo - 10;
    if(positionTwo < 0){ goingUp = true;}
    }

  //AI or Right User Puck properties
  rightPuck(positionTwo);
  
  //userScore
  if(mouseY == positionOne+20 || mouseY == positionOne-20 && mouseX === 20){
        userScore = userScore + 1
        console.log('userScore = ' + userScore);}
  
  puck();
}

function displayMenu(){
	background('pink');
}

function leftPuck(phei) {
	rect(20, phei, 25, 100);
	fill(200, 200, puckColor);
}

function rightPuck(phei) {
	rect(760, phei, 25, 100);
	fill(100, puckColor, 200);
}

function puck(){
  ellipse(mouseX, mouseY, 55, 55);
  fill('white');
}