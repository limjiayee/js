class loss4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'loss4' });
    }


    preload() {
        this.load.image('loss4','assets/loss_harmful.png');

    }

    create () {

        this.add.image(0, 0, 'loss4').setOrigin(0, 0);

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is loss4");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto mainScene");
        this.scene.stop("loss4");
        this.scene.start("mainScene");
        }, this );

        
    }

}
