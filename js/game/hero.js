class Hero extends Character {
    constructor(imageSource, positionX, positionY, imgWidth, imgHeight, dWidth, dHeight) {
        super(imageSource, positionX, positionY - 20, imgWidth, imgHeight, dWidth, dHeight);

        this.initialY = this.y;
        this.jumpSpeed = 0;
        this.gravityForce = 4;
    }

    loop() {
        this.display();
        this.gravity();
        this.update();
    }

    update() {
        this.animate();
    }

    animate() {
        this.dx += this.dw;

        if (this.dx >= (this.LIMIT_WIDTH)) {
            this.dx = 0;
            this.dy += this.dh;

            if (this.dy > (this.LIMIT_HEIGHT)) {
                this.dx = 0;
                this.dy = 0;
            }
        }
    }

    jump() {
        this.jumpSpeed = -35;
        console.log('jumpSpeed:', this.jumpSpeed, 'y', this.y);
    }

    gravity() {
        if(this.y < 0) this.y = 0;

        this.y = this.y + this.jumpSpeed;
        this.jumpSpeed += this.gravityForce;

        if (this.y > this.initialY) {
            this.y = this.initialY;
            this.jumpSpeed = 0;
        }
    }

    collide(character) {
        return collideRectRect(
            this.x, this.y,
            this.width, this.height,
            character.x, character.y,
            character.width, character.height,
        );
    }
}