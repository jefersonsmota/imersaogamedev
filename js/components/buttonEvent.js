class ButtonEvent {
    constructor(text, x, y, event) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.btn = createButton(this.text);
        this.btn.mousePressed(() => this._clickEvent());
        this.btn.addClass("botao-tela-inicial");

        this.event = event;
    }

    draw() {
        this.btn.position(this.x, this.y);
        this.btn.center("horizontal");
    }

    _clickEvent() {
        if(this.event)
            this.event();
    }

    remove() {
        this.btn.remove();
    }
}   