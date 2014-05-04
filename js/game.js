// Initialize Phaser
var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');

// Our 'score' global variable
var score = 0;

// Define all the states
game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('level_1', level_1);
game.state.add('level_2', level_2);
game.state.add('level_3', level_3);

// Start with the 'load' state
game.state.start('load');  
