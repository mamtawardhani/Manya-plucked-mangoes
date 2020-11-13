class stone{
    constructor(x,y){
      this.brock = loadImage("stone.png");
      var property={
          
          restitution:0.5,
          density:0.4
      }
      this.stone = Bodies.circle(x,y,10,property);

      World.add(world,this.stone);
    }
    create(){
        var haff = this.stone.position;
        var angle = this.stone.angle;

        push();
        translate(haff.x,haff.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.brock,0,0,30,30);
        pop();
    }
}