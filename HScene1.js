class HScene1 extends Phaser.Scene{
    constructor()
    {
        super("HistoryScene1");
    }

    preload()
    {
        this.load.image("HistoryBackground","assets/História.png");
        this.load.image("next","assets/play.png");
    }

    create()
    {
        this.add.image(930,360,"HistoryBackground");

        let nextbtn = this.add.image(850,500,"next");
        nextbtn.setInteractive();
        nextbtn.on("pointerdown",() => this.scene.start("level1"));

    }

}