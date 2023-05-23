class Win extends Phaser.Scene{
    constructor()
    {
        super("WinScene");
    }

    preload()
    {
        this.load.image("b","PlaceHolder.png");
    }

    create()
    {
        this.add.image(400,400,"b");

        let style = {font: "20px Arial", fill: "#fff"};


        this.wintext = this.add.text(500,50,"YouWin",style) 
    }
}