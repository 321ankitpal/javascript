let box=document.querySelectorAll(".box")
let reset=document.querySelector(".btn")
let msg=document.querySelector(".msg")
let msgcon=document.querySelector(".msg-container")


let turno=0;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restgame=()=>{
   turno=true;
   enabledbox();
   msgcon.classList.add("hide");
}
box.forEach((Element)=>{
   Element.addEventListener("click",()=>{
    console.log("box was clicked")
 if(turno==0){
    Element.innerText="o";
    turno=1;
 }else{
    Element.innerText="x"
    turno=0;
 }
 Element.disabled =true;
 checkwinner();
   })
})




const disabledbox =()=>{
   for(let boxes of box){
      boxes.disabled=true;
      

   }
}
const enabledbox =()=>{
   for(let boxes of box){
      boxes.disabled=false;
      boxes.innerText=""

    
   }
}
const gwinner=(winner)=>{
   msg.innerText=`congratulation winner is ${winner}`
   msgcon.classList.remove("hide")
   disabledbox()
}

const checkwinner = () => {
    for(let pattern of win){
      console.log(box[pattern[0]].innerText)
        let optn1=box[pattern[0]].innerText
         let optn2 =box[pattern[1]].innerText
         let optn3=box[pattern[2]].innerText

         if (optn1 !="" && optn2 !="" && optn3 !=""){
            if(optn1 == optn2 && optn2 == optn3){
                gwinner(optn1);

            }
         }
        
    }
}

reset.addEventListener("click",restgame);
   
