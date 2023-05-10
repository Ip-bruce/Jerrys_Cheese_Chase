class Scene5 extends Phaser.Scene{
    constructor()
    {
        super("Credit");
    }

    preload()
    {
        this.load.image("credit1","assets/credito.png")
        this.load.image("returnbtn","assets/returnbtn.png");

    }

    create()
    {
        let returnbtn = this.add.image(0,0,"returnbtn");
        returnbtn.setInteractive();
        returnbtn.on("pointerdown",() =>  this.scene.start("bootGame"));
        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(400,300,"credit1");
    }

    update()
    {
        if(cursors.left.isDown)
        {
            this.scene.start("bootGame");
        }
    }

}