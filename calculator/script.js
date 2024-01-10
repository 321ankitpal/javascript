let string="";

let button=document.querySelectorAll(".btn");
let text=document.querySelector(".textb");

button.forEach((Element)=>{
    Element.addEventListener("click",(e)=>{
     
        if(e.target.value=="<-"){
           text.value=text.value.slice(0,-1)
        }

      

       else if(e.target.innerText=="C"){
             string=""
             text.value=string;
            

        }
       else if(e.target.innerText== "="){
            string=eval(string)
            text.value=string;
        }else{
            console.log(e.target)
          string=string + e.target.innerText;
          text.value=string;
        }
          
    } )       
    
})