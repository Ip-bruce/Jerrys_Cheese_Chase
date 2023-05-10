class Scene3 extends Phaser.Scene{
    constructor()
    {
        super("Loading");
    }


    preload()
    {
        this.load.image("loading","assets/Loading_Img.png");
    }
    create()
    {
        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(400,300,"loading");
        this.add.text(20,20,"Loading....   ( O Jogo está em outra cena que será implementada futuramente )");
    }



}


