class MainScene extends Phaser.Scene {
    // The three methods currently empty
    constructor()
    {
        super("fase1");
    }
    preload() {
        this.load.image("coin","assets/coin.png");
        this.load.image("player","assets/player.png");
    }
    create() 
    {
      
      this.player = this.physics.add.sprite(100, 100, "player");
      this.coin = this.physics.add.sprite(300, 300, "coin");

      this.score = 0;

      // The style of the text 
      // A lot of options are available, these are the most important ones
      let style = { font: "20px Arial", fill: "#fff" };

      // Display the score in the top left corner
      // Parameters: x position, y position, text, style
      this.scoreText = this.add.text(20, 20, "score: " + this.score, style);
      
      //Character Movement
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
        if(this.score == 10)
        {
            this.scene.start("winscene");
        }

    }
    hit() 
    {
        // Change the position x and y of the coin randomly
        this.coin.x = Phaser.Math.Between(100, 600);
        this.coin.y = Phaser.Math.Between(100, 300);
    
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

  }
