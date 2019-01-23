class Player {
    constructor(ctx, width, height) {
        this._ctx = ctx;
        this._width = width;
        this._height = height;
        this._x = 0;
        this._y = 0;
        this._speed = PLAYER_SPEED_MOVE_START;
        document.addEventListener('keydown', this.keydown.bind(this));
    }

    draw() {
        let img = document.getElementById("img-player");
        this._ctx.beginPath();
        this._ctx.drawImage(img, this._x, this._y, 30, 30);
        this._ctx.fillStyle = 'red';
        this._ctx.fill();
    }

    getBorders() {
        return {
            xMin: this._x,
            xMax: this._x + this._width,
            yMin: this._y,
            yMax: this._y + this._height,
        }
    }

    keydown(e) {
        let arrow = CONTROLLER_MAP[e.keyCode];

        if (arrow === 'left') {
            this._x -= this._speed;
        }
        if (arrow === 'right') {
            this._x += this._speed;
        }
        if (arrow === 'up') {
            this._y -= this._speed;
        }
        if (arrow === 'down') {
            this._y += this._speed;
        }
    }
}