class HScene1 extends Phaser.Scene{
    constructor()
    {
        super("HistoryScene1");
    }

    preload()
    {
        this.load.image("ratoeira","assets/ratoeira.png");
    }

    create()
    {
        this.add.image("ratoeira");
    }
}