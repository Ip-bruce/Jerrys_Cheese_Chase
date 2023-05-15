class Tutorial extends Phaser.Scene {
   constructor() {
       super("tutorial");
   }

   preload() 
   {
       this.load.image("tu","assets/play.png");
   }

   create() 
   {

     this.add.image(20,20,"tu");

   }


}