var menu_state = {

  create: function() {
    game.add.sprite(0, 0, 'main-bg');
    move = game.add.sprite(game.width/1.35, game.height/1.2, 'move');
    jump = game.add.sprite(game.width/1.35, game.height/1.1, 'jump');
    move.anchor.setTo(0.5, 0.5);
    jump.anchor.setTo(0.5, 0.5);

    newGame = game.add.sprite(game.width/1.35, game.height/2, 'newGame')
    newGame.anchor.setTo(0.5, 0.5);
    newGame.inputEnabled = true;
    newGame.events.onInputDown.add(this.start, this);
},
    // Start the actual game
    start: function() {
        this.game.state.start('level_1');
    }
};
