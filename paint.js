var dragging = false;
var selectBrush=false;
var selectLine=false;
var selectRect=false;
var selectPant=false;
var selectcircle=false;
var canvas;
var snapshot;

function drawBrush(event){
    if(dragging){
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#ACD3ED";
        let position = getCanvasCoordinates(event);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
    }

   
}

function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;
    return {x: x, y: y};
}

function takeSnapshot() {
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot() {
    if(snapshot){
        ctx.putImageData(snapshot, 0, 0);
    }
    
}


function drawLine(position) {
    if(dragging){
        ctx.beginPath();
        ctx.moveTo(dragStartLocation.x, dragStartLocation.y);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
        ctx.closePath();
    }
   
}

function drawRect(position) {
    if(dragging){
        ctx.beginPath();
        ctx.rect(dragStartLocation.x, dragStartLocation.y, position.x-dragStartLocation.x, position.y-dragStartLocation.y);
        ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
        ctx.stroke();
        ctx.closePath();
    }
   
}

function drawCircle(position) {
    if (dragging){
        //console.log("drwa pant")
    ctx.beginPath();
  
    ctx.arc(position.x, position.y,position.x, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}
  
  }

function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    if (selectBrush==true){
        ctx.moveTo(dragStartLocation.x, dragStartLocation.y);
    } else {
        takeSnapshot();
    }
    
}

function drag(event) {
    var position;
    if (dragging === true) {
       
        if (selectBrush==true){
            drawBrush(event)
         } else {
            restoreSnapshot();
            position = getCanvasCoordinates(event);
         }
         if (selectLine==true){
            drawLine(position);
         }
         if(selectcircle == true){
             drawCircle(position);
         }
         if(selectRect == true){
            drawRect(position);
         }
    }
}

function dragStop(event) {
    dragging = false;
    
}

function init() {
    canvas = document.getElementById("paint");
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    let brush= document.getElementById("brush");
    let line= document.getElementById("line");
    let rect= document.getElementById("rect");
   let circle=document.getElementById("circle")

    brush.addEventListener('click',function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        selectBrush=true;
        selectLine=false;
        selectRect=false;
        selectcircle=false;
        window.console.log('brush'+selectBrush);
    });

    line.addEventListener('click',function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        selectBrush=false;
        selectLine=true;
        selectRect=false;
        selectcircle=false;
        window.console.log('relinet'+selectLine);
    });

   
    rect.addEventListener('click',function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        selectBrush=false;
        selectLine=false;
        selectRect=true;
        selectcircle=false;
        window.console.log('rect'+selectRect);
    });
    circle.addEventListener('click',function()
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            selectBrush=false;
            selectLine=false;
            selectRect=false;
            selectcircle=true;
        }
    );
    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}

window.addEventListener('load', init, false);
