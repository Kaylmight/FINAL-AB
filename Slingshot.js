class Slingshot{
    constructor(body1, point2){
var options={
    bodyA:body1,
    pointB:point2,
    length: 10,
    stiffness: 0.04
}
this.sling = Constraint.create(options);
    World.add(world, this.sling);
    this.point2 = point2
}
 display(){
     if(this.sling.bodyA != null){
     
     var posA = this.sling.bodyA.position;
     var posB = this.point2;
     push();
     strokeWeight(10)
     line(posA.x, posA.y, posB.x, posB.y);
     pop();
 }
 }  
 fly(){
     this.sling.bodyA = null
 }
}