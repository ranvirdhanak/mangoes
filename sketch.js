const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var tree;
var ground;
var backgroundImg;
var boy;
var mango;
var stone;
var mango2;
var slingShot;

function preload()
{
  backgroundImg = loadImage("background.png");
}	

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

     tree = new Tree(1050,350,450,500);
	 ground = new Ground(640,590,1360,20);
	 boy = new Boy(300,502,250,300);
	 mango = new Mango(960,200,50,40);
	 stone = new Stone(220,420,40,40);
	 mango2 = new Mango(1110,210,50,40);
	 slingshot = new Slingshot(stone.body,{x: 235,y: 420});

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  

 

tree.display();
ground.display();
boy.display();
mango.display();
stone.display();
mango2.display();
slingshot.display();

detectollision(stone,mango);
detectollision(stone,mango2);

}  

function detectollision(lmango,lstone){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position


var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}


}


function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
  

}



function mouseReleased(){

slingshot.fly();

}











