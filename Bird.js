class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //calling parent class constructor function
        this.image = loadImage("sprites/bird.png");
    }

    display()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        super.display(); //calling parent class display function
    }
};