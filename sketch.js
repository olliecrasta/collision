var fixedRect,movingRect,edges;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.setVelocity(4,-3);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.setVelocity(-7,5);
  edges = createEdgeSprites();
}

function draw() {
  background(2,25,25);  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  if((Math.abs(movingRect.x - fixedRect.x) <= movingRect.width/2 + fixedRect.width/2)&&(Math.abs(movingRect.y - fixedRect.y) <= movingRect.height/2 + fixedRect.height/2)){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";
    if(Math.abs(movingRect.x-fixedRect.x)<=movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX*= -1;
      fixedRect.velocityX*=-1;
    }
    if(Math.abs(movingRect.y-fixedRect.y)<=movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY*= -1;
      fixedRect.velocityY*=-1;
    }
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green";
    
  }
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  drawSprites();
}