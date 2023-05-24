class Tutorial extends Phaser.Scene {
   constructor() {
       super("tutorial");
   }

   preload() 
   {
      this.load.image("back","assets/Voltar.png");
   }

   create() 
   {
      let style = {font: "20px Arial", fill: "#fff"};

      let text = this.add.text(800,150,"AAAAAAAAAAAAAAAAAAAAAAAAAAAA",style);

      let backbtn = this.add.image(800,350,"back");
      backbtn.SetInteractive();
      backbtn.on("pointerdown",() => this.scene.start("MainMenu"));


   }


}