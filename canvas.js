let ctx;
//import {eventhandler} from "./Classes/EventClasses.js";
onload = ()=>
{
          const canvas= document.querySelector("#mygame");
          ctx=canvas.getContext('2d');
          var car=new Image();
          var car1=new Image();
          var car2=new Image();
          var car3=new Image();
          var road=new Image();
          var left=new Image();
          var right=new Image();
          var roadline1=new Image();
          var roadline2=new Image();
          var roadline3=new Image();
          var xcar1=320;
          var ycar1=100;

          var xcar2=330;
          
          var ycar2=250;
        var xcar3=440;
        var ycar3=360;
          var carH=92;
          var carW=48;
          let x = 350;
          let y = 400;
          let speed = 5;
          let dir = 0;
          let mod = 0;
          var flag=0;
          let y1;
          var xroadline=375;
          var yroadline=0;
          var yroadline1=0;
          var yroadline1=150;
          var yroadline2=300;

        car.addEventListener('load',()=>
        {
          var event =new  eventhandler();
            drow();
            window.addEventListener('keydown', keyHandler);
            window.addEventListener('keyup',keyHandler);

        });
          road.src = "http://opengameart.org/sites/default/files/background-1_0.png";
          car.src="https://clipartart.com/images/aerial-view-of-car-clipart-3.png";
          car1.src="https://pluspng.com/img-png/car-png-top-view-png-hatchback-car-top-view-png-clipart-1092.png";
          car2.src="http://www.newdesignfile.com/postpic/2014/10/car-icon-top-view-clip-art_76716.png";
          car3.src="http://www.freeiconspng.com/uploads/blue-top-car-png-21.png";
          roadline1.src="http://www.pngall.com/wp-content/uploads/5/Vertical-Line-PNG-Clipart.png";
          roadline2.src="http://www.pngall.com/wp-content/uploads/5/Vertical-Line-PNG-Clipart.png";
          
          left.src="3.jpeg";
          right.src="2.jpeg";
          var cars=document.createElement("class");
          cars.setAttribute()
          function drow()
          {
            
            const random = (min = 0, max = 50) => 
              {
                    let num = Math.random() * (max - min) + min;
                
                    return Math.round(num);
              };

              
            ycar1-=1;
            ycar2-=1;
            ycar3-=1;
            y1-=1;
            
            if(ycar1<=-carH)
            {
              ycar1=600;
              xcar1=random(300, 440);
            }
            if(ycar2<=-carH)
            {
              ycar2=600;
              xcar2=random(300, 440);
            }
            if(ycar3<=-carH)
            {
              ycar3=600;
              xcar3=random(300, 440);
            }
            
        
                if(car.complete)
                {
                  
                  y += speed * dir;
                  
                  if(x>300 && x<=440 && flag==0)
                  {
                    
                      x += speed * mod;
                      if(x>=440)
                    {
                      x=440;
                    }
                    if(x<=305)
                    {
                      x=305;
                    }
                   
                      
                  }
                // y1+=1;
                  yroadline+=5;
                  yroadline1+=5;
                  if(yroadline1>=600)
                  {
                     yroadline1=0;
                   
                  }
                  if(yroadline2>=600)
                  {
                     yroadline2=0;
                   
                  }
                  
                  if(yroadline>=600)
                  {
                     yroadline=0;
                    // ctx.drawImage(roadline1,xroadline,yroadline,50,70);
                  }
                 
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  ctx.drawImage(roadline2,xroadline,yroadline+300,50,70);
                  ctx.drawImage(roadline1,xroadline,yroadline,50,70);
                  ctx.drawImage(roadline1,xroadline,yroadline1,50,70);
                  ctx.drawImage(roadline2,xroadline,yroadline1,50,70);
                //  ctx.appendChild(roadline);
                
               
                  ctx.drawImage(car, x, y, carW, carH);
                  ctx.drawImage(car1, xcar1,ycar1,  carW, carH);
                  ctx.drawImage(car2, xcar2,ycar2,  carW, carH);
                  ctx.drawImage(car3, xcar3,ycar3,  carW, carH);
                 ctx.drawImage(left,0,0,305,894);
                  ctx.drawImage(right,305+180,0,305,894);
                  ctx.drawImage(road, 310, y1, 180, 894);
              }
          
              
              var carrect =car.getBoundingClientRect();
            var car1rect=car1.getBoundingClientRect();
            console.log(car1rect.bottom);
            if((carrect.bottom < car1rect.bottom) || 
              (carrect.top > car1rect.bottom) || 
              (carrect.right < car1rect.left )||
               (car1rect.left > car1rect.right)
              )
                  {
                    alert("collapsed");
                    
                  }
                  requestAnimationFrame(drow);
            }
var roadline=document.createElement("div");
roadline.setAttribute("class", 'roadline');
canvas.appendChild(roadline);
//document.querySelector("#main").appendChild(roadline);
function keyHandler(e)
{
  // console.log("Event ", e);
  switch (e.type)
   {
      case 'keydown':
          switch(e.code){
              case 'KeyW':
              case 'ArrowUp':
                  dir = -1;
                  break;
              case 'KeyS':
              case 'ArrowDown':
                  dir = 1;
                  break;
              case 'KeyA':
              case 'ArrowLeft':
                  mod = -1;
                  break;
              case 'KeyD':
              case 'ArrowRight':
                  mod = 1;
                  break;
          }
          break;
      case 'keyup':
          switch(e.code){
              case 'KeyW':
              case 'ArrowUp':
              case 'KeyS':
              case 'ArrowDown':
                  dir = 0;
                  break;
              case 'KeyA':
              case 'ArrowLeft':
              case 'KeyD':
              case 'ArrowRight':
                  mod = 0;
                  break;
          }
          break;
        
      }
    }
  
};
