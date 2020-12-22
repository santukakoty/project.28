
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 var ground,stone;
 var boy,detectCollision;
 var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
function preload()
{
  //mangoImg = loadImage("mango.png");
  boy = loadImage("boy.png");
  tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);          


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
    ground = new Ground(650,height,1300,20);
   
    mango1 = new Mango(1020,230,18);
    mango2 = new Mango(1070,180,19);
    mango3 = new Mango(1040,40,20);
    mango4 = new Mango(944,247,24);
    mango5 = new Mango(970,90,20);
    mango6 = new Mango(1140,165,20);
    mango7 = new Mango(1020,150,30);
    mango8 = new Mango(1100,230,20);
    mango9 = new Mango(940,170,19);
    mango10 = new Mango(1160,230,23);
    mango11 = new Mango(870,190,25);
    mango12 = new Mango(1080,110,20);
    stone = new Stone(210,240,40);
    slingshot=new Slingshot(stone.body,{x:240,y:425});
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  image(boy ,200,340,200,300);
  image(tree ,800,0,400,600);
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  slingshot.display();
//boy.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  slingshot.fly();

}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body, false);
}
}


