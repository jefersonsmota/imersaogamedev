class Sprite {
    constructor(imageSource, imgWidth, imgHeight, dWidth, dHeight, countSprites) {
        this.image          = imageSource;
        this.width          = imgWidth;
        this.height         = imgHeight;
        this.dx             = 0;
        this.dy             = 0;
        this.dw             = dWidth;
        this.dh             = dHeight;
        this.countSprites   = countSprites;
        this.dPosition      = 0;

        this.LIMIT_WIDTH = imageSource.width;
        this.LIMIT_HEIGHT = imageSource.height-dHeight;
    }

    next() {
        this.dPosition++;
        this.dx += this.dw;

        if(this.dPosition >= this.countSprites) {
            this.dx = 0;
            this.dy = 0;
            this.dPosition = 0;
        }
        else if (this.dx >= (this.LIMIT_WIDTH)) {
            this.dx = 0;
            this.dy += this.dh;

            if (this.dy > (this.LIMIT_HEIGHT)) {
                this.dx = 0;
                this.dy = 0;
                this.dPosition = 0;
            }
        }
    }
}