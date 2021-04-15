const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box;
var wrecker

function setup(){
    var canvas = createCanvas(4000,2000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(2040,300,70,70);
    box2 = new Box(2040,100,70,70);
    box3 = new Box(2040,100,70,70);
    box4 = new Box(2040,100,70,70);
    box5 = new Box(2040,100,70,70);
    box6 = new Box(2040,100,70,70);
    box7 = new Box(2040,100,70,70);
    box8 = new Box(2040,100,70,70);
    box9 = new Box(1940,100,70,70);
    box10 = new Box(1940,100,70,70);
    box11 = new Box(1940,100,70,70);
    box12 = new Box(1940,100,70,70);
    box13 = new Box(1940,100,70,70);
    box14 = new Box(1940,100,70,70); 
    box15 = new Box(1840,100,70,70); 
    box16 = new Box(1840,100,70,70); 
    box17 = new Box(1840,100,70,70); 
    box18 = new Box(1840,100,70,70); 
    box19 = new Box(1840,100,70,70); 
    box20 = new Box(1740,100,70,70);  

    wrecker = new Ball(1200,1200,20);

    string = new rope(wrecker.body,{x:1500,y:1500})

    ground = new Ground(2000,height,4000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display(); 
    box15.display(); 
    box16.display(); 
    box17.display(); 
    box18.display(); 
    box19.display(); 
    box20.display();  

    console.log(wrecker);
    wrecker.display();

    string.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(wrecker.body,{x:mouseX,y:mouseY})
}