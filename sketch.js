var car, wall;
var speed, width;
var deformation;
var color;


function setup() {
  createCanvas(1600,800);

  car = createSprite(50, 200, 50, 50);
 wall = createSprite(1500,200,10,1600);

 car.velocityX = 10;
 car.collided = wall;

speed = random(55,90);
weight = random(400,1500);

}

function draw() {
  background(255,255,255);  

if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed/22509;

if(deformation>180){
  car.shapecolor = "green";
}

if(deformation<180 && deformation>100){
  car.shapecolor = "yellow";
}
if(deformation<100){
  car.shapecolor = "red";
}

};

  drawSprites();
}