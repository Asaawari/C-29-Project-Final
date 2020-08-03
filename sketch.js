const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground, chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20); 

    box1 = new Box(920,200,50,50);
    box2 = new Box(970,200,50,50);

    box3 = new Box(1020,200,50,50);
    box4 = new Box(1070,200,50,50);

    box5 = new Box(945,150,50,50);

    box6 = new Box(995,150,50,50);
    box7 = new Box(1045,150,50,50);

   box8 = new Box(970,100,50,50);
   box9 = new Box(1020,100,50,50);
 
    box0 = new Box(995,50,50,50);

    box10 = new Box(550,300,50,50);
    box11 = new Box(600,300,50,50);

    box12 = new Box(650,300,50,50);
    box13 = new Box(700,300,50,50);

    box14 = new Box(575,250,50,50);

    box15 = new Box(625,250,50,50);
    box16 = new Box(675,250,50,50);

   box17 = new Box(600,200,50,50);
   box18 = new Box(650,200,50,50);
 
    box19 = new Box(625,150,50,50);
    ball  = new Ball(mouseX, mouseY, 50, 50);
    chain = new Chain(ball.body,{x: 100, y: 233});    

    holder1 = new Holder(1000,230,220,30);
    holder2 = new Holder(630,330,220,30);

}

function draw(){
    background("#dec8e3");
    Engine.update(engine);
    strokeWeight(4);
    stroke(15);
    fill("blue");
    box1.display();
    fill("orange");
    box2.display();
    fill("green");
    ground.display();

    fill("red");
    box3.display();
    fill("blue");
    box4.display();
    fill("orange");
    box5.display();
    fill("green");
    box6.display();
    fill("red");
    box7.display();

    fill("blue");
    box8.display();
    fill("orange");
    box9.display();
    fill("green");
    box0.display();

    fill("red");
    box10.display();
    fill("blue");
    box11.display();

    fill("orange");
    box12.display();
    fill("green");
    box13.display();
    fill("green");
    box14.display();
    fill("red");
    box15.display();
    fill("blue");
    box16.display();

    fill("orange");
    box17.display();
    fill("green");
    box18.display();
    fill("red");
    box19.display();
    chain.display();
    fill("purple");
    ball.display();
       
    holder1.display();
    holder2.display();
}

