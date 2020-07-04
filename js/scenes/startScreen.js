class StartScreen {
    constructor() { 

        this.btnStart = new ButtonEvent("Iniciar", 0 , height / 2, () => { _scene = new Florest1(); this.btnStart.remove(); })
    }

    draw() {
        this._loadBackground();
        this._loadText();
        this._button();
    }

    _loadBackground() {
        image(_imgScene, 0, 0, width, height);
    }

    _loadText() {
        textFont(_textFont);
        textAlign(CENTER);
        textSize(50);
        text("As aventuras de", width / 2, height / 3);
        textSize(150);
        text("Jenny Witch", width / 2, (height / 5) * 3);
    }

    _button() {
        this.btnStart.y = (canvas.height / 7) * 5;
        this.btnStart.draw();
    }
}