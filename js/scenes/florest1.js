class Florest1 extends Scene {
    constructor() {
        _imgScene = loadImage('../img/cenario/floresta-min.png');
        
        _enemies = [];
        _enemies.push(new Enemy(new Sprite(_imgEnemy1, 60, 60, 104, 104, 28), new Position(width - 60, height - 60, 20), 10));
        _enemies[parseInt(random(0, _enemies.length))].speed = parseInt(random(10, 50));

        console.log('speed:', _enemies[indexEnemy].speed);
        
        super(_imgScene, 5);
    }

    draw() {
        this.loop();
        _hero.loop();
        _enemies[indexEnemy].loop();

        if (_hero.collided(_enemies[indexEnemy]) && _hero.damage() <= 0) {
            //_score.loop();
            noLoop();
            image(_imgGameOver, width / 2 - (_imgGameOver.width / 2), height / 2 - (_imgGameOver.height / 2))
        } else if (_hero.collided(_enemies[indexEnemy])){
            _multiple = _multiple <= 1 ? 1 : _multiple--;
        }

        if (_enemies[indexEnemy].isOutScreen) {
            //indexEnemy = indexEnemy < _enemies.length-1 ? indexEnemy+1 : 0;
            indexEnemy = parseInt(random(0, _enemies.length));
            _enemies[indexEnemy].speed =  parseInt(random(10, 50));;

            console.log('speed:', _enemies[indexEnemy].speed);

            _score.points += (_extrtaPoints*_multiple);
            _multiple = _multiple < 5 ? _multiple++ : 5;
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
        return new Florest2();
    }
}