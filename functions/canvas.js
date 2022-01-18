function draw(w, h) {
    var ctx = document.getCSSCanvasContext("2d", "lines", w, h);
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(0, 25);
    ctx.lineWidth = 2;
    // set line color
    ctx.strokeStyle = 'rgba(251, 255, 254, 0.5';
    ctx.stroke();
}



