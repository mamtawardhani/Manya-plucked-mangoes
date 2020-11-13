class XD{
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          length:80,
          stiffness:0.03
      }
      this.ropeEEE = bind.create(options);
      this.pointB = pointB;
      World.add(world,this.ropeEEE);
    }

    detach(){
      this.ropeEEE.bodyA = null;
    }

    display(){
      var a=this.ropeEEE.bodyA.position
      var b=this.pointB
      strokeWeight(7)
      line(a.x,a.y.b.x,b.y)
    }
  }