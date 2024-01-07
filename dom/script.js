/* window object represents an open window in a browser . it is browser object (not javascript) and is   
automatically created b browser*/

// it is a global object with lots of properties amd methods.
// javascript most of the several method which intialised by browser 

// console.log is used for printing the elements as its 
// console.dir is used for printing the properties and methods of the element

// dom=>dom is  document hai hamare html tag ka and uske saare main tag node as object hai aur jaise web page reload 
// hota hai vaise hi dom ban jjata hai , html ko js me handle karne ka tarika hai dom 


// three type to select the html element in javascript


// let ank=document.getElementById("hero")
// console.dir(ank)
// console.dir(ank.innerText)
// console.dir(ank.innerHTML)
// console.dir(ank.textContent)

// tagName:return tag for element nodes
// innerText:returns the text content of the element 
// innerHTML:return the plain text or html contents in the element 
// textContent:return texual content even for hidden  element

let everyone=document.getElementsByClassName("even")


// document.getElementsByTagName("#hero")
// document.querySelector=> select first element
// document.querySelectorAll=> it select all element by indexing
// queryselector return nodelist

//parent ,child,sibling

// node firstchild,last child,children,
// in dom tree three type  node text node ,comment,elements


// practice  append one thing by javascript

// let mycon=document.getElementById("concat")
 // console.dir(mycon.innerText)
// mycon.innerText=mycon.innerText+ "from apna college";

// console.log(document.querySelector("div").firstChild.ELEMENT_NODE)
// console.log(document.querySelector("div").lastChild)
// document.querySelector("div").children

// let divs=document.querySelectorAll(".ankit");
// let idx=1;
// for(let div of divs){
//       div.innerText=`new unique value ${idx}`
// }

let div=document.querySelector("div")
console.log(div)

let para= div.getAttribute("class");
console.log(para);

let manipulation=div.setAttribute("class" , "head")
console.log(manipulation)


// node.style.bgcolor

// append child
// remove child

// dom manipulation

let el=document.createElement("button")
el.innerText="click me";

// let body=document.querySelector("body")
// body.append(el);//add the end of the node(inside)


// there also several method which for insert the element at different place
// node.prepend(el)=>add the start of the node(inside)
// node.before(el)=> add before the node(outside)
// node.after(el)=> adds after the node(outside)


// body.remove(el);


// practice queastion

let newButton=document.createElement("button")

newButton.innerText="click me"

newButton.style.backgroundColor="red";

newButton.style.color="white";

let body=document.querySelector("body")

body.prepend(newButton);




