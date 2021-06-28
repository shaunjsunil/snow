class Snowflakes {
    constructor(x,y){
    var options={
    friction : 0.1,
    density : 0.1,
    restitution : 0,
    }
    this.x=x;
    this.y=y;
    this.r=20
    this.body=Bodies.circle(this.x,this.y,this.r,options)

    World.add(world, this.body);
    
}
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    fill("green")
    ellipse(0,0,this.r,this.r)
    pop()
    
    
    
    }
    
    }