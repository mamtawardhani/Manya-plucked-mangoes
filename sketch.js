
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

//mam there is an error in thecode i dont know how to fix it please help:(
function preload(){
  root = loadImage("tree.png");
  boy = loadImage("boy.png");
}
function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
  world = engine.world;
  
  tree = createSprite(600,230,10,10);
  tree.addImage("mango",root);
  tree.scale = 0.3;

  mani = createSprite(150,350,10,10);
  mani.addImage("hiro",boy);
  mani.scale = 0.09;

  ground = new Ground();
  LIAM = new stone(100,300);

  fruit1 = new mango(570,130);
  fruit2 = new mango(530,170);
  fruit3 = new mango(620,200);
  fruit4 = new mango(650,110);
  fruit5 = new mango(690,146);
  fruit6 = new mango(720,212);
  fruit7 = new mango(620,90);
  fruit8 = new mango(600,180);
  fruit9 = new mango(480,180);

  boww = new XD(LIAM.stone,{x:130,y:250});

	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);

 background(rgb(0,0,100));

  drawSprites();

  ground.earth();

 LIAM.create();

  fruit1.grow();
  fruit2.grow();
  fruit3.grow();
  fruit4.grow();
  fruit5.grow();
  fruit6.grow();
  fruit7.grow();
  fruit8.grow();
  fruit9.grow();
  

  // collide(LIAM,fruit1);
  // collide(LIAM,fruit2);
  // collide(LIAM,fruit3);
  // collide(LIAM,fruit3);
  // collide(LIAM,fruit4);
  // collide(LIAM,fruit5);
  // collide(LIAM,fruit6);
  // collide(LIAM,fruit7);
  // collide(LIAM,fruit8);
  // collide(LIAM,fruit9);
}

function mouseDragged(){
  Matter.Body.setPosition(LIAM.stone,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  boww.detach();
}
// function collide(l,I){

//   var pos =l.ore.position;
//   var pos2 = I.josh.position;

//   var right = pos.x + L.ore.width/2;
//   var left = pos2.x + I.juice.diameter/2;

//   if(right >= left ){
//     Matter.Body.setStatic(l.body,false);
//   }
// }



