
let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "./images/bg_space.gif";
let Background = {
    img: bgImage,
    width: POSITION.X_,
    height: POSITION.Y_
};


let reset = (() => {
    Player.x = (POSITION.X_ / 2) - (PLAYER_WIDTH /2);
    Player.y = POSITION.Y_ - 100;

});

let update = ((modifier) => {
    if (87 in keysDown) { // up
        if(Player.y - Player.speed_move * modifier > POSITION._Y){
            Player.y -= Player.speed_move * modifier;
        }
        console.log(Player.y);
    }
    if (83 in keysDown) { // down
        Player.y += Player.speed_move * modifier;
    }
    if (65 in keysDown) { // left
        Player.x -= Player.speed_move * modifier;
    }
    if (68 in keysDown) { // right
        Player.x += Player.speed_move * modifier;
    }
});

let render = (() => {

    if (bgReady) {
        
        ctx.drawImage(Background.img, 0, 0, Background.width, Background.height);
    }

    if (playerReady) {
        ctx.drawImage(Player.img, //Imagem
            Player.x,  // x inicial
            Player.y, // y inicial
            Player.width,  //largura
            Player.height); // altura
    }

});