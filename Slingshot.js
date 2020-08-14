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
    this.sling1 = loadImage('sprites/sling1.png');
    this.sling2 = loadImage('sprites/sling2.png');
    this.sling3 = loadImage('sprites/sling3.png');
}
 display(){
    image(this.sling1, 220, 20);
    image(this.sling2, 190, 20);
   

     if(this.sling.bodyA != null){
     
     var posA = this.sling.bodyA.position;
     var posB = this.point2;
     push();
     stroke("#301608")
     if(posA.x<240){
        strokeWeight(10)
        line(posA.x-25, posA.y, posB.x-10, posB.y);
        line(posA.x-25, posA.y, posB.x+30, posB.y);
        image(this.sling3, posA.x-30, posA.y-10, 15, 30)
     }
 
 else{
    strokeWeight(6)
        line(posA.x+25, posA.y, posB.x-10, posB.y);
        line(posA.x+25, posA.y, posB.x+30, posB.y);
        image(this.sling3, posA.x+30, posA.y-10, 15, 30)
    }
        pop(); 
 }
}
  
 fly(){
     this.sling.bodyA = null
 
}
attach(body){
    this.sling.bodyA = body
}
}


