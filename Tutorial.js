class Tutorial extends Phaser.Scene {
   constructor() {
       super("tutorial");
   }

   preload() 
   {
       this.load.image("tutorial","assets/tutorial.png");
   }

   create() 
   {
     let creditbtn = this.add.image(650,500,"tutorial");

   }


}