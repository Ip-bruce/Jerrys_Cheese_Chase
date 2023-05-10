class Scene10 extends Phaser.Scene{

    constructor()
    {
        super("fim");
    }


    preload()
    {
        this.load.image("fim","assets/fim.jpg");
        this.load.image("voltar","assets/returnbtn.png");
    }

    create()
    {
        this.add.image(370,300,"fim");
        
        let returnbtn = this.add.image(400,500,"voltar");
        returnbtn.setInteractive();
        returnbtn.on("pointerdown",() =>  this.scene.start("bootGame"));
        
    }


}