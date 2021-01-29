class Ball {
    constructor(x,y,r) {
      var options = {
          restitution:1,
          isStatic:true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.width = width;
      this.height = height;
      this.r = r;
      this.image = loadImage("images/basketball.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y,this.width,this.height);
    }
  };
