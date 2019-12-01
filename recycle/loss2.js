class loss2 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'loss2' });
    }


    preload() {
        this.load.image('loss2','assets/loss_recyclable.png');

    }

    create () {

        this.add.image(0, 0, 'loss2').setOrigin(0, 0);

        // graphics.fillStyle(0xff3300, 1);

        // graphics.fillRect(100, 200, 600, 300);
        // graphics.fillRect(100, 100, 100, 100);
        // this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

        //this.add.text(0, 580, 'Press Spacebar to continue', { font: '24px Courier', fill: '#000000' });

        console.log("This is loss2");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, goto mainScene");
        this.scene.stop("loss2");
        this.scene.start("mainScene");
        }, this );

        
    }

}
