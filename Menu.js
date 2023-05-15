class Menu extends Phaser.Scene {
    constructor() {
      super("MainMenu");
    }
  
    preload()
    {
      this.load.image("menu","assets/menu.png");
      this.load.image("play","assets/play.png");
      this.load.image("creditbutton","assets/credit.png");
      this.load.image("tutorial","assets/tutorial.png");
    }
    
    create() 
    {
      this.add.image(400,300,"menu");
  
      let playbtn = this.add.image(400,500,"play");
      playbtn.setInteractive();
      playbtn.on("pointerdown",() =>  this.scene.start("HistoryScene1")); 
    
      let tutorialbtn = this.add.image(150,500,"tutorial");
      tutorialbtn.setInteractive();
      tutorialbtn.on("pointerdown",() =>  this.scene.start("tutorial"));
    
      let creditbtn = this.add.image(650,500,"creditbutton");
      creditbtn.setInteractive();
      creditbtn.on("pointerdown",() =>  this.scene.start("creditScene"));      
    }
   
    
  }
  