// collect stars, no enemies
class level4 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level4' });
        // Put global variable here
        this.yellowCount = 0;
        this.redCount = 0;
        this.greenCount = 0;
        this.greyCount = 0;

        this.collectbattery=0
        this.collectpaint=0
        this.collectoil=0
    }

preload() {

    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map1', 'assets/level1.json');
    
    this.load.spritesheet('tiles', 'assets/fullset.png', {frameWidth: 64, frameHeight: 64});

    this.load.atlas('boy', 'assets/boy.png', 'assets/boy.json');
    //this.load.atlas('girl', 'assets/girl.png', 'assets/girl.json');
    this.load.image('battery', 'assets/battery.png');
    this.load.image('paint', 'assets/paint.png');
    this.load.image('oil', 'assets/oil.png');
    // this.load.image('toiletpaper', 'assets/toiletpaper.png');
    this.load.image('red', 'assets/red_dusbin_v02.png');
    this.load.image('green', 'assets/green_dusbin_v02a.png');
    this.load.image('yellow', 'assets/yellow_dusbin_v02.png');
    this.load.image('grey', 'assets/grey_dusbin_v02.png');

    //this.load.image('coin', 'assets/goldCoin.png');

    this.load.image('bg', 'assets/bg_dark_3.png');

    //this.load.image('apple', 'assets/apple.png');


    // Sound preload
this.load.audio('correct', 'assets/correct.mp3');
this.load.audio('wrong', 'assets/wrong.mp3');


}

create() {
    // Sound variable
this.correctSnd = this.sound.add('correct');
this.wrongSnd = this.sound.add('wrong');

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
    this.player.setPosition(78,632);
    this.player.setBounce(0.1); // our this.player will bounce from items
    
    // small fix to our this.player images, we resize the physics body object slightly
    this.player.setScale(2);
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

    this.battery = this.physics.add.sprite(600, 644, 'battery');
    this.paint = this.physics.add.sprite(800, 600, 'paint');
    this.oil = this.physics.add.sprite(1200, 600, 'oil');
    //this.apple = this.physics.add.sprite(951, 644, 'apple');
    this.red = this.physics.add.sprite(600, 950, 'red');
    this.green = this.physics.add.sprite(1400, 950, 'green');
    this.yellow = this.physics.add.sprite(1000, 950, 'yellow');
    this.grey = this.physics.add.sprite(164, 950, 'grey');
   
    // this text will show the score
    this.yellowText = this.add.text(20, 40, 'Harmful waste 0', {
        fontSize: '30px',
        fill: '#ffffff'
    });
    // fix the text to the camera
    this.yellowText.setScrollFactor(0);
    this.yellowText.visible = true;

    this.add.text(1500,40, 'Level 4', { font: '30px Courier', fill: '#ffffff' });

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
    //this.physics.add.collider(this.platformLayer, this.apple);
    //this.physics.add.collider(this.groundLayer, this.apple);
    this.physics.add.collider(this.blackwhiteLayer, this.player);

    //this.physics.add.overlap(this.player, this.apple,this.collectapple, null, this );

    this.physics.add.overlap(this.player, this.battery,this.holdbattery, null, this );
    this.physics.add.overlap(this.player, this.paint,this.holdpaint, null, this );
    this.physics.add.overlap(this.player, this.oil,this.holdoil, null, this ); 


    this.physics.add.overlap(this.player, this.red,this.dropred, null, this );
    this.physics.add.overlap(this.player, this.green,this.dropgreen, null, this );
    this.physics.add.overlap(this.player, this.yellow,this.dropyellow, null, this );
    this.physics.add.overlap(this.player, this.grey,this.dropgrey, null, this );

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


//battery
holdbattery(player) {
    this.battery.x = this.player.x+64
    this.battery.y = this.player.y
    this.collectbattery=1
    return false;
}

 //paint
 holdpaint(player) {
    this.paint.x = this.player.x+64
    this.paint.y = this.player.y
    this.collectpaint=1
    return false;
}

//oil
holdoil(player) {
    this.oil.x = this.player.x+64
    this.oil.y = this.player.y
    this.collectoil=1
    return false;
}

dropred(player) {
   if (this.collectbattery) {
       console.log('dropbattery')
       this.battery.disableBody(true, true);

       this.collectbattery=0
       this.yellowCount +=1;

       // Play sound
    this.correctSnd.play();
    this.player.y-200;

       console.log(this.yellowCount);
       this.yellowText.setText(this.yellowCount);

   } else if (this.collectpaint) {
    console.log('droppaint')
    this.paint.disableBody(true, true);
 
    this.collectpaint=0
    this.yellowCount +=1;

    // Play sound
    this.correctSnd.play();
    this.player.y-200;

    console.log(this.yellowCount);
    this.yellowText.setText(this.yellowCount);


   } else if (this.collectoil) {
        console.log('dropoil')
        this.oil.disableBody(true, true);
     
        this.collectoil=0
        this.yellowCount +=1;
    
        // Play sound
        this.correctSnd.play();
        this.player.y-200;
    
        console.log(this.yellowCount);
        this.yellowText.setText(this.yellowCount);



}  else {
    //this.wrongSnd.play();
    //console.log('yellowwrongbin')

    }


    if (this.yellowCount >2 ) {
        this.scene.start("star_level4");
    }

  return false;
}



dropyellow(player) {
    if (this.collect) {

    } else {
        this.wrongSnd.play();
        console.log('wrongyellowbin')
        this.scene.start("loss4");
    }
     return false;
 }


dropgrey(player) {
    if (this.collect) {
        
    } else {
        this.wrongSnd.play();
        console.log('wronggreybin')
        this.scene.start("loss4");
    }
     return false;
 }

 dropgreen(player) {
    if (this.collect) {
        
    } else {
        this.wrongSnd.play();
        console.log('wronggreenbin')
        this.scene.start("loss4");
    }
     return false;
 }

update() {

    if (this.cursors.left.isDown)
    {
        console.log("left");
        this.player.body.setVelocityX(-400);
        this.player.anims.play('walk', true); // walk left
        this.player.flipX = true; // flip the sprite to the left
        //this.alien_death1Snd.play(); //audio
        // this.player.flipX = true; // flip the sprite to the left
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(400);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
        //this.alien_death1Snd.play(); //audio
        //this.player.flipX = false; // use the original sprite looking to the right
    } 
    else if (this.cursors.up.isDown)
    {
        console.log("up");
        this.player.body.setVelocityY(-400);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
        //this.player.flipX = false; // use the original sprite looking to the right
    }
    else if (this.cursors.down.isDown)
    {
        console.log("down");
        this.player.body.setVelocityY(400);
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
    if ( this.paperCount > 3 ) {
        console.log('Collected 1 star, jump to level 5');
        this.scene.stop("level4");
        this.scene.start("star_level4");
    }

    
   
}


}