// collect stars, no enemies
class level1 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level1' });
        // Put global variable here
        this.toiletpaperCount = 0;
    }

preload() {

    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map1', 'assets/level1.json');
    
    this.load.spritesheet('tiles', 'assets/fullset.png', {frameWidth: 64, frameHeight: 64});

    this.load.atlas('boy', 'assets/boy.png', 'assets/boy.json');
    this.load.atlas('girl', 'assets/girl.png', 'assets/girl.json');

    this.load.image('toiletpaper', 'assets/toiletpaper.png');
    this.load.image('red', 'assets/red.png');
    this.load.image('green', 'assets/green.png');
    this.load.image('yellow', 'assets/yellow.png');
    this.load.image('orange', 'assets/orange.png');

    this.load.image('coin', 'assets/goldCoin.png');

    this.load.image('bg', 'assets/bg_dark_3.png');
    this.load.image('loss', 'assets/loss.png');


}

create() {

            //bg
this.bg=this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg');
this.bg.setOrigin(0, 0);

    //this.add.text(0,0, 'Level 1 - Collect stars', { font: '24px Courier', fill: '#000000' }).setScrollFactor(0);

    this.map = this.make.tilemap({key: 'map1'});
    
    // Must match tileSets name
    let groundTiles = this.map.addTilesetImage('fullset','tiles');

    // create the ground layer
    this.groundLayer = this.map.createDynamicLayer('ground', groundTiles, 0, 0);
    this.brownLayer = this.map.createDynamicLayer('brown_road', groundTiles, 0, 0);
    this.roadLayer = this.map.createDynamicLayer('road', groundTiles, 0, 0);
     this.platformLayer = this.map.createDynamicLayer('platform_layer', groundTiles, 0, 0);
     //this.dusbinLayer = this.map.createDynamicLayer('dusbin', groundTiles, 0, 0);
    //this.green_bottleLayer = this.map.createDynamicLayer('green_bottle', groundTiles, 0, 0);
     //this.paperLayer = this.map.createDynamicLayer('paper', groundTiles, 0, 0);
     //this.boneLayer = this.map.createDynamicLayer('bone', groundTiles, 0, 0);
    this.blackwhiteLayer = this.map.createDynamicLayer('blackwhite', groundTiles, 0, 0);
    this.alien_death1Snd = this.sound.add('alien');
    
    // Make it global variable for troubleshooting
    //window.groundLayer = this.groundLayer;


    // Set starting and ending position using object names in tiles
    this.startPoint = this.map.findObject("objectLayer", obj => obj.name === "startpoint");
   
    // Make it global variable for troubleshooting
    window.startPoint = this.startPoint;

    // create the player sprite    
    this.player = this.physics.add.sprite(200, 200, 'boy');
    this.player.setPosition(78,850);
    this.player.setBounce(0.1); // our this.player will bounce from items
    
    // small fix to our this.player images, we resize the physics body object slightly
    this.player.body.setSize(this.player.width*1.5, this.player.height*1.5);
    this.player.setCollideWorldBounds(true); // don't go out of the map  

    // Set this.player to starting position
    //this.player.setPosition(this.startPoint.x, this.startPoint.y);  
    //this.player.setPosition(0, 0);  

    // Make it global variable for troubleshooting
    window.player = this.player;

    //console.log('player ', this.player.x, this.player.y);

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // the this.player will collide with this layer
    this.groundLayer.setCollisionByProperty({ collides: true });
    this.platformLayer.setCollisionByProperty({ collides: true });
    
    this.physics.add.collider(this.groundLayer, this.player);
    this.physics.add.collider(this.platformLayer, this.player);

    // // Add random stars
    // this.stars = this.physics.add.group({
    //     key: 'toiletpaper',
    //     repeat: 2,
    //     setXY: { x: 0, y: 0, stepX: Phaser.Math.Between(200, 200) }
    // });
    this.toiletpaper = this.physics.add.sprite(951, 644, 'toiletpaper');
    this.red = this.physics.add.sprite(164, 950, 'red');
    this.green = this.physics.add.sprite(600, 950, 'green');
    this.yellow = this.physics.add.sprite(1000, 950, 'yellow');
    this.orange = this.physics.add.sprite(1400, 950, 'orange');
   
    // this text will show the score
    this.toiletpaperText = this.add.text(20, 40, 'Stars 0', {
        fontSize: '20px',
        fill: '#ffffff'
    });
    // fix the text to the camera
    this.toiletpaperText.setScrollFactor(0);
    this.toiletpaperText.visible = true;

    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('boy', {
    //         start: 0,
    //         end: 3
    //     }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // this.anims.create({
    //     key: 'idle',
    //     frames: [{
    //         key: 'boy',
    //         frame: 'boy_01'
    //     }],
    //     frameRate: 10,
    // });

    // this.anims.create({
    //     key: 'walk',
    //     frames: this.anims.generateFrameNumbers('boy', {prefix: 'boy_',
    //         start: 2,
    //         end: 7,
    //         zeroPad: 2,
    //     }),
    //     frameRate: 10,
    //     repeat: -1
    // });

// Create the idle animations, using first frame
this.anims.create({
    key: 'idle',
    frames: [{key: 'boy', frame: 'boy_01'}],
    frameRate: 10,
});

// Create the walking animation with prefix of girl_
this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNames('boy', {prefix: 'boy_', start: 1, end: 8, zeroPad: 2}),
    frameRate: 10,
    repeat: -1
});



    window.anim=this.anims

    this.cursors = this.input.keyboard.createCursorKeys();

  // set bounds so the camera won't go outside the game world
  this.groundLayer.setCollisionByProperty({ ground: true });
  // make the camera follow the this.player
//   this.cameras.main.startFollow(this.player);

//   // set background color, so the sky is not black    
//   this.cameras.main.setBackgroundColor('#ccccff');
    this.blackwhiteLayer.setCollisionByProperty({ black: true });
    this.blackwhiteLayer.setCollisionByProperty({ white: true });

    // Collide platform with stars
    this.physics.add.collider(this.platformLayer, this.toiletpaper);
    this.physics.add.collider(this.groundLayer, this.toiletpaper);

    this.physics.add.overlap(this.player, this.toiletpaper,this.collecttoiletpaper, null, this );

    this.physics.add.overlap(this.player, this.red,this.dropred, null, this );
    this.physics.add.overlap(this.player, this.green,this.dropgreen, null, this );
    this.physics.add.overlap(this.player, this.yellow,this.dropyellow, null, this );
    this.physics.add.overlap(this.player, this.orange,this.droporange, null, this );

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;


    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    // make the camera follow the player
    this.cameras.main.startFollow(player);

    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor('000000');

}

collecttoiletpaper(player, stars) {
    this.toiletpaper.x = this.player.x+64
    this.toiletpaper.y = this.player.y
    this.collecttoilet=1

    
    return false;
}

dropred(player) {
   if (this.collecttoilet) {
       console.log('droptoiletpaper')
       this.toiletpaper.disableBody(true, true);

       this.collecttoilet=0
       this.toiletpaperCount +=1;
       console.log(this.toiletpaperCount);
       this.toiletpaperText.setText(this.toiletpaperCount);

   }

    
    return false;
}


dropyellow(player) {
    if (this.collecttoilet) {
        console.log('wrongbin')
        this.scene.start("loss");

    }
 
     
     return false;
 }

removeBombs(bombs,stars) {
    bombs.disableBody(true, true);
}

update() {

    if (this.cursors.left.isDown)
    {
        console.log("left");
        this.player.body.setVelocityX(-200);
        this.player.anims.play('walk', true); // walk left
        this.player.flipX = true; // flip the sprite to the left
        //this.alien_death1Snd.play(); //audio
        // this.player.flipX = true; // flip the sprite to the left
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(200);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
        //this.alien_death1Snd.play(); //audio
        //this.player.flipX = false; // use the original sprite looking to the right
    } 
    else if (this.cursors.up.isDown)
    {
        console.log("up");
        this.player.body.setVelocityY(-200);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
        //this.player.flipX = false; // use the original sprite looking to the right
    }
    else if (this.cursors.down.isDown)
    {
        console.log("down");
        this.player.body.setVelocityY(200);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
        //this.player.flipX = false; // use the original sprite looking to the right
    }
    else
    {
        console.log("idle");
        this.player.body.setVelocityX(0);
        this.player.body.setVelocityY(0);
        this.player.anims.play('idle', true);
 // use the original sprite looking to the right
        //this.player.flipX = false; // use the original sprite looking to the right
    }

    //console.log('Current this.player pos ', this.player.x, this.player.y);
    
    // Check for more then 5 stars
    if ( this.toiletpaperCount > 0 ) {
        console.log('Collected 1 star, jump to level 2');
        this.scene.stop("level1");
        this.scene.start("level2");
    }

    
   
}


}