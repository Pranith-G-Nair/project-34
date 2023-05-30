
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,box1,box2,box3,box4
var box5,box6,box7,box8
var wall

function preload()
{
	
}

function setup() {
	createCanvas(1302, 600);


	engine = Engine.create();
	world = engine.world;
	var ball_option=
	{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
		ball=Matter.Bodies.circle(12,12,30,ball_option)
		World.add(world,ball)
		ground=new Ground(651,580,1302,10)
		wall=new Ground(1200,300,10,600)
		
	//Create the Bodies Here.
	box1=new Box(700,360,70,70)
	box2=new Box(800,360,70,70)
	box3=new Box(900,360,70,70)
	box4=new Box(1000,360,70,70	)
	
	box5=new Box(750,250,70,70)
	box6=new Box(850,250,70,70)
	box7=new Box(950,250,70,70)
	box8=new Box(800,200,70,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  ellipse(ball.position.x, ball.position.y,30,30)
  ground.show()
  wall.show()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{ 
	Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:10})}

	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-30,y:10})}
}


