class main3Scene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'main3Scene' });
    }


    preload() {
        this.load.image('main3','assets/intro_3.png');

    }

    create () {

        this.add.image(0, 0, 'main3').setOrigin(0, 0);

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is main3Scene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto main4Scene");
        this.scene.stop("main3Scene");
        this.scene.start("main4Scene");
        }, this );

    }

}
