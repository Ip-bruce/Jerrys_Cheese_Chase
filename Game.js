var config = {
  type: Phaser.AUTO,
 width: 1860,
 height: 720,
 backgroundColor: '#3498db',
 physics: {
     default: 'arcade',
     arcade: {
         debug: false
     }
 },
scene: [Menu,Tutorial,Credit,MainScene],
};
var game = new Phaser.Game(config);