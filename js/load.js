var load_state = {  
    preload: function() { 
      this.game.load.image('flag', 'assets/flag.png');
      this.game.load.image('player', 'assets/player.png');
      this.game.load.image('ground', 'assets/ground.png');
      this.game.load.image('rainbow', 'assets/rainbow.png');
      this.game.load.image('blockRed', 'assets/blockRed.png');
      this.game.load.image('blockBlue', 'assets/blockBlue.png');
      this.game.load.image('blockSafe', 'assets/blockSafe.png');
      this.game.load.image('blockGreen', 'assets/blockGreen.png');
      this.game.load.image('blockOrange', 'assets/blockOrange.png');
      this.game.load.image('blockYellow', 'assets/blockYellow.png');
      this.game.load.image('rainbowFall', 'assets/rainbowFall.png');  
      game.load.image('main-bg', 'assets/main-bg.png');
      game.load.image('newGame', 'assets/newGame.png');
      game.load.image('move', 'assets/move.png');
      game.load.image('jump', 'assets/jump.png');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};
