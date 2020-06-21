var form;
var canvas;
var athlete;
var ground;
var ground1;
var score = 0;
var gameState = PLAY;
var PLAY = 1;
var END = 0;
function setup(){
    canvas = createCanvas(700,400);
    form = new Form();
    athlete = createSprite(0,343,10,10);
    ground = createSprite(0,350,10000,5);
    ground1 = createSprite(0,250,10000,5);
}
function draw(){
    background("white");
    drawSprites();
    form.display();
    athlete.collide(ground);
    athlete.collide(ground1);
    athlete.velocity.x = 3;  
    if(keyCode === 38){
      //athlete.distance +=10;
      athlete.velocity.y = -4;
     form.hide();
    }
    if(keyCode === 40){
      athlete.velocity.y = 4;
    }
    text("score:"+score,50,100);
    score = score + Math.round(getFrameRate()/100);
    text("To go UP press UP_ARROW! TOgo DOWN press DOWN_ARROW",250,100)
    
    //border: 2px solid black;
  
}

//canvas{
   // margin-left: 10px;
   // margin-right: 10px;
   // margin-top: 10px;
   // border: 2px solid black;
 // }
  
