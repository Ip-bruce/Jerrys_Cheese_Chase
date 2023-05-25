class Win extends Phaser.Scene{
    constructor()
    {
        super("WinScene");
    }

    preload()
    {
        this.load.image("fundo","assets/Conseguiu.png");
        this.load.image("backbtn","assets/Voltar.png");

    }

    create()
    {
        this.add.image(930,360,"fundo");

        let backbtn = this.add.image(1500,600,"backbtn");
        backbtn.setInteractive();
        backbtn.on("pointerdown",() =>  this.scene.start("MainMenu")); 
    }
}