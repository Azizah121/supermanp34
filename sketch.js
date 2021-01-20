var world;
var ball, engine,World
var Engine=Matter.Engine;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;

function preload() {
bg=loadImage("GamingBackground.png");


}

function setup() {
  createCanvas(3000, 700);
  engine=Matter.Engine.create();
  world=engine.world;
floor= new ground(100,500,1600,20);
hero=new H(200,190,200);
slingshot= new Constraints(hero.body,{x:200,y:190});
box1= new box(400,235,30,30);
box2= new box(400,205,30,30);
box3= new box(400,175,30,30);
box4= new box(300,235,30,30);
box5= new box(300,205,30,30);
box6= new box(300,175,30,30);
box7= new box(350,235,30,30);
box8= new box(350,205,30,30);
box9= new box(350,175,30,30);
monster1= new M(650,180,100);
}

function draw() {
  background(bg);
  Matter.Engine.update(engine);
  floor.display();
  hero.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hero.body,{x:200, y:190})
   slingshot=new Constraints(hero.body,{x:200,y:190});

  }
}