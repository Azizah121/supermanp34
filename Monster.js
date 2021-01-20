class M{
    constructor(x,y,r){
       var options={
    density:1,
    frictionAir:0.4,
        }
        this.r=r;
        this.body=Matter.Bodies.circle(x,y,this.r,options);
        this.image=loadImage("Monster-02.png");
    Matter.World.add(world,this.body);
    }
    display(){
      var pos= this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
      pop();
    }
    }