class main4Scene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'main4Scene' });
    }


    preload() {
        this.load.image('main4','assets/intro_4.png');

    }

    create () {

        this.add.image(0, 0, 'main4').setOrigin(0, 0);
         this.add.text(750,950, 'Press spacebar to next', { font: '20px Courier', fill: '#ffffff' });

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is main4Scene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto main5Scene");
        this.scene.stop("main4Scene");
        this.scene.start("main5Scene");
        }, this );

    }

}
