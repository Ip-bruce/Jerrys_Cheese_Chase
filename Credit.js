    class Credit extends Phaser.Scene
    {
        constructor()
        {
            super("creditScene");
        }

        preload()
        {
            this.load.image("bkgCredit","assets/CréditoBG.png");
            this.load.image("backbtn","assets/Voltar.png");

        }

        create()
        {
            this.add.image(930,360,"bkgCredit");
            let backbtn = this.add.image(1500,600,"backbtn");
            backbtn.setInteractive();
            backbtn.on("pointerdown",() =>  this.scene.start("MainMenu")); 

        }
    }