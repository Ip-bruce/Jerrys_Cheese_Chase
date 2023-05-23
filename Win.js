class Win extends Phaser.Scene{
    constructor()
    {
        super("WinScene");
    }

    preload()
    {
        this.load.image("b","PlaceHolder.png");
    }

    create()
    {
        this.add.image(400,400,"b");
    }
}