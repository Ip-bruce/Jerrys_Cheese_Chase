class Win extends Phaser.Scene{
    constructor()
    {
        super("WinScene");
    }

    preload()
    {
        this.load.image("conseguiubkg","Conseguiu.png");
    }

    create()
    {
        this.add.image(930,360,"conseguiubkg");

    }
}