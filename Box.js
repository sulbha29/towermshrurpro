class Block  {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
 
  //  this.image = loadImage("sprites/wood1.png");
  this.body = Bodies.rectangle(x,y,20,20,options);
  this.width = 20;
  this.height = 20;
  World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
