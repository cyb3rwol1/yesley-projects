let enemyReady = false;
let enemyImage = new Image();
enemyImage.onload = function () {
    enemyReady = true;
};
enemyImage.src = "images/nave_3.png";

let Enemy = {
    x :0,
    y: 0,
    health: 1,
    img: enemyImage
}