class Game {
    constructor(canvas) {
        canvas.width = POSITION.X_;
        canvas.height = POSITION.Y_;
        this._width = POSITION.X_;
        this._height = POSITION.Y_;
        this._ctx = canvas.getContext('2d');
        this._player = new Player(this._ctx, PLAYER_POSTION_START.X_, PLAYER_POSTION_START.Y_);
    }

    play() {
        this._clear(); 
        this._drawBorder(); 
        this._player.draw(); 

        if (this._checkState()) { 
            requestAnimationFrame(this.play.bind(this)); 
        } else {
            this._playLose();
        }
    }

    _checkState() {
        let borders = this._player.getBorders();
        return (borders.xMin >= 0 &&
            borders.xMax <= this._width &&
            borders.yMin >= 0 &&
            borders.yMax <= this._height);
    }

    _playLose() {
        this._ctx.beginPath();
        this._ctx.font = '20px serif';
        this._ctx.fillStyle = 'red';
        this._ctx.fillText("You lose!", this._width / 2, this._height / 2);
    }

    _drawBorder() {
        this._ctx.beginPath();
        this._ctx.rect(0, 0, this._width, this._height);
        this._ctx.stroke();
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._width, this._height);
    }
}

var game = new Game(document.getElementById('ctx'));
game.play();