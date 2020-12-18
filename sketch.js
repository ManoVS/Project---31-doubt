const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var plinkos2 = [];
var divisions = [];

var divisionHeight = 300; 

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(60,height,1200,20);

}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
//==========================================================================//

for(k = 0;  k <= width; k = k + 8){
  divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight))
}

  for(k = 0;  k <= width; k = k + 8){
    divisions[k].display();
  }
 

  //========================================================================//
  plinko();
  drawSprites();
}

function plinko(){
  for(var j = 15; j <= width; j = j +5){
    plinkos.push(new Plinko(j,175));
  }
  
  for(var j = 15; j <= width; j = j + 5){
    plinkos[j].display();
  }

 
    for(var j = 40; j <= width; j = j + 5){
    plinkos2.push(new Plinko(j,75));
  }

  for(var j = 40; j <= width; j = j + 5){
    plinkos2[j].display();
  }
 


}