class tree{
    constructor(){
        this.riot = loadImage("tree.png");
        var GG={
            isStatic:true,
        }
        this.tree = Bodies.rectangle(600,300,600,300,GG);
        World.add(world,this.tree);
    }
    grow(){
        var haff = this.josh.position;

        imageMode(CENTER);
        translate(pos.x,pos.y);
        
        image(this.riot,pos.x,pos.y,600,300);
    }
}