
let playerReady = false;
let playerImage = new Image();
playerImage.onload = function () {
	playerReady = true;
};
playerImage.src = "./images/nave_2.png";


let Player = {
    name: 'Yesley',
    speed_move: PLAYER_SPEED_MOVE * 100,
    x: 0,
    y: 0,
    img: playerImage,
    width : PLAYER_WIDTH,
    height : PLAYER_HEIGHT
}

// keyboard controls
let keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);