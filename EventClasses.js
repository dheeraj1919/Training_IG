var dir = 0;
var mod = 0;
export class eventhandler
{
     drow()
{
  if(car.complete) {
    x += speed * mod;
    y += speed * dir;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1, 400 - 90 , 0, 180, 894);
    ctx.drawImage(car, x, y, carW, carH);
}
  requestAnimationFrame(drow);
}
    

};