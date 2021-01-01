class Bob {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 1,
            friction:0,
            density : 0.8
            
        }
            
       
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
        
    }
    display (){
        var bodypos = this.body.position;

        push();
        fill("pink");
        translate(bodypos.x,bodypos.y);
    
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
    
        
       
    

