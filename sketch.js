var ship , ship1;
var sea, sea1;
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
sea1=loadImage("sea.png")
}

function setup(){
  createCanvas(600,300);
  
  sea = createsprite(600,300);
  sea.addImage(sea.png)
  sea.scale=0.5;
  sea.velocityx =-1;

   ship=createsprite(50,200,20,50);
   ship.addAnimation("running",ship1);
   var edges=Edgecreatesprite();

   ship.scale=0.25;
   ship.x =90;
   ship.y =300;

}

function draw() {
  background("blue");
 if(keydown("enter")){
   ship.velocityx = -5;
}
if(keydown("left")){
 ship.velocityx = -5;
}
 
 if (sea.x < 0){
   sea.x = sea.width/2;
 }
 ship.collide(edges[3])

 drawsprites();
}