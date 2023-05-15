class HScene1 extends Phaser.Scene{
    constructor()
    {
        super("HistoryScene1");
    }

    preload()
    {
        this.load.image("next","assets/play.png");
    }

    create()
    {
        let nextbtn = this.add.image(850,500,"next");
        nextbtn.setInteractive();
        nextbtn.on("pointerdown",() => this.scene.start("HistoryScene2"));

    }

}