function preload() {
    soundFormats('mp3', 'ogg');
    _imgScene       = loadImage('../../img/cenario/telaInicial.png');
    _imgHero        = loadImage('../img/personagem/correndo.png');
    _imgEnemy1      = loadImage('../img/inimigos/gotinha.png');
    _imgEnemy2      = loadImage('../img/inimigos/troll.png');
    _imgEnemy3      = loadImage('../img/inimigos/gotinha-voadora.png');
    _imgGameOver    = loadImage('../img/assets/game-over.png');
    _jumpSound      = loadSound('../midia/somPulo.mp3');
    _textFont       = loadFont('../../img/assets/fonteTelaInicial.otf');
    _gameSound      = loadSound('../midia/trilha_jogo.mp3');
    _gameSound.setVolume(0.3);

    setFrameRate(35);
}