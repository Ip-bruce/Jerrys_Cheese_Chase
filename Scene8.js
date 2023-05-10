class Scene8 extends Phaser.Scene{
    constructor()
    {
        super("2");
    }

    preload()
    {
        this.load.image("2","assets/2.png");
        this.load.image("proximo","assets/proximo.jpeg");
    }  
    create()
    {

        this.add.image(400,300,"2");
        let proximo = this.add.image(400,585,"proximo");
        proximo.setInteractive();
        proximo.on("pointerdown",() =>  this.scene.start("3"));

    }

}