    class Credit extends Phaser.Scene
    {
        constructor()
        {
            super("creditScene");
        }

        preload()
        {
            this.load.image("credit","assets/credit.png");
        }

        create()
        {
            this.add.image(400,400,"credit");
        }
    }