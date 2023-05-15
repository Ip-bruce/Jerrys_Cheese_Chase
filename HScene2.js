class HScene2 extends Phaser.Scene{
    constructor()
    {
        super("HistoryScene2");
    }

    preload()
    {
        this.load.image("next","assets/play.png");
    }

    create()
    {
        let nextbtn = this.add.image(850,350,"next");
        nextbtn.setInteractive();
        nextbtn.on("pointerdown",() => this.scene.start("level1"));

    }

}