
class Fase2 extends Phaser.Scene {
    constructor () {
        super("level2");
    }

    preload() 
    {
        this.load.image("bkg2","assets/Cen2.png");
        this.load.image("cheese","assets/Cheese.png");
        this.load.image("player","assets/player.png");
        this.load.image("trap","assets/RatTrap.png");
        this.load.audio("colect",["assets/colectSound.mp3"]);
    }

    create()
    {
        this.add.image(930,360,"bkg2");
        this.player = this.physics.add.sprite(110,350,"player");
        //Cheese - Queijo ------------------------------------------
        this.cheese = this.physics.add.sprite(850,350,"cheese");
        this.cheese2 = this.physics.add.sprite(1350,350,"cheese");
        this.cheese3 = this.physics.add.sprite(300,350,"cheese");

        //Traps - Ratoeiras -------------------------------------------
        this.trap = this.physics.add.sprite(500,150,"trap");
        this.trap2 = this.physics.add.sprite(1050,350,"trap");
        this.trap3 = this.physics.add.sprite(700,370,"trap");
        this.trap4 = this.physics.add.sprite(1325,500,"trap");
        this.trap5 = this.physics.add.sprite(1355,250,"trap");
        //Audio
        this.ColectSound = this.sound.add("colect");


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

        // If the player is overlapping with the cheese - Se o jogador está colidindo com o Queijo
        if (this.physics.overlap(this.player, this.cheese)) {
            // Call the new hit() method
            this.hit(this.cheese);
            this.ColectSound.play("colect");
        }
        if (this.physics.overlap(this.player, this.cheese2)) {
            // Call the new hit() method
            this.hit(this.cheese2);
            this.ColectSound.play("colect");
        }
        if (this.physics.overlap(this.player, this.cheese3)) {
            // Call the new hit() method
            this.hit(this.cheese3);
            this.ColectSound.play("colect");
        }

        //When the player overlaps with the trap - Quando o jogador colide com a ratoeira
        if (this.physics.overlap(this.player, this.trap)) {
            this.die();
        }
        if (this.physics.overlap(this.player, this.trap2)) {
            this.die();
        }
        if (this.physics.overlap(this.player, this.trap3)) {
            this.die();
        }
        if (this.physics.overlap(this.player, this.trap4)) {
            this.die();
        }
        if (this.physics.overlap(this.player, this.trap5)) {
            this.die();
        }

        //GAME MANAGER - 
        this.checkScore(this.score);
    }
    hit(cheese) 
    {
        
        cheese.destroy();
        
        // Change the position x and y of the coin randomly
        // this.coin.x = Phaser.Math.Between(100, 600);
        // this.coin.y = Phaser.Math.Between(100, 300);
    
        // Increment the score by 10
        this.score += 1;
    
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

    checkScore(score)
    {
        if(score == 3)
        {
            this.scene.start("level3");     
        }
    }

}
