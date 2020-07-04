class Florest1 {
    constructor() {
        _imgScene       = loadImage('../img/cenario/floresta3-min.png');

        _enemies = [];
        _enemies.push(new Enemy(new Sprite(_imgEnemy1, 60, 60, 104, 104, 28), new Position(width - 60, height - 60, 20), 10));
        _enemies.push(new Enemy(new Sprite(_imgEnemy2, 300, 300, 400, 400, 28), new Position(width, height-300, -20), 10));
        _enemies.push(new Enemy(new Sprite(_imgEnemy3, 134, 100, 200, 150, 16), new Position(width, height-500, -20), 20));

        super(_imgScene, 5);
    }

    draw() {
        this.loop();
        this.hero.loop();
        _enemies[indexEnemy].speed = random(10, 50);
        _enemies[indexEnemy].loop();

        if (_hero.collided(_enemies[indexEnemy])) {
            //_score.loop();
            noLoop();
            image(_imgGameOver, width / 2 - (_imgGameOver.width / 2), height / 2 - (_imgGameOver.height / 2))
        }

        if (_enemies[indexEnemy].isOutScreen) {
            //indexEnemy = indexEnemy < _enemies.length-1 ? indexEnemy+1 : 0;
            indexEnemy = parseInt(random(0, _enemies.length));
            _enemies[indexEnemy].speed = random(10, 50);
        }

        _score.loop();

    }

    keyPressed(key) {
        if (key == 32) {
            _hero.jump();
        }
    
        if (key == 27) {
            noLoop();
        }
    }

    nextStage() {
        return new Florest3();
    }
}