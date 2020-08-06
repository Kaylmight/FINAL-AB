class Chain{
    constructor(body1, body2){
var options={
    bodyA:body1,
    bodyB:body2,
    length: 10,
    stiffness: 0.04
}
this.chain = Constraint.create(options);
    World.add(world, this.chain);
}
 display(){
     var posA = this.chain.bodyA.position;
     var posB = this.chain.bodyB.position;
     push();
     strokeWeight(10)
     line(posA.x, posA.y, posB.x, posB.y);
     pop();
 }  
}