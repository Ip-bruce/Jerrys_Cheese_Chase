class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload()
  {
   // this.load.image("play","assets/")
    this.load.image("menu","assets/menu.png");
    this.load.image("play","assets/PLAY.png");
    this.load.image("config","assets/CONFIG.png");
    this.load.image("credit","assets/CREDIT.png");

  }
  
  create() 
  {
    this.add.image(400,300,"menu");

   let playbtn = this.add.image(400,500,"play");
   playbtn.setInteractive();
   playbtn.on("pointerdown",() =>  this.scene.start("fase1"));

   let configbtn = this.add.image(150,500,"config");
   configbtn.setInteractive();
   configbtn.on("pointerdown",() =>  this.scene.start("Tutorial"));

   let creditbtn = this.add.image(650,500,"credit");
   creditbtn.setInteractive();
   creditbtn.on("pointerdown",() =>  this.scene.start("Credit"));

   //this.scene.start("playGame");
   cursors = this.input.keyboard.createCursorKeys();
 }
 
  
}
