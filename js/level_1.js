var level_1 = {

    // No more preload, since it is already done in the 'load' state

  create: function() { 
    // ***********************
    // BASIC GAME SETTINGS
    // ***********************
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
    game.physics.arcade.gravity.y = this.GRAVITY;

    this.ground = this.game.add.group();
    for(var x = 0; x < this.game.width; x += 32) {
      var groundBlock = this.game.add.sprite(x, this.game.height - 64, 'ground');
      this.game.physics.enable(groundBlock, Phaser.Physics.ARCADE);
      groundBlock.body.immovable = true;
      groundBlock.body.allowGravity = false;
      this.ground.add(groundBlock);
    }
    
    this.game.time.advancedTiming = true;
    this.fpsText = this.game.add.text(
    20, 20, '', { font: '16px Arial', fill: '#ffffff' });

    // ***********************
    // LEVEL ONE
    // ***********************
    this.flag = game.add.group();
    this.flag.createMultiple(1, 'flag');
    for (var i = 0; i < 1; i++) {
      var flag = this.game.add.sprite(12, 300, 'flag');
      this.game.physics.enable(flag, Phaser.Physics.ARCADE);
      flag.body.allowGravity = false;
      flag.body.immovable = true;
      this.flag.add(flag);
    }

    this.rainbow = game.add.group();
    for (var i = 0; i < 1; i++) {
      rainbow = this.game.add.sprite((0), this.game.height-114,'rainbow');
      this.game.physics.enable(rainbow, Phaser.Physics.ARCADE);
      rainbow.body.allowGravity = false;
      rainbow.body.immovable = true;
      this.rainbow.add(rainbow);
    }

    this.blockStart = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockStart = this.game.add.sprite(100, 336,'blockSafe');      
      this.game.physics.enable(blockStart, Phaser.Physics.ARCADE);
      blockStart.body.allowGravity = false;
      blockStart.body.immovable = true;
      this.blockStart.add(blockStart);
      tween = this.game.add.tween(blockStart).to({y:100}, 2500, Phaser.Easing.Linear.None, true, 0, 1000, true);
      blockStart2 = this.game.add.sprite(200, 200,'blockSafe');      
      this.game.physics.enable(blockStart2, Phaser.Physics.ARCADE);
      blockStart2.body.allowGravity = false;
      blockStart2.body.immovable = true;
      this.blockStart.add(blockStart2);
      tween = this.game.add.tween(blockStart2).to({y:336}, 1500, Phaser.Easing.Linear.None, true, 0, 1000, true);
    }

    this.blockRed = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRed = this.game.add.sprite((this.game.width/2)-128, 336, 'blockRed');
      this.game.physics.enable(blockRed, Phaser.Physics.ARCADE);
      blockRed.body.immovable = true;
      blockRed.body.allowGravity = false;
      blockRed.body.checkCollision.left = false;
      blockRed.body.checkCollision.right = false;
      this.blockRed.add(blockRed);
    }
    this.blockRedFill = game.add.group();
    for (var i = 0; i < 1; i++) {
      blockRedFill = this.game.add.sprite((this.game.width/2)-128, 336, 'blockRed');
      this.game.physics.enable(blockRedFill, Phaser.Physics.ARCADE);
      blockRedFill.body.immovable = true;
      blockRedFill.body.allowGravity = false;
      blockRedFill.body.checkCollision.up = false;
      this.blockRedFill.add(blockRedFill);
    }

    // Create player
    this.player = this.game.add.sprite((this.game.width/2) - 24, this.game.height - 146, 'player');
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.allowGravity = true; 
    this.player.body.collideWorldBounds = true;
    this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10);
    this.player.body.drag.setTo(this.DRAG, 0);
    this.player.scale.setTo(1.3, 1.3);
      },

    update: function() {
      if (this.game.time.fps !== 0) 
    { this.fpsText.setText(this.game.time.fps + ' FPS'); }
  
    this.game.physics.arcade.collide(this.player, this.blockStart, onGround, null, this);
    this.game.physics.arcade.collide(this.player, this.blockStart);
    this.game.physics.arcade.collide(this.player, this.blockRedFill);
    this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
    this.game.physics.arcade.collide(this.player, this.blockYellowFill);
    this.game.physics.arcade.collide(this.player, this.blockGreenFill);
    this.game.physics.arcade.collide(this.player, this.blockOrangeFill);
    this.game.physics.arcade.collide(this.player, this.rainbow);
    this.game.physics.arcade.collide(this.player, this.ground, onGround, null, this);
    this.game.physics.arcade.collide(this.player, this.blockRed, onRed, null, this);
    this.game.physics.arcade.overlap(this.player, this.flag, onFlag, null, this);

    if (leftInputIsActive()) {
      this.player.body.acceleration.x = -this.ACCELERATION;
    } else if (rightInputIsActive()) {
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
        if (this.solvedRed) {
          game.stage.backgroundColor = '#333';
          victoryText = game.add.text(this.game.width/2, this.game.height/3, "You solved the puzzle!", {
            font: "30px Arial",
            fill: "#fff",
            align: "center"    
          });
          nextLevel = game.add.text(this.game.width/2, this.game.height/1.3, "Click to proceed to Level 2", {
            font: "30px Arial",
            fill: "#fff",
            align: "center"    
          });
          victoryText.anchor.setTo(0.5, 0.5);
          nextLevel.inputEnabled = true;
          nextLevel.events.onInputDown.add(level2, null, this);
          this.flag.destroy();
          this.flagDestroy = true;
        }
    }

    function leftInputIsActive() {
      var isActive = false;

      isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
      isActive |= (this.game.input.activePointer.isDown &&
          this.game.input.activePointer.x < this.game.width/4);

      return isActive;
    }
    function rightInputIsActive() {
      var isActive = false;

      isActive = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
      isActive |= (this.game.input.activePointer.isDown &&
          this.game.input.activePointer.x > this.game.width/2 + this.game.width/4);

      return isActive;
    }

    function onRed (obj1, obj2) {
      game.stage.backgroundColor = '#c90000';
      this.solvedRed = true;
    }

    function onGround(obj1, obj2) {
      game.stage.backgroundColor = '#000000'
      this.solvedRed = false;
    }

    function level2() {
      this.game.state.start('level_2');
    }
  }
};
