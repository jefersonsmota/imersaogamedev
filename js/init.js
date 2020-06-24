let _imgScene = null;
let _imgHero = null;
let _imgEnemy1 = null;
let _scene = null;
let _hero = null;
let _enemies = [];
let _gameSound = null;

function preload() {
    soundFormats('mp3', 'ogg');
    _imgScene = loadImage('../img/cenario/floresta.png');
    _imgHero = loadImage('../img/personagem/correndo.png');
    _imgEnemy1 = loadImage('../img/inimigos/gotinha.png');
    _gameSound = loadSound('../midia/trilha_jogo.mp3');
    _gameSound.setVolume(0.3);

    setFrameRate(30);
}

function setup() {
    //_gameSound.loop();
    createCanvas(windowWidth, windowHeight);
    _scene = new Scene(_imgScene, 5);
    _hero = new Hero(_imgHero, 0, height, 154, 189, 220, 270);
    _enemies.push(new Enemy(_imgEnemy1, width-60, height, 60, 60, 104, 104));
}

function draw() {
    _scene.loop();    
    _hero.loop();
    _enemies[0].loop();

    if(_hero.collide( _enemies[0])) {
        console.log('Collide');
    }

}

function keyPressed() {
    if(keyCode == 32) {
        _hero.jump();
    }
}