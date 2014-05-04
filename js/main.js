var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('main-bg', 'assets/main-bg.png');
  game.load.image('newGame', 'assets/newGame.png');
  game.load.image('move', 'assets/move.png');
  game.load.image('jump', 'assets/jump.png');

};

function create() {
  game.add.sprite(0, 0, 'main-bg');
  move = game.add.sprite(game.width/1.35, game.height/1.2, 'move');
  jump = game.add.sprite(game.width/1.35, game.height/1.1, 'jump');
  move.anchor.setTo(0.5, 0.5);
  jump.anchor.setTo(0.5, 0.5);














  newGame = game.add.sprite(game.width/1.35, game.height/2, 'newGame')
  newGame.anchor.setTo(0.5, 0.5);
  newGame.inputEnabled = true;
  newGame.events.onInputDown.add(select_newGame, null, this);


};

function update() {
  


};

  function select_newGame (sprite, pointer) {
      sprite.kill();
  }
