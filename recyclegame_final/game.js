
let config = {
    type: Phaser.AUTO,
    parent	: 'phaser-app',
    width: 1664,
    height: 1024,
    backgroundColor: '#000055',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            
            debug: false
        }
    },
    //scene: [mainScene, main2Scene, storyScene, story2Scene, level1]
    scene: [mainScene, main1aScene, main1bScene, main1cScene, main1dScene,
         main1eScene, main1fScene, main2Scene, main3Scene, level1, level2, loss, loss2, loss3, loss4, loss5, star_level1,star_level2, star_level3, star_level4, level3, level4, level5, last]


};

let game = new Phaser.Game(config);

// function resizeApp ()
// {
//     // Width-height-ratio of game resolution
//     // Replace 360 with your game width, and replace 640 with your game height
//     let game_ratio = 360 / 640;
	
//     // Make div full height of browser and keep the ratio of game resolution
//     let div = document.getElementById('phaser-app');
//     div.style.width = (window.innerHeight * game_ratio) + 'px';
//     div.style.height = window.innerHeight + 'px';
	
//     // Check if device DPI messes up the width-height-ratio
//     let canvas	= document.getElementsByTagName('canvas')[0];
	
//     let dpi_w	= parseInt(div.style.width) / canvas.width;
//     let dpi_h	= parseInt(div.style.height) / canvas.height;		
	
//     let height	= window.innerHeight * (dpi_w / dpi_h);
//     let width	= height * game_ratio;
	
//     // Scale canvas	
//     canvas.style.width	= width + 'px';
//     canvas.style.height	= height + 'px';
// }

// window.addEventListener('resize', resizeApp);





