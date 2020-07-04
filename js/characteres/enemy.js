class Enemy extends Character {
    constructor(sprite, position, speed) {
        super(sprite, position);

        this.speed = speed;
        this.callEnemy = false;
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
        this.position.x -= this.speed;

        if (this.position.x <= -(this.sprite.width-10)) {
            this.isOutScreen = true;
            this.position.x = width;
        } else if(this.position.x <= ((width/2) - this.sprite.width)) {
            this.callEnemy = true;
        }
        else {
            this.isOutScreen = false;
            this.callEnemy = false;
        }
    }
}