class Menu extends Phaser.Scene {
    constructor() {
      super("MainMenu");
    }
  
    preload()
    {
      this.load.image("menu","assets/menu.png");
      this.load.image("play","assets/PLAY.png");
      this.load.image("config","assets/CONFIG.png");
      this.load.image("tutorial","assets/tutorial.png");
    }
    
    create() 
    {
      this.add.image(400,300,"menu");
  
      let playbtn = this.add.image(400,500,"play");
      playbtn.setInteractive();
      playbtn.on("pointerdown",() =>  this.scene.start("fase1")); //TODO: Change the scene name with the "Cutscene" Scene
    
      let configbtn = this.add.image(150,500,"config");
      configbtn.setInteractive();
      configbtn.on("pointerdown",() =>  this.scene.start("Tutorial"));
    
      let creditbtn = this.add.image(650,500,"tutorial");
      creditbtn.setInteractive();
      creditbtn.on("pointerdown",() =>  this.scene.start("tutorial"));      
    }
   
    
  }
  