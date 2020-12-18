class Plinko{
    constructor(x,y){
       var options = {
            'isStatic': true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop();
      }
}