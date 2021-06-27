var canvas = fabric.Canvas("canvas");

var blockW = 30,blockH = 30;
var playerX = 10,playerY = 10;

var playerObj = {};
var blockObj = {};

function upload_player(){
    fabric.Image.fromUrl("Spider_man.jpg", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(100);
        playerObj.scaleToHeight(150);
        playerObj.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObj);
    });
}
upload_player();
