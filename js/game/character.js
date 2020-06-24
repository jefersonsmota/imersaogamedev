class Character {
    constructor(imageSource, positionX, positionY, imgWidth, imgHeight, dWidth, dHeight) {
        this.image      = imageSource;
        this.x          = positionX;
        this.y          = (positionY-imgHeight);
        this.width      = imgWidth;
        this.height     = imgHeight;
        this.dx         = 0;
        this.dy         = 0;
        this.dw         = dWidth;
        this.dh         = dHeight;

        this.LIMIT_WIDTH = imageSource.width;
        this.LIMIT_HEIGHT = imageSource.height-dHeight;
    }

    display() {
        image(
            this.image,
            this.x, this.y, 
            this.width, this.height, 
            this.dx, this.dy, 
            this.dw, this.dh
            );
    }
}
