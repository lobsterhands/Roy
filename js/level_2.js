var level_2 = {

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
    // Create player
    this.player = this.game.add.sprite((this.game.width/2) - 24, this.game.height - 113, 'player');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.allowGravity = true; 
    this.player.body.mass = .5;
    this.player.body.collideWorldBounds = true;
    this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10);
    this.player.body.drag.setTo(this.DRAG, 0);
    this.player.scale.setTo(1.3, 1.3);

    // Show FPS
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(
    20, 20, '', { font: '16px Arial', fill: '#ffffff' }
      );

    // ***********************
    // LEVEL TWO
    // ***********************
    this.flag = game.add.group();
    this.flag.createMultiple(1, 'flag');
    for (var i = 0; i < 1; i++) {
      // var flag = this.game.add.sprite(0, 86, 'flag');
      var flag = this.game.add.sprite(420, 240, 'flag');
      this.game.physics.enable(flag, Phaser.Physics.ARCADE);
      flag.body.allowGravity = false;
      flag.body.immovable = true;
      this.flag.add(flag);
    }

    this.rainbow = game.add.group();
    for (var i = 0; i < 1; i++) {
      rainbow = this.game.add.sprite(400, 270,'rainbow');
      this.game.physics.enable(rainbow, Phaser.Physics.ARCADE);
      rainbow.body.allowGravity = false;
      rainbow.body.immovable = true;
      this.rainbow.add(rainbow);
    }

    this.blockRed = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRed = this.game.add.sprite(220, 336, 'blockRed');
      this.game.physics.enable(blockRed, Phaser.Physics.ARCADE);
      blockRed.body.immovable = true;
      blockRed.body.allowGravity = false;
      blockRed.body.checkCollision.left = false;
      blockRed.body.checkCollision.right = false;
      this.blockRed.add(blockRed);
    }
    this.blockRedFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRedFill = this.game.add.sprite(220, 336, 'blockRed');
      this.game.physics.enable(blockRedFill, Phaser.Physics.ARCADE);
      blockRedFill.body.immovable = true;
      blockRedFill.body.allowGravity = false;
      blockRedFill.body.checkCollision.up = false;
      this.blockRedFill.add(blockRedFill);
    }

    this.blockOrange = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockOrange = this.game.add.sprite(595, 336, 'blockOrange');
      this.game.physics.enable(blockOrange, Phaser.Physics.ARCADE);
      blockOrange.body.immovable = true;
      blockOrange.body.allowGravity = false;
      blockOrange.body.checkCollision.left = false;
      blockOrange.body.checkCollision.right = false;
      this.blockOrange.add(blockOrange);
    }
    this.blockOrangeFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockOrangeFill = this.game.add.sprite(595, 336, 'blockOrange');
      this.game.physics.enable(blockOrangeFill, Phaser.Physics.ARCADE);
      blockOrangeFill.body.immovable = true;
      blockOrangeFill.body.allowGravity = false;
      blockOrangeFill.body.checkCollision.up = false;
      this.blockOrangeFill.add(blockOrangeFill);
    }
  }, /* END OF CREATE() */

  update: function() {  
// Add FPS
  if (this.game.time.fps !== 0) 
    { this.fpsText.setText(this.game.time.fps + ' FPS'); }
  // this.game.physics.arcade.collide(this.player, this.blockWhite, onWhite, null, this);
  this.game.physics.arcade.collide(this.player, this.blockRedFill);
  this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
  this.game.physics.arcade.collide(this.player, this.blockYellowFill);
  this.game.physics.arcade.collide(this.player, this.blockGreenFill);
  this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
  this.game.physics.arcade.collide(this.player, this.rainbow);
  this.game.physics.arcade.collide(this.player, this.ground, onGround, null, this);
  // this.game.physics.arcade.collide(this.player, this.blockStart, onStart, null, this);
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
        this.player.body.velocity.y = this.JUMP_SPEED;
  } 

  function onFlag (obj1, obj2) {
    if (this.solvedRed && this.solvedOrange) {
      game.stage.backgroundColor = '#333';
      victoryText = game.add.text(this.game.width/2, this.game.height/3, "You solved the puzzle!", {
        font: "30px Arial",
        fill: "#fff",
        align: "center"    
      });
      nextLevel = game.add.text(this.game.width/2, this.game.height/1.3, "Click to proceed to Level 3", {
        font: "30px Arial",
        fill: "#fff",
        align: "center"    
      });
      victoryText.anchor.setTo(0.5, 0.5);
      nextLevel.inputEnabled = true;
      nextLevel.events.onInputDown.add(level3, null, this);
      this.flag.destroy();
      this.flagDestroy = true;
    }
  }


  // function onWhite (obj1, obj2) {

  // }

  function onGround (obj, obj2) {
    game.stage.backgroundColor = '#000000'
    this.solvedRed = false;
    this.solvedOrange = false;
  }

  function onRed (obj1, obj2) {
    game.stage.backgroundColor = '#c90000';
    this.solvedRed = true;
  }
  
  function onOrange (obj1, obj2) {
    game.stage.backgroundColor = '#d76c00';
    if (this.solvedRed) { 
      this.solvedOrange = true; 
    }
  }

  function onYellow (obj1, obj2) {
    game.stage.backgroundColor = '#ffff00';
    this.solvedRed = true;
  }

  function onGreen (obj1, obj2) {
    game.stage.backgroundColor = '#00ff00';
    this.solvedRed = true;
  }

  function onBlue (obj1, obj2) {
    game.stage.backgroundColor = '#0000ff';
    this.solvedRed = true;
  }

  function level3 () {
    this.game.state.start('level_3');
  }


  }, /* END OF UPDATE() */
};
