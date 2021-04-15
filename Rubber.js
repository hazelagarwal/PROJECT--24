class Rubber{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 70,150, options);
      this.width = 70;
      this.height =150;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  