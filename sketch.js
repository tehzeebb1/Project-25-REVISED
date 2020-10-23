
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bottem, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	dustbinObj=new Dustbin(1200,650);
	ground1 = new Ground(width/2, 670, width, 20);
	 ball = new Paper(200, 450, 40);
	 
	
	
	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  


  
ground1.display();
ball.display();
dustbinObj.display();
  drawSprites();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	console.log("Hi I am here")
	Matter.Body.applyForce(ball.body,ball.body.position,{x:1100,y:-1100});
}
}

