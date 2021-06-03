class Slingshot{
    constructor(object1, object2){
        var options= {
            bodyA : object1,
            bodyB : object2,
            stiffness: 0.04,
            length : 10
        }
        this.chain = Constraint.create (options)
        World.add(world, this.chain);
    }
    display(){
        var pos1= this.chain.bodyA.position
        var pos2 =this.chain.bodyB.position
        line(pos1.x , pos1.y, pos2.x, pos2.y);
    }
}

