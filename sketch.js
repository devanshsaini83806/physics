const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    restitution : 1.0
  }

  object = Bodies.circle(200,100,20, object_options );
  World.add(world,object);

  var ground_options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,380,400,60,ground_options);
 World.add(world,ground);
 

}

function draw() {
  background("lime");
  Engine.update(engine);
    
  ellipseMode(RADIUS);
  fill("orange")
  ellipse(object.position.x , object.position.y , 20, 0);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x , ground.position.y , 400,60);
  fill("yellow")
  rect(200,200,50,50);
  
} 