const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body

var engine, world;
var box1, pig1;
var backgroundImage
var bg = 'sprites/bg.png'
var score = 0;
var gameState = 'onSling';


function preload(){
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   

    bird = new Bird(220,50);

    sling = new Slingshot(bird.body, {x:220, y:50} )

    platform = new Ground(100, 350, 300, 260);
}

function draw(){
    if(backgroundImage)
        background(backgroundImage);
    fill(255)
    textSize(40)
    text('ScOrE = '+score, 900, 30)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    

    platform.display();


    bird.display();
    sling.display();
}

function mouseDragged(){
    if(gameState != "launched"){
        Body.setPosition(bird.body, {x:mouseX, y:mouseY})
    }
}

function mouseReleased(){
    sling.fly()
    gameState = "launched"
}

function keyPressed(){
    if(keyCode == 32){
        bird.trajectory = [];
        Body.setPosition(bird.body, {x:220, y:50})
        sling.attach(bird.body);
        gameState = "onSling"
    }
}

async function getBackgroundImg(){
var response  = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

var resJSON = await response.json()
var dateTime = resJSON.datetime;
var time = dateTime.slice(11, 13) 

if(time>=6 && time<=18){
    bg = 'sprites/bg.png' 
}
else{
    bg = "sprites/bg2.jpg "
}
backgroundImage = loadImage(bg)
} 