class Enemy extends Character {
    constructor(imageSource, positionX, positionY, imgWidth, imgHeight, dWidth, dHeight) {
        super(imageSource, positionX, positionY-20, imgWidth, imgHeight, dWidth, dHeight);
    }

    loop() {
        this.display();
        this.update();
    }

    update() {
        this.animate();
        this.move();
    }

    move() {
        this.x -= 10;

        if(this.x <= -this.width) {
            this.x = width-this.width;
        }
    }

    animate() {
        this.dx += this.dw;

        if(this.dx >= (this.LIMIT_WIDTH)) {
            this.dx = 0;
            this.dy += this.dh;

            if(this.dy > (this.LIMIT_HEIGHT)){
                this.dx = 0;
                this.dy = 0;
            }
        }
    }
}