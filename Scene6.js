class Scene6 extends Phaser.Scene{
  constructor()
  {
    super("fase2");
    var contagem2
  }

     preload ()
      {
        this.load.image('casa', 'assets/Casa.png');
        this.load.image('ground', 'assets/Ground.png');
        this.load.image('circuito', 'assets/circuito.png');
        this.load.spritesheet('dude', 'assets/Raphael.png', { frameWidth: 32, frameHeight: 48 });
      }

   create ()
    {
      this.add.image(400, 250, 'casa');

      platformas = this.physics.add.staticGroup();

      platformas.create(400, 568, 'ground').setScale(2).refreshBody();

      platformas.create(200, 430, 'ground');
      platformas.create(300, 350, 'ground');
      platformas.create(450, 199, 'ground');

      player = this.physics.add.sprite(100, 450, 'dude');

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
          key: 'turn',
          frames: [ { key: 'dude', frame: 4 } ],
          frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });

      cursors = this.input.keyboard.createCursorKeys();

      circuitos = this.physics.add.group({
          key: 'circuito',
          repeat: 10,
          setXY: { x: 2, y: 0, stepX: 60 }
      });

      circuitos.children.iterate(function (child) {

          child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

      });

      

      this.physics.add.collider(player, platformas);
      this.physics.add.collider(circuitos, platformas);

      this.physics.add.overlap(player, circuitos, collectStar, null, this);

      //configurando variavel de pontos
      contagem2 =12 ;
      //configurando variavel de texto ( para avisar quando o jogo )
      ganhou = this.add.text(""); 
    } 

    update ()
    {
      if (cursors.left.isDown)
      {
          player.setVelocityX(-160);

          player.anims.play('left', true);
      }
      else if (cursors.right.isDown)
      {
          player.setVelocityX(160);

          player.anims.play('right', true);
      } 
      else
      {
          player.setVelocityX(0);

          player.anims.play('turn');
      }

      if (cursors.up.isDown && player.body.touching.down)
      {
          player.setVelocityY(-330);
      }
      /*
      var contagem2;
      function collectStar (player, star)
      {
        star.disableBody(true, true);
        contagem += 1;
        contagem2 += 1;
       if(contagem2 == 23)
        {
         ganhou.setText('Ganhou!! Coletou todas as ' + contagem + ' peças!!' +'                      Aperte F5 para Recomeçar');
         player.disableBody(true,true);
         this.scene.start("fase2");
        
        }
    
      } 

      */
       
    }






  
  
  
}
