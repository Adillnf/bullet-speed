var bullet,wall;
var thickness;

var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(-233,-321);
  wight = random(30,52);

  thihness = random(22,82);

  bullet=createSprite(1600, 200, 50, 50);
  bullet.velocityX = speed;

  wall=createSprite(1600,200,thickness,height/2);
  
}

function draw() {
  background(0);  

  

  if(wall.x=bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){

      bullet.shapeColour=colour(255,0,0);
    }
     if(deformation<180 && deformation>100){

      bullet.shapeColour=colour(230,230,0);
    }

    if(deformation<100){

      bullet.shapeColour=colour(0,255,0);
    }

    hasCollider();
  }
  drawSprites();
}

function hasCollider(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>= wallLeftEdge) {
       return true;
  }
     return false;

   if (hasCollider(bullet,wall))  {

    bullet.velocityX=0;
    var damage=0.5  * weight  *  speed* speed/(thickness *thickness *thickness);

    if(damage<10){
       wall.shapeColour=colour(0,255,0);
    }

   }

}