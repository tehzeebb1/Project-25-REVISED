class Dustbin
{
    constructor(x, y)
    {
        this.x=x;
		this.y=y;
		this.dustbinWidth=250;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	

		this.image = loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

		
    }
    display()
    {
		image(this.image, 1070, 330, this.width, this.height);
		
		var posBottom=this.bottomBody.position;
		var posRight=this.rightWallBody.position;
		var posLeft=this.leftWallBody.position;

		

            push();
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rect(posBottom.x,posBottom.y,this.dustbinWidth, this.wallThickness);
			pop(); 
			
			push();
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rect(posRight.x,posRight.y,this.wallThickness, this.dustbinHeight);
			pop();

			push();
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rect(posLeft.x,posLeft.y,this.wallThickness, this.dustbinHeight);
			pop();
    }
}
