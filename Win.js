class Win extends Phaser.Scene{
    constructor()
    {
        super("WinScene");
    }

    preload()
    {
        this.preload.image("fundo","assets/Conseguiu.png");
    }

    create()
    {
        this.add.image(930,360,"fundo");
    }
}