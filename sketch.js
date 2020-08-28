var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(2,25,25);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  if((Math.abs(movingRect.x - fixedRect.x) <= movingRect.width/2 + fixedRect.width/2)&&(Math.abs(movingRect.y - fixedRect.y) <= movingRect.height/2 + fixedRect.height/2)){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green";
    
  }
  drawSprites();
}