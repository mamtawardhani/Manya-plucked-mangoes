class Ground{
    constructor(){
      var GG ={
         isStatic:true
      }
      
      this.huaha = Bodies.rectangle(400,400,800,10,GG);
      World.add(world,this.huaha);
    }

    earth(){
      rectMode(CENTER);
      fill("red");
      rect(400,400,800,10);
    }

}
