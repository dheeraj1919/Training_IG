var input=document.getElementById("myInput");
var output1 =document.getElementById("output");
 var btn=document.getElementById("btn");
 

btn.onclick= function () {

         let value=input.value;
       
        //console.log(value);

         if (value ) {
           
             localStorage.setItem(value,value);
             
             location.reload();
           
         } else {
             alert("nothing");
         }
     };
     // input and add button to the list
         for(let i=0;i<localStorage.length;i++)
         {
             var li = document.createElement("li");
             const inputValue = localStorage.key(i);
            var button1=document.createElement("Button");
            //var text=  document.createTextNode("");
             
             
             var t = document.createTextNode(inputValue);
             //button1.appendChild(text);
            //button1.appendChild(t);
             
             li.appendChild(t);
             li.appendChild(button1);
             if (inputValue === '') {
                 alert("You must write something!");
             } else {
                 output.appendChild(li);
             }
            
         }
    //   Remove when click on the delete button
             var list=document.getElementsByTagName("button");
         // console.log(list);
         
             for(var i=0;i<list.length;i++)
             {
                
                // console.log(list[i]);
                 list[i].addEventListener('click',function()
                 {
                    // console.log(c);
                   
                     var div = this.parentElement;
                        console.log(div.innerText);
                         localStorage.removeItem(div.innerText);
                         div.style.display = "none";
                 });
             }
             
                  //  LIST ITEM CHECKED  
         var list2 = document.querySelector('ul');
        
             list2.addEventListener('click', function(event) {
            
                 if (event.target.tagName === 'LI') {
                 event.target.classList.toggle('checked');
             
                 }
         });
