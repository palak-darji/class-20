var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "pink";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }else{
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }
  drawSprites();
}