class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           restitution:2.0
        
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        
            var pos =this.body.position;
            push();
            //translate(pos.x, pos.y);
            rectMode(CENTER);
            fill(255);
           //rect(0, 0, this.width, this.height);
            image(this.image,700,400,this.width, this.height)
            pop();
          } 
        
    
}