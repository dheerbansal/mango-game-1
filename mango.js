class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            
            
        }
        
        this.radius = radius
        this.x = x
        this.y = y
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
       push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill("purple")
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
        
              }
}

