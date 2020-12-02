const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var ground1;
var stand;
var slingshot1;
var polygon1;
var score=0;
var backgroundImg;

function setup() {
  createCanvas(1200,600);
  stroke(255)


  engine = Engine.create();
  world = engine.world;

  polygon1=new Polygon(100,320); 

  ground1=new Ground(600,595,1200,30);
  stand=new Ground(450,450,300,15);

  block1=new Block(360,420,30,40);
  block2=new Block(390,420,30,40);
  block3=new Block(420,420,30,40);
  block4=new Block(450,420,30,40);
  block5=new Block(480,420,30,40);
  block6=new Block(510,420,30,40);
  block7=new Block(540,420,30,40);
  block8=new Block(390,380,30,40);
  block9=new Block(420,380,30,40);
  block10=new Block(450,380,30,40);
  block11=new Block(480,380,30,40);
  block12=new Block(510,380,30,40);
  block13=new Block(420,340,30,40);
  block14=new Block(450,340,30,40);
  block15=new Block(480,340,30,40);
  block16=new Block(450,300,30,40);

  slingshot1=new SlingShot(polygon1.body,{x:100,y:300});
}

function draw() {

  background(0); 

 Engine.update(engine);

 ground1.display();
 stand.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 polygon1.display();
 slingshot1.display();

 textSize(35);
 fill("blue");
 text("Score: "+score,1000,100);
 
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 


}


function mouseDragged(){

Matter.Body.setPosition(polygon1.body,{x: mouseX,y: mouseY});

}

function mouseReleased(){

slingshot1.detatch();  

}

function keyPressed(){

if(keyCode===32){

slingshot1.attach(polygon1.body);

}
}


