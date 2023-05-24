class Tutorial extends Phaser.Scene {
   constructor() 
   {
       super("tutorial");
   }

   preload() 
   {
      this.load.image("bkg","assets/TutorialBG.png");
      this.load.image("backbtn","assets/Voltar.png");
   }

   create() 
   {
      this.add.image(930,360,"bkg");
      let backbtn = this.add.image(1500,600,"backbtn");
      backbtn.setInteractive();
      backbtn.on("pointerdown",() =>  this.scene.start("MainMenu"));
   }


}