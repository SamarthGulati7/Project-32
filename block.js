class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible= 255;
      World.add(world,this.body);
      
    }
    display(){
      if(this.body.speed<3){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      strokeWeight(3);
      stroke("blue");
      rect(0, 0, this.width, this.height);
      pop();
        
        }
        else{
        World.remove(world,this.body);
        push();
        this.visible=this.visible-5;
        pop();
      }
    }
score(){
    if(this.visible<0&& this.visible>=-105){
  score++;
    }  
}      
    
  };