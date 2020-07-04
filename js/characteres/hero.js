class Hero extends Character {
    constructor(sprite, position, jumpSound) {
        super(sprite, position);

        this.initialY = this.position.y;
        this.jumpSpeed = 0;
        this.gravityForce = 3;
        this.jumpCount = 0;
        this.jumpSound = jumpSound;
        this.jumpSound.setVolume(0.3);

        this.disabled = false;
        this.lifes = 3;        
    }

    loop() {
        this.display();
        this.gravity();
        this.update();
    }

    update() {
        this.animate();
    }

    jump() {
        if (this.jumpCount < 2) {
            this.jumpSpeed = -35;
            this.jumpCount++;
            this.jumpSound.play();
        }
    }

    gravity() {
        if (this.position.y < 0) this.position.y = 0;

        this.position.y = this.position.y + this.jumpSpeed;
        this.jumpSpeed += this.gravityForce;

        if (this.position.y > this.initialY) {
            this.position.y = this.initialY;
            this.jumpSpeed = 0;
            this.jumpCount = 0;
        }
    }

    collided(character) {
        // fill(255);
        
        // rect(
        //     this.position.x+(this.sprite.width/4), 
        //     this.position.y+(this.sprite.height/4), 
        //     this.sprite.width * 0.35, 
        //     this.sprite.height*0.75);

        // rect(
        //     character.position.x+(character.sprite.width/4), 
        //     character.position.y+(character.sprite.height/4), 
        //     character.sprite.width* 0.50, 
        //     character.sprite.height*0.75
        //     );

        return collideRectRect(
            this.position.x+(this.sprite.width/4), 
            this.position.y+(this.sprite.height/4),
            this.sprite.width * 0.35, 
            this.sprite.height*0.75,

            character.position.x+(character.sprite.width/4), 
            character.position.y+(character.sprite.height/4), 
            character.sprite.width*0.50, 
            character.sprite.height*0.75
        );
    }

    damage() {
        if(!this.disabled){
            this.lifes--;
            this.disabled = true;
            setTimeout(() => { this.disabled = false; }, 1500);
        }

        return this.lifes;
    }
}