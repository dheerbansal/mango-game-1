var ground, tree, mango1, mango2,mango3,mango4, mango5,boyIMG,stone, slingshot
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
//ground
	ground = new Ground(600,780,1200,20)
//teee
	tree = new Tree(850,400,300,400)
//mango variables
	mango1 = new Mango(680,500,50);
	mango2 = new Mango(750,500,50);
	mango3 = new Mango(820,500,50)
	mango4 = new Mango(750,420,50);
	mango5 = new Mango(870,550,50)
//boy
	boy = createSprite(300,700,70,80);
	boy.addImage(boyIMG);
	boy.scale = 0.09;

//stone
	stone = new Stone(220,620,50);
//slingshot
    slingshot = new SlingShot(230,650,stone.body);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)


  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  slingshot.display();

  

  

  


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		slingshot = new SlingShot(215,630,stone.body);
		
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.body.setStatic(lmango.body,false);
	}
}

