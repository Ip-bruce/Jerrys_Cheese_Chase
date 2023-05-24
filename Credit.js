    class Credit extends Phaser.Scene
    {
        constructor()
        {
            super("creditScene");
        }

        preload()
        {
            this.load.image("bkg","assets/Créditos.png");
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