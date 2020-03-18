const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies
var ground, ball, engine, world
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  var options2 = {
    restitution: 1
  }
  ball = Bodies.circle(400,200,20,options2)
  ground = Bodies.rectangle(400,390,800,20,options)
  World.add(world,ball);
  World.add(world,ground);
  console.log(ball)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20,20)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20)

}