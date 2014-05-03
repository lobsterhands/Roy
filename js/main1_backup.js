// Using Phaser 2.0.3 framework
// 26 April 2014, got some color order logic worked out
// See solved1 & solved2

var GameState = function(game) {
};

// Load images and sound
GameState.prototype.preload = function() {
    this.game.load.image('ground', 'assets/dirt_update.png');
    // this.game.load.image('player', 'assets/3.png');
    this.game.load.image('block', 'assets/block.png');
    this.game.load.image('block5', 'assets/block5.png');
    this.game.load.image('flag', 'assets/flag.png');
    this.game.load.image('player', 'assets/3.png');
    this.game.load.image('block_fall', 'assets/block_fall.png');
    var block1;
    var block3;
    var block6;
    var label_score;
    // var score
    var solved;
};
// Set up the example
GameState.prototype.create = function() {
    this.game.stage.backgroundColor = '#ffaaaa';

    solved1 = false;
    solved2 = false;

    // score = 0;
    // var style = {font: "30px Arial", fill: "#fff" };
    // label_score = this.game.add.text(20, 380, "0", style);

  // Define movement constants
    this.MAX_SPEED = 250; // pixels/second
    this.ACCELERATION = 600;
    this.DRAG = 600;
    this.GRAVITY = 670;
    this.JUMP_SPEED = -350; // pixels/second (negative y is up)
    game.time.deltaCap = 0.02;

  // Create a player sprite
    this.player = this.game.add.sprite(this.game.width/2, this.game.height - 192, 'player');
  // Enable physics on player
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.allowGravity = true; 
    this.player.body.mass = .5;
  // Make player collide with world boundaries
    this.player.body.collideWorldBounds = true;
    this.player.scale.set(1.);

    // Set player maximum movement speed
    this.player.body.maxVelocity.setTo(this.MAX_SPEED, this.MAX_SPEED * 10); // x, y

    // Add drag to the player that slows them down when they are not accelerating
    this.player.body.drag.setTo(this.DRAG, 0); // x, y


    // Since we're jumping we need gravity
    game.physics.arcade.gravity.y = this.GRAVITY;

    this.flag = game.add.group();
    this.flag.createMultiple(1, 'flag');
      for (var i = 0; i < 1; i++) {
        // var flag1 = this.game.add.sprite(0, 86, 'flag');
        var flag1 = this.game.add.sprite(400, 250, 'flag');
        this.game.physics.enable(flag1, Phaser.Physics.ARCADE);
        flag1.body.allowGravity = false;
        flag1.body.immovable = true;
        this.flag.add(flag1);
      }

    // Bring in some blocks
    this.block = game.add.group();
    for (var i = 0; i < 1; i++) {
      block1 = this.game.add.sprite(320, 336, 'block');
      block2 = this.game.add.sprite(220, 268, 'block');
      block3 = this.game.add.sprite(120, 188, 'block_fall');
      block4 = this.game.add.sprite(0, 118, 'block');
      this.game.physics.enable(block1, Phaser.Physics.ARCADE);
      this.game.physics.enable(block2, Phaser.Physics.ARCADE);
      this.game.physics.enable(block3, Phaser.Physics.ARCADE);
      this.game.physics.enable(block4, Phaser.Physics.ARCADE);
      block1.body.immovable = true;
      block2.body.immovable = true;
      block3.body.immovable = false; // defaults to false
      block4.body.immovable = true;
      block1.body.allowGravity = false;
      block2.body.allowGravity = false;
      block3.body.allowGravity = false;
      block4.body.allowGravity = false;
      block3.body.collideWorldBounds = true;
      block3.body.mass = .55;
      block3.body.velocity.x = false;
      // block3.body.velocity = new Phaser.Point(20);
      // block3.body.bounce = new Phaser.Point(1);
      this.block.add(block1);
      this.block.add(block2);
      this.block.add(block3);
      this.block.add(block4);
      block5 = this.game.add.sprite(470, 336, 'block5');
      this.game.physics.enable(block5, Phaser.Physics.ARCADE);
      block5.body.allowGravity = false;
      block5.body.immovable = true;
      // block5.body.checkCollision.left = false;
      // block6 = this.game.add.sprite(120, 180, 'block5');
      // this.game.physics.enable(block5, Phaser.Physics.ARCADE);
    }

  // Capture keys to prevent their default actions in browser
   this.game.input.keyboard.addKeyCapture([
        Phaser.Keyboard.LEFT,
        Phaser.Keyboard.RIGHT,
        Phaser.Keyboard.UP,
        Phaser.Keyboard.DOWN
    ]);

  // Create some ground for the player to walk on
  this.ground = this.game.add.group();
    for(var x = 0; x < this.game.width; x += 32) {
        // Add the ground blocks, enable physics on each, make them immovable
        var groundBlock = this.game.add.sprite(x, this.game.height - 64, 'ground');
        this.game.physics.enable(groundBlock, Phaser.Physics.ARCADE);
        groundBlock.body.immovable = true;
        groundBlock.body.allowGravity = false;
        this.ground.add(groundBlock);
    }

  // Show FPS
  this.game.time.advancedTiming = true;
  this.fpsText = this.game.add.text(
  20, 20, '', { font: '16px Arial', fill: '#ffffff' }
    );

};

// The update() method is called every frame
GameState.prototype.update = function() {
  var flagTouch = this.game.physics.arcade.overlap(this.player, this.flag, flagTouch, null, this);
  this.game.physics.arcade.collide(this.player, this.ground, touchGround, null, this);
  this.game.physics.arcade.collide(this.player, block5, touchBlock5, null, this);
  this.game.physics.arcade.collide(this.player, block1, block1Touch, null, this);
  this.game.physics.arcade.collide(this.player, block3, block3Touch, null, this);
  // Add FPS
  if (this.game.time.fps !== 0) {
    this.fpsText.setText(this.game.time.fps + ' FPS');
  }

  // Collide the player with the ground
  this.game.physics.arcade.collide(this.player, this.ground);
  this.game.physics.arcade.collide(this.block, this.ground)

  if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    this.player.body.acceleration.x = -this.ACCELERATION;

  } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    this.player.body.acceleration.x = this.ACCELERATION;
  } else {
      this.player.body.acceleration.x = 0;
  }

  this.game.physics.arcade.collide(this.block, this.block);
  this.game.physics.arcade.collide(this.player, this.block);
  this.game.physics.arcade.collide(this.block, this.ground);
  this.game.physics.arcade.collide(this.player, this.block6);
  // this.game.physics.arcade.collide(this.player, block5);
  // this.game.physics.arcade.collide(this.player, this.flag);

   // Set a variable that is true when the player is touching the ground
    var onTheGround = this.player.body.touching.down;
    if (onTheGround && this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        // Jump when the player is touching the ground and the up arrow is pressed
        this.player.body.velocity.y = this.JUMP_SPEED;
    } 

    // var victoryText = game.add.text("You solved the puzzle.");

    function flagTouch (obj1, obj2) {
      while (flagTouch) {
        if (this.solved1 && this.solved2) {
        game.stage.backgroundColor = '#ddd';
        victoryText = game.add.text(424, 125, "You solved the puzzle!", {
          font: "30px Arial",
          fill: "#eeee00",
          align: "center"
        });
      victoryText.anchor.setTo(0.5, 0.5);
    }
      break;
    }
  }
    //   } else {
    //     while (!this.solved) {
    //       if (this.textShown) {
    //      victoryText.add.content = "11111111111111111111111111"
    //    }
    //      failText = game.add.text(424, 125, "You have not solved the puzzle yet.", {
    //       font: "30px Arial",
    //       fill: "#eeee00",
    //       align: "center"
    //     });
    //   failText.anchor.setTo(0.5, 0.5);
    //   break;
    //   }
    // }
    // }

    function touchBlock5 (obj1, obj2) {
      game.stage.backgroundColor = '#b1aa37';
      this.solved1 = true;
    }

    function block1Touch (obj, obj2) {
      game.stage.backgroundColor = '#11aa37';
      if (this.solved1) {
        this.solved2  = true;
      }
    }

    function block3Touch (obj, obj2) {
      game.stage.backgroundColor = '#b92234';
    }

    function touchGround (obj, obj2) {
      game.stage.backgroundColor = '#113355'
    }
};

var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true)
