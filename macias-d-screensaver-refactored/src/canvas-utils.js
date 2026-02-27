export const drawRectangle = (ctx,x,y,width,height,fillStyle="black",lineWidth=0,strokeStyle="black") => {  
    ctx.save();

    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

export const drawArc = (ctx, x, y, radius, fillStyle="black", lineWidth=0, strokeStyle="black", startAngle=0,endAngle=Math.PI*2) => {
    ctx.save();

    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
}

export const drawLine = (ctx, x1, x2, y1, y2, lineWidth=1, strokeStyle="black") => {
    ctx.save();

    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(x1, x2);
    ctx.lineTo(y1, y2);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}