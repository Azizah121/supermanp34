class box{
    constructor(x,y,w,h){
       var option={
           //isStatic:true,
          restitution:0.8,
          density:20,
            friction:0.5,
        };
        this.width=w;
this.height=h;
this.body=Matter.Bodies.rectangle(x,y,w,h, option);
Matter.World.add(world,this.body);
}
display(){
    push();
    var pos= this.body.position;
    var angle=this.body.angle;
    translate(pos.x,pos.y);
    rotate(angle);
   fill("red");
   stroke("black")
    strokeWeight(10);
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();
}
}