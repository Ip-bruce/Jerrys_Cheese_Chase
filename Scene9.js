class Scene9 extends Phaser.Scene{
    constructor()
    {
        super("3");
    }

    preload()
    {
        this.load.image("3","assets/3.png");
        this.load.image("proximo","assets/proximo.jpeg");
    }  
    create()
    {

        this.add.image(400,300,"3");
        let proximo = this.add.image(645,585,"proximo");
        proximo.setInteractive();
        proximo.on("pointerdown",() =>  this.scene.start("playGame"));

    }


}