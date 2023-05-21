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
scene: [Menu,Tutorial,Credit,HScene1,HScene2,Fase1,Fase2,Fase3],
};
var game = new Phaser.Game(config);