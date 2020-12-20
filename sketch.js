var box1;
var box2;

function setup() {
  createCanvas(800,400);
  box1=createSprite(200, 0, 50, 50);
  box1.shapeColor="green";
  box1.debug="true";
  box1.velocityY=2;
  box2=createSprite(200, 400, 50, 50);
  box2.shapeColor="green";
  box2.debug="true";
  box2.velocityY=-2;
}

function draw() {
  background(0);  
  if(box1.x-box2.x<=(box1.width+box2.width)/2
  && box2.x-box1.x<=(box1.width+box2.width)/2){
    box1.velocityX=-(box1.velocityX);
    box2.velocityX=-(box2.velocityX);
  }
  if(box1.y-box2.y<=(box1.height+box2.height)/2
  && box2.y-box1.y<=(box1.height+box2.height)/2){
    box1.velocityY=-(box1.velocityY);
    box2.velocityY=-(box2.velocityY);
  }
  drawSprites();
}