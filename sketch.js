const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygonimg;

function preload() {
  polygonimg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200,400);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;

    //objects
    ball = Bodies.circle(50,200,50);
    World.add(world,ball);

    gobject = new Ground(50,50,20,20);
    stand = new Ground(350,350,400,20);
    block1 = new Block(350,310);
    block2 = new Block(270,310);
    block3 = new Block(430,310);
    block4 = new Block(190,310);
    block5 = new Block(510,310);
    block6 = new Block(350,250);
    block7 = new Block(270,250);
    block8 = new Block(430,250);
   // block9 = new Block(350,180,80,60);
  //  polygon1 = new Polygon(50,50);
    sling1 = new Slingshot(this.ball,{x:100, y:200});
    //create more blocks here with adding/substracting 80 from the previous block for x placement
}

function draw(){
    background("black");
drawSprites();
Engine.update(engine);
gobject.display();
stand.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
//block9.display();
//polygon1.display();
imageMode(CENTER);
image(polygonimg,ball.position.x,ball.position.y,50,50);
sling1.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  sling1.fly();
}