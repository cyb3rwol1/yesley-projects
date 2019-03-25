let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/bg_space.gif";

let Background = {
    img: bgImage,
    width: POSITION_LIMITER.X_,
    height: POSITION_LIMITER.Y_
};

let reset = (() => {
    Player.x = (POSITION_LIMITER.X_ / 2) - (PLAYER_WIDTH / 2);
    Player.y = POSITION_LIMITER.Y_ - 100;
});

let update = ((modifier, now) => {

    Player.speed_move = PLAYER_SPEED_MOVE + 1000;

    if (87 in keysDown) { // up
        if (Player.y - Player.speed_move * modifier > POSITION_LIMITER._Y)
            Player.y -= Player.speed_move * modifier;
    }
    if (83 in keysDown) { // down
        if (Player.y + Player.speed_move * modifier < (POSITION_LIMITER.Y_ - Player.height))
            Player.y += Player.speed_move * modifier;
    }
    if (65 in keysDown) { // left
        if (Player.x - Player.speed_move * modifier > (POSITION_LIMITER._X))
            Player.x -= Player.speed_move * modifier;
    }
    if (68 in keysDown) { // right
        if (Player.x + Player.speed_move * modifier < (POSITION_LIMITER.X_ - Player.height))
            Player.x += Player.speed_move * modifier;
    }

    //if (32 in keysDown) { // fire (space)

    let BULLET = {
        x: startBulletReferencePlayerX(),
        y: startBulletReferencePlayerY(),
        damage: 1,
        speed_move: BULLET_SPEED_MOVE
    }
    if (Player.speed_fire == PLAYER_SPEED_FIRE) {
        BULLET_POOL.push(BULLET);
        Player.speed_fire = 0;
    }

    Player.speed_fire += 1;

    //}

    if (BULLET_POOL && BULLET_POOL.length > 0)
        BULLET_POOL = updateBulletPosition(BULLET_POOL, modifier);
});

let render = (() => {

    ctx.clearRect(0, 0, POSITION_LIMITER.X_, POSITION_LIMITER.Y_);

    if (bgReady) {
        ctx.drawImage(Background.img, 0, 0, Background.width, Background.height);
    }

    if (BULLET_POOL) {
        BULLET_POOL.forEach((bl) => {
            ctx.font = "20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(BULLET_BODY, bl.x, bl.y);
        });
    }

    if (enemyReady) {
        ctx.drawImage(Enemy.img,
            Player.x,
            Player.y - 350,
            Player.width,
            Player.height);
    }

    if (playerReady) {
        ctx.drawImage(Player.img,
            Player.x,
            Player.y,
            Player.width,
            Player.height);
    }

});

let startBulletReferencePlayerX = () => {
    return Player.x + (Player.width / 2) - 6;
}

let startBulletReferencePlayerY = () => {
    return Player.y + 16;
}

let updateBulletPosition = (bulletsArr, modifier) => {
    let newBullets = [];

    bulletsArr.forEach((bl) => {
        bl.y -= bl.speed_move * modifier;

        if (bl.y >= POSITION_LIMITER._Y)
            newBullets.push(bl);
    });

    return newBullets;
}