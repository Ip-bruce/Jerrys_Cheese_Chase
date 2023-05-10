class Scene7 extends Phaser.Scene{
    constructor()
    {
        super("introduction");
    

    }
    preload()
    {
        this.load.image("1","assets/1.png");
        this.load.image("proximo","assets/proximo.jpeg");
    }  
    create()
    {

        this.add.image(400,300,"1");
        let proximo = this.add.image(400,570,"proximo");
        proximo.setInteractive();
        proximo.on("pointerdown",() =>  this.scene.start("2"));

    }

}

