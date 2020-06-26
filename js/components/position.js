class Position {
    constructor(positionX, positionY, variationY) {
        this.x          = positionX;
        this.y          = positionY - variationY;
        this.variationY = variationY;
    }
}