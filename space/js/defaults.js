const POSITION_LIMITER = { _X: 0, X_: 700, _Y: 0, Y_: 500 };

const CONTROLLER_MAP = {
    65: 'left',
    87: 'up',
    68: 'right',
    83: 'down'
};

const PLAYER_SPEED_MOVE = 3 * 100 ;
const PLAYER_POSTION_START = { _X: 5, X_: 5, _Y: 5, Y_: 5 };
const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 60;
const PLAYER_SPEED_FIRE = 10;

let BULLET_POOL = [];
const BULLET_SPEED_MOVE = 10 * 100 ;
const BULLET_BODY = 'lll';

let ENEMY_POOL = [];
