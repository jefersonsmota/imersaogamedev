function setup() {
    //_gameSound.loop();
    createCanvas(windowWidth, windowHeight);
    initSetup();
}

function draw() {
    _scene.draw();
}

function keyPressed() {
    if (keyCode == 32) {
        _hero.jump();
    }

    if (keyCode == 27) {
        noLoop();
    }
}

function initSetup() {
    _scene = new StartScreen();
    _hero = new Hero(new Sprite(_imgHero, 154, 189, 220, 270, 16), new Position(0, height-189, 20), _jumpSound);
    _score = new Score();

    randomEnemy = random(_enemies);
}