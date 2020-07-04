class Score {
    constructor() {
        this.points = 0;
        this.positionX = 30;

        this.delay = 0;
        this.isStoped = false;
    }

    loop() {
        this.display();
        this.update();
    }

    display() {
        fill(255);
        textSize(50);
        text(this.points, width - this.positionX, 50);
    }

    update() {
        if(this.isStoped) return;

        if(this.delay == 2) {
            this.points++;
            this.delay = 0;
        }

        let decimals = (this.points + '').length;
        if((decimals*30)+0 > this.positionX) {
            this.positionX += 30;
        }

        this.delay++;
    }

    toggleStop() {
        this.isStoped = true;
    }
}