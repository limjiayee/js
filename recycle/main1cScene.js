class main1cScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'main1cScene' });
    }


    preload() {
        this.load.image('main1c','assets/intro_1c.png');

    }

    create () {

        this.add.image(0, 0, 'main1c').setOrigin(0, 0);
        this.add.text(200,950, 'Press spacebar to next', { font: '20px Courier', fill: '#ffffff' });

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is main1cScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto main1dScene");
        this.scene.stop("main1cScene");
        this.scene.start("main1dScene");
        }, this );

        
    }

}
