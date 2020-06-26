class Character {
    constructor(sprite, position) {
        this.sprite = sprite;
        this.position = position;
        
        // this.image      = imageSource;
        // this.x          = positionX;
        // this.y          = ((positionY - variationY)-imgHeight);
        // this.width      = imgWidth;
        // this.height     = imgHeight;
        // this.dx         = 0;
        // this.dy         = 0;
        // this.dw         = dWidth;
        // this.dh         = dHeight;
        // this.countSprites = countSprites;
        // this.dPosition = 0;

        this.isOutScreen = false;
    }

    display() {
        image(
            this.sprite.image,
            this.position.x, this.position.y, 
            this.sprite.width, this.sprite.height, 
            this.sprite.dx, this.sprite.dy, 
            this.sprite.dw, this.sprite.dh
            );
    }

    animate() {
        this.sprite.next();
        // this.dPosition++;
        // this.dx += this.dw;

        // if(this.dPosition >= this.countSprites) {
        //     this.dx = 0;
        //     this.dy = 0;
        //     this.dPosition = 0;
        // }
        // else if (this.dx >= (this.LIMIT_WIDTH)) {
        //     this.dx = 0;
        //     this.dy += this.dh;

        //     if (this.dy > (this.LIMIT_HEIGHT)) {
        //         this.dx = 0;
        //         this.dy = 0;
        //         this.dPosition = 0;
        //     }
        // }
    }
}
