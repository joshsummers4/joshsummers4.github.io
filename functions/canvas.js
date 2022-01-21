function draw(){
    var c = document.createElement('canvas'),        
    ctx = c.getContext('2d'),
    cw = c.width = 100;
    c.height = 100;
    ctx.lineWidth = 1;
    for(var x = 0; x < cw; x++){
        ctx.beginPath();
        ctx.moveTo(25, 0);
        ctx.lineTo(0, 25);
        ctx.strokeStyle = 'rgb(109, 103, 110)';
        ctx.stroke();
    }
    document.body.style.background = 'url(' + c.toDataURL() + ')';
    document.body.style.backgroundColor = 'rgb(27, 27, 30)';
    document.body.style.backgroundAttachment = 'fixed';
}
        

