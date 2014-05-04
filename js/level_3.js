var level_3 = {

    // No more preload, since it is already done in the 'load' state

  create: function() { 

    // ***********************
    // BASIC GAME SETTINGS
    // ***********************
      // Capture keys to prevent their default actions in browser
    this.game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR
    ]);
    // Movement constants
    this.MAX_SPEED = 250;
    this.ACCELERATION = 350;
    this.DRAG = 750;
    this.GRAVITY = 670;
    this.JUMP_SPEED = -350;
    game.time.deltaCap = 0.02;    
    game.physics.arcade.gravity.y = this.GRAVITY;
    // Create some ground for the player to walk on
    this.ground = this.game.add.group();
    for(var x = 0; x < this.game.width; x += 32) {
      var groundBlock = this.game.add.sprite(x, this.game.height - 64, 'ground');
      this.game.physics.enable(groundBlock, Phaser.Physics.ARCADE);
      groundBlock.body.immovable = true;
      groundBlock.body.allowGravity = false;
      this.ground.add(groundBlock);
    }
    
    this.flag = game.add.group();
    this.flag.createMultiple(1, 'flag');
    for (var i = 0; i < 1; i++) {
      // var flag = this.game.add.sprite(0, 86, 'flag');
      var flag = this.game.add.sprite(game.width-28, 88, 'flag');
      this.game.physics.enable(flag, Phaser.Physics.ARCADE);
      flag.body.allowGravity = false;
      flag.body.immovable = true;
      this.flag.add(flag);
    }

      this.move1 = game.add.group();
      move1 = this.game.add.sprite(300, 260,'rainbow');
      this.game.physics.enable(move1, Phaser.Physics.ARCADE);
      move1.body.allowGravity = false;
      move1.body.immovable = true;
      move1.body.collideWorldBounds = true;
      this.move1.add(move1);
      tween = this.game.add.tween(move1).to({x:600}, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      this.move2 = game.add.group();
      move2 = this.game.add.sprite(600, 120,'rainbow');
      this.game.physics.enable(move2, Phaser.Physics.ARCADE);
      move2.body.allowGravity = false;
      move2.body.immovable = true;
      move2.body.collideWorldBounds = true;
      this.move2.add(move2);
      tween = this.game.add.tween(move2).to({x:300}, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);


    this.rainbow = game.add.group();
    for (var i = 0; i < 1; i++) {
      rainbow1 = this.game.add.sprite(130, 200,'rainbow');
      this.game.physics.enable(rainbow1, Phaser.Physics.ARCADE);
      rainbow1.body.allowGravity = false;
      rainbow1.body.immovable = true;
      rainbow1.body.collideWorldBounds = true;
      this.rainbow.add(rainbow1);

      rainbowFall3 = this.game.add.sprite(game.width, 120,'rainbow');
      this.game.physics.enable(rainbowFall3, Phaser.Physics.ARCADE);
      rainbowFall3.body.allowGravity = false;
      rainbowFall3.body.immovable = true;
      rainbowFall3.body.collideWorldBounds = true;
      this.rainbow.add(rainbowFall3);
    }

    this.rainbowFall = game.add.group();
    for (var i = 0; i < 1; i++) {

    }

    this.blockRed = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRed = this.game.add.sprite(180, 336, 'blockRed');
      this.game.physics.enable(blockRed, Phaser.Physics.ARCADE);
      blockRed.body.immovable = true;
      blockRed.body.allowGravity = false;
      blockRed.body.checkCollision.left = false;
      blockRed.body.checkCollision.right = false;
      this.blockRed.add(blockRed);
    }
    this.blockRedFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRedFill = this.game.add.sprite(180, 336, 'blockRed');
      this.game.physics.enable(blockRedFill, Phaser.Physics.ARCADE);
      blockRedFill.body.immovable = true;
      blockRedFill.body.allowGravity = false;
      blockRedFill.body.checkCollision.up = false;
      this.blockRedFill.add(blockRedFill);
    }

  this.blockOrange = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockOrange = this.game.add.sprite(670, 336, 'blockOrange');
      this.game.physics.enable(blockOrange, Phaser.Physics.ARCADE);
      blockOrange.body.immovable = true;
      blockOrange.body.allowGravity = false;
      blockOrange.body.checkCollision.left = false;
      blockOrange.body.checkCollision.right = false;
      this.blockOrange.add(blockOrange);
    }
    this.blockOrangeFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockOrangeFill = this.game.add.sprite(670, 336, 'blockOrange');
      this.game.physics.enable(blockOrangeFill, Phaser.Physics.ARCADE);
      blockOrangeFill.body.immovable = true;
      blockOrangeFill.body.allowGravity = false;
      blockOrangeFill.body.checkCollision.up = false;
      this.blockOrangeFill.add(blockOrangeFill);
    }

    this.blockYellow = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockYellow = this.game.add.sprite(0, 120, 'blockYellow');
      this.game.physics.enable(blockYellow, Phaser.Physics.ARCADE);
      blockYellow.body.immovable = true;
      blockYellow.body.allowGravity = false;
      blockYellow.body.checkCollision.left = false;
      blockYellow.body.checkCollision.right = false;
      this.blockYellow.add(blockYellow);
    }
    this.blockYellowFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockYellowFill = this.game.add.sprite(0, 120, 'blockYellow');
      this.game.physics.enable(blockYellowFill, Phaser.Physics.ARCADE);
      blockYellowFill.body.immovable = true;
      blockYellowFill.body.allowGravity = false;
      blockYellowFill.body.checkCollision.up = false;
      this.blockYellowFill.add(blockYellowFill);
    }
  // Create player
    this.player = this.game.add.sprite((this.game.width/2) - 24, this.game.height - 146, 'player');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.allowGravity = true; 
    this.player.body.collideWorldBounds = true;
    this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10);
    this.player.body.drag.setTo(this.DRAG, 0);
    this.player.scale.setTo(1.4, 1.4);

    // Show FPS
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(
    20, 20, '', { font: '16px Arial', fill: '#ffffff' });
  },/* END OF CREATE() */

  update: function() {
  
    // Add FPS
    if (this.game.time.fps !== 0) 
      { this.fpsText.setText(this.game.time.fps + ' FPS'); }
    this.game.physics.arcade.collide(this.player, this.rainbow);
    this.game.physics.arcade.collide(this.player, this.blockRedFill);
    this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
    this.game.physics.arcade.collide(this.player, this.blockYellowFill);
    this.game.physics.arcade.collide(this.player, this.blockGreenFill);
    this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
    this.game.physics.arcade.collide(this.player, this.move1, onMove1, null, this);
    this.game.physics.arcade.collide(this.player, this.move2, onMove2, null, this);
    this.game.physics.arcade.collide(this.player, this.rainbowFall);
    this.game.physics.arcade.collide(this.ground, this.rainbowFall);
    this.game.physics.arcade.collide(this.player, this.ground, onGround, null, this);
    this.game.physics.arcade.collide(this.player, this.blockRed, onRed, null, this);
    this.game.physics.arcade.collide(this.player, this.blockOrange, onOrange, null, this);
    this.game.physics.arcade.collide(this.player, this.blockYellow, onYellow, null, this);
    this.game.physics.arcade.collide(this.player, this.blockGreen, onGreen, null, this);
    this.game.physics.arcade.collide(this.player, this.blockBlue, onBlue, null, this);
    this.game.physics.arcade.overlap(this.player, this.flag, onFlag, null, this);

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.player.body.acceleration.x = -this.ACCELERATION;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.player.body.acceleration.x = this.ACCELERATION;
    } else {
        this.player.body.acceleration.x = 0;
    }

    var onTheGround = this.player.body.touching.down;
    if (onTheGround) this.canDoubleJump = true;
    if ((onTheGround && this.input.keyboard.isDown(Phaser.Keyboard.UP)) || (onTheGround && this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))) {
        this.player.body.velocity.y = this.JUMP_SPEED;} 

    function onFlag (obj1, obj2) {
      if (this.solvedRed && this.solvedOrange && this.solvedYellow) {
      game.stage.backgroundColor = '#333';
      victoryText = game.add.text(this.game.width/2, this.game.height/3, "You solved the puzzle!", {
        font: "30px Arial",
        fill: "#fff",
        align: "center"    
      });
      nextLevel = game.add.text(this.game.width/2, this.game.height/1.3, "You have won the game!\nClick to return to the main menu.", {
        font: "30px Arial",
        fill: "#fff",
        align: "center"    
      });
      victoryText.anchor.setTo(0.5, 0.5);
      nextLevel.inputEnabled = true;
      nextLevel.events.onInputDown.add(mainMenu, null, this);
      this.flag.destroy();
      this.flagDestroy = true;
    }
  }

    function onMove1 (obj1, obj2) {
      if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.player.body.acceleration.x = -this.ACCELERATION;
      } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.player.body.acceleration.x = this.ACCELERATION;
      } else {
        this.player.body.x = move1.body.x+10;
      }
    }

      function onMove2 (obj1, obj2) {
      if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.player.body.acceleration.x = -this.ACCELERATION;
      } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.player.body.acceleration.x = this.ACCELERATION;
      } else {
        this.player.body.x = move2.body.x+10;
      }
    }

    function onGround (obj, obj2) {
      game.stage.backgroundColor = '#000000'
      this.solvedRed = false;
      this.solvedRed = false;
      this.solvedYellow = false;
    }

    function onRed (obj1, obj2) {
      game.stage.backgroundColor = '#c90000';
      this.solvedRed = true;
      if (this.solvedOrange) {
        this.solvedOrange = false;
      }
      if (this.solvedYellow) {
        this.solvedYellow = false;
      }
    }
    
    function onOrange (obj1, obj2) {
      game.stage.backgroundColor = '#d76c00';
      if (this.solvedRed) { 
        this.solvedOrange = true; 
      } 
      if (this.solvedYellow) {
        this.solvedRed = false;
        this.solvedYellow = false;
      }
    }

    function onYellow (obj1, obj2) {
      game.stage.backgroundColor = '#EAEA00';
      if (this.solvedRed && this.solvedOrange) {
        this.solvedYellow = true;
      } else {
        this.solvedRed = false;
        this.solvedOrange = false;
        this.solvedYellow = false;
      }
    }

    function onGreen (obj1, obj2) {
      game.stage.backgroundColor = '#00ff00';
      this.solvedRed = true;
    }

    function onBlue (obj1, obj2) {
      game.stage.backgroundColor = '#0000ff';
      this.solvedRed = true;
    }

    function mainMenu () {
      this.game.state.start('menu');
    }
  },/* END OF UPDATE() */
};
