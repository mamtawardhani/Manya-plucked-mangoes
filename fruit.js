class mango{
    constructor(x,y){
        this.l = loadImage("mango.png");
        var option={
            isStatic:true,
            restitution:0.5,
            friction:0.4
        }
        this.josh = Bodies.circle(x,y,10,option);
        World.add(world,this.josh);
    }
    grow(){
        var haff = this.josh.position;

        push();
        translate(haff.x,haff.y);
        imageMode(CENTER);
        image(this.l,0,0,30,30);
        pop();
    }
}
