let _imgScene = null;
let _imgHero = null;
let _imgEnemy1 = null;
let _imgEnemy2 = null;
let _scene = null;
let _hero = null;
let _enemies = [];
let _gameSound = null;
let _jumpSound = null;
let indexEnemy = 0;
let _score = null;
let _imgGameOver = null;

function preload() {
    soundFormats('mp3', 'ogg');
    _imgScene = loadImage('../img/cenario/floresta.png');
    _imgHero = loadImage('../img/personagem/correndo.png');
    _imgEnemy1 = loadImage('../img/inimigos/gotinha.png');
    _imgEnemy2 = loadImage('../img/inimigos/troll.png');
    _imgGameOver = loadImage('../img/assets/game-over.png');
    _jumpSound = loadSound('../midia/somPulo.mp3');
    _gameSound = loadSound('../midia/trilha_jogo.mp3');
    _gameSound.setVolume(0.3);


    setFrameRate(35);
}

function setup() {
    //_gameSound.loop();
    createCanvas(windowWidth, windowHeight);
    _scene = new Scene(_imgScene, 5);
    _hero = new Hero(new Sprite(_imgHero, 154, 189, 220, 270, 16), new Position(0, height-189, 20), _jumpSound);
    _enemies.push(new Enemy(new Sprite(_imgEnemy1, 60, 60, 104, 104, 28), new Position(width-60, height-60, 20), 10));
    _enemies.push(new Enemy(new Sprite(_imgEnemy2, 300, 300, 400, 400, 28), new Position(width, height-300, -20), 10));
    _score = new Score();

    randomEnemy = random(_enemies);
}

function draw() {
    _scene.loop();    
    _hero.loop();
    _enemies[indexEnemy].loop();

    if(_hero.collided(_enemies[indexEnemy])) {
        //_score.loop();
        noLoop();

        image(_imgGameOver, width/2-(_imgGameOver.width/2), height/2-(_imgGameOver.height/2))
    }

    if(_enemies[indexEnemy].isOutScreen) {
        indexEnemy = indexEnemy < _enemies.length-1 ? indexEnemy+1 : 0;
        //_enemies[indexEnemy].speed = random(10, 30);
    }


    _score.loop();
}

function keyPressed() {
    if(keyCode == 32) {
        _hero.jump();
    }
}