class Menu extends Phaser.Scene {
    constructor() {
      super("MainMenu");
    }
  
    preload()
    {
      this.load.image("menu","assets/Menu.png");
      this.load.image("play","assets/play.png");
      this.load.image("creditbutton","assets/Créditos.png");
      this.load.image("tutorial","assets/tutorial.png");
    }
    
    create() 
    {
      this.add.image(930,360,"menu");
  
      let playbtn = this.add.image(1300,380,"play");
      playbtn.setInteractive();
      playbtn.on("pointerdown",() =>  this.scene.start("HistoryScene1")); 
    
      let tutorialbtn = this.add.image(1300,480,"tutorial");
      tutorialbtn.setInteractive();
      tutorialbtn.on("pointerdown",() =>  this.scene.start("tutorial"));
    
      let creditbtn = this.add.image(1300,580,"creditbutton");
      creditbtn.setInteractive();
      creditbtn.on("pointerdown",() =>  this.scene.start("creditScene"));      
    }
   
    
  }
  