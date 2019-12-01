class main1bScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'main1bScene' });
    }


    preload() {
        this.load.image('main1b','assets/intro_1b_v02.png');

    }

    create () {

        this.add.image(0, 0, 'main1b').setOrigin(0, 0);

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is main1bScene");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto main1cScene");
        this.scene.stop("main1bScene");
        this.scene.start("main1cScene");
        }, this );

        
    }

}
