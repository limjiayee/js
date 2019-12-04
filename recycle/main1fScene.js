class main1fScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'main1fScene' });
    }


    preload() {
        this.load.image('main1f','assets/intro_1f.png');

    }

    create () {

        this.add.image(0, 0, 'main1f').setOrigin(0, 0);
        this.add.text(200,950, 'Press spacebar to next', { font: '20px Courier', fill: '#ffffff' });

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is main1fScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto main2Scene");
        this.scene.stop("main1fScene");
        this.scene.start("main2Scene");
        }, this );

        
    }

}
