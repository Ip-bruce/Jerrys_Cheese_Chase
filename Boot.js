
class Boot extends Phaser.Scene {
    constructor () {
        super("preloding");
    }

    preload()
    {
        this.load.image("b","assets/PlaceHolder.png");
    }

    create()
    {
        this.add.image(400,300,"b");
    }

    update()
    {
        //this.input.on("pointerdown", () => this.scene.start("fase1"));
        //this.scene.start("fase1");
    }
}
