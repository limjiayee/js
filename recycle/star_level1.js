class star_level1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'star_level1' });
    }

    preload() {
        this.load.image('star_level1','assets/star_level1.png');
    }

    create () {

        this.add.image(0, 0, 'star_level1').setOrigin(0, 0);
        
        //this.add.text(60,40, 'Lim Jia Yee CNMT2019', { font: '20px Courier', fill: '#ffffff' });

        console.log("star_level1");

        

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        // var key1 = this.input.keyboard.addKey(49);
        // var key2 = this.input.keyboard.addKey(50);
        // var key3 = this.input.keyboard.addKey(51);
        // var key4 = this.input.keyboard.addKey(52);
        // var key5 = this.input.keyboard.addKey(53);
        // var key6 = this.input.keyboard.addKey(54);
        // var key7 = this.input.keyboard.addKey(55);
        // var key8 = this.input.keyboard.addKey(56);
        // var key9 = this.input.keyboard.addKey(57);




        // key1.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level1");
        //     }, this );

        // key2.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level2");
        //     }, this );

        // key3.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level3");
        //     }, this ); 
            
        // key4.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level4");
        //     }, this );
                
                
        // key5.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level5");
        //     }, this );        
                
        // key6.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level6");
        //     }, this ); 
        
        // key7.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level7");
        //     }, this ); 

        // key8.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level8");
        //     }, this );     

        // key9.on('down', function(){
        //     this.scene.stop("mainScene");
        //     this.scene.start("level9");
        //     }, this );  

        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto level2");
        this.scene.stop("star_level1");
        this.scene.start("level2");
        //this.scene.start("level1");
        }, this );

        this.input.once('pointerdown', function(){
        console.log("pointer pressed, goto level2");
        this.scene.stop("star_level1");
        this.scene.start("level2");
        }, this );    

    }

}