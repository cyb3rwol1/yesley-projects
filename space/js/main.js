var canvas = document.createElement("canvas");
canvas.toDataURL("image/gif")
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 550;
let divCanvas = document.getElementById('ctx');
divCanvas.appendChild(canvas);


let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;




let main = (() => {
    let now = Date.now();
    let delta = now - then;

    update(delta / 1000);
    render();
    then = now;

    requestAnimationFrame(main);


});

let then = Date.now();
reset();
main();