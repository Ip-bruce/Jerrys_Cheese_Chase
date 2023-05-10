class Scene4 extends Phaser.Scene{
    constructor()
    {
        super("Tutorial");
    }

    preload()
    {

        this.load.image("tutorial","assets/tutorial.png");
        this.load.image("returnbtn","assets/returnbtn.png");

    }

    create()
    {
        let returnbtn = this.add.image(0,0,"returnbtn");
        returnbtn.setInteractive();
        returnbtn.on("pointerdown",() =>  this.scene.start("bootGame"));
        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(400,300,"tutorial");
        this.add.text(90,30,"Clique no botão para voltar ao Menu Inicial");

    }
    
    update()
    {
        if(cursors.left.isDown)
        {
            this.scene.start("bootGame");
        }
    }


}