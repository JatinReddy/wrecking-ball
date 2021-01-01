class Rope {
    constructor(bodyA,pointB){
        
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 400
            }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){

        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;

        line(posA.x,posA.y,posB.x,posB.y);
             
             
    }
}