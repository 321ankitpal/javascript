// events

// the change in the state of an object is know as an event
// events are fired to notify code of "interesting changes " that may affect code excutation.

// mouse events(click, double click etc)
// keyboard events(keypress,keyup,keydown)
// form events(submit etc)
// print event and many more

let newdiv=document.querySelector("div")

newdiv.mouseover=()=>{
    console.log("mouse is over once") // it is simple event handing
}


// event object => it is specisl type of object that have details about the event
// all event handler have access to the event objects properties and method


// let newButton=document.querySelector("button")

// newButton.onclick=(evt)=>{  // it is event object
//     console.log(evt); 
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX ,evt.clientY)

// }

// event  Listener

// it check every instant time jaise hi event call hota hai vaise hi callback function chl jata hi
// main adv hai iska ki ak sath bhot sara code likh sakte hai

// node.addEventListener(event , callback )
// node.removeEventListener(event,callback)

let newButton=document.querySelector("button")

newButton.addEventListener("click",()=>{
    console.log(" one time clicked")

})

newButton.addEventListener("click",()=>{
    console.log(" one time clicked 2") //it can be not overide that previous event of that element

})

let handler3=()=>{
    console.log(" one time clicked 3")
}

newButton.addEventListener("click",handler3);

newButton.removeEventListener("click",handler3);






