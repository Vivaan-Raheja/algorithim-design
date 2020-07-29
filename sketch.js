var fixedRect,movingRect,a,b;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 200);
  fixedRect.shapeColor="green";
  movingRect = createSprite(300,300,50,50);
  movingRect.shapeColor="green";
  a = createSprite(100,100,50,50)
a.shapeColor = "blue";
a.velocityY=2
  b = createSprite(100,300,50,50);
  b.shapeColor = "yellow";
b.velocityY=-2
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x< fixedRect.width/2 + movingRect.width/2
  &&movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor  = "red";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
}
  
if(a.x - b.x < a.width/2 + b.width/2
  &&b.x - a.x < b.width/2 + a.width/2){
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1)
  }

  if(a.y - b.y < a.height/2 + b.height/2
    &&b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1)
    }
  
  drawSprites();

}