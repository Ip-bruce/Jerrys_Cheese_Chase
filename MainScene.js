class MainScene extends Phaser.Scene {
    // The three methods currently empty
    constructor()
    {
        super("fase1");
    }
    preload() 
    {
        this.load.image("coin","assets/coin.png");
        this.load.image("player","assets/player.png");
        this.load.image("trap","assets/ratoeira.png");
    }

    create()
    {
        this.player = this.physics.add.sprite(100,100,"player");
        this.coin = this.physics.add.sprite(300,300,"coin");
        this.coin2 = this.physics.add.sprite(500,700,"coin");
        this.trap = this.physics.add.sprite(200,300,"trap");
        this.score = 0;

        let style = {font: "20px Arial", fill: "#fff"};


        this.scoreText = this.add.text(20,20,"score: " + this.score, style );

        this.arrow = this.input.keyboard.createCursorKeys();
    }

    update() 
    {
      // This method is called 60 times per second after create() 
      // It will handle all the game"s logic, like movements

      //Movement
      // Handle horizontal movements
        if (this.arrow.right.isDown) {
            // If the right arrow is pressed, move to the right
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            // If the left arrow is pressed, move to the left
            this.player.x -= 3;
        } 
        
        // Do the same for vertical movements
        if (this.arrow.down.isDown) {
            this.player.y += 3;
        } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        } 

        // If the player is overlapping with the coin
        if (this.physics.overlap(this.player, this.coin)) {
            // Call the new hit() method
            this.hit();
        }
        if (this.physics.overlap(this.player, this.coin2)) {
            // Call the new hit() method
            this.hit();
        }
        if (this.physics.overlap(this.player, this.trap)) {
            // Call the new hit() method
            this.die();
        }

    }
    hit() 
    {
            this.coin.destroy();
        
        // Change the position x and y of the coin randomly
        // this.coin.x = Phaser.Math.Between(100, 600);
        // this.coin.y = Phaser.Math.Between(100, 300);
    
        // Increment the score by 10
        this.score += 10;
    
        // Display the updated score on the screen
        this.scoreText.setText("score: " + this.score);

        // Create a new tween 
        this.tweens.add({
            targets: this.player, // on the player 
            duration: 200, // for 200ms 
            scaleX: 1.2, // that scale vertically by 20% 
            scaleY: 1.2, // and scale horizontally by 20% 
            yoyo: true, // at the end, go back to original scale 
        });
    }

    die()
    {
        // // Increment the score by 10
        // this.score -= 10;
    
        // // Display the updated score on the screen
        // this.scoreText.setText("score: " + this.score);

        // Create a new tween 
        this.tweens.add({
            targets: this.player, // on the player 
            duration: 500, // for 200ms 
            scaleX: 1.5, // that scale vertically by 20% 
            scaleY: 1.5, // and scale horizontally by 20% 
            color: '#c61a09',
            yoyo: true, // at the end, go back to original scale 
        });

        this.scene.start("MainMenu");
    }



}