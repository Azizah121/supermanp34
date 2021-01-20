class ground{
    constructor(x,y,w,h){
       var option={
            isStatic: true,
            friction:1
        };
this.body=Matter.Bodies.rectangle(x,y,w,h, option);
this.width=w;
this.height=h;
Matter.World.add(world,this.body);
}
display(){
    fill("white");
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}