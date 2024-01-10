// FETCH API

// the fetch api provides an interface for fetching (sending/recieving) resources

// it uses request and response object

// the fetch( ) method is used to fetch a resources (data)

// let promise= fetch(url,[Option])

// api => application programming interface

// let url="https://cat-fact.herokuapp.com/facts"
//  let facts= document.querySelector("#fact")
// let button=document.querySelector(".btn")



// const getfacts= async()=>{
//     let promise= await fetch(url);
//     console.log(promise)
//     let data =await promise.json();
//     console.log(data[0].text);
//      facts.innerText= data[0].text;
// }

// function getfacts(){
//     fetch(url).then((response)=>{
// return response.json();
//       }).then((data)=>{
//         console.log(data)
//         facts.innerText=data[2].text
//       })
// }


// button.addEventListener("click",getfacts)

// after the request the api we  collect some response with help of fetch ,but that data is not same  actual data,which  i want
// that point understand

// ajax==> pastly use
// json
// json()
// there is three form of data format 

// ajax is asynchronous js and xml
// json is javascript object notation
// json() method retturn a second promise that resolve with the result of parsing the response body text as json .
//  (input is json ,output is js object)

//first fetch the url
// change this is url into json reaadble format


// request and response=> get post delete patch etc
// response status code=>404,200,504 etc
// http response header also contain details about the responses
// ,such as content type ,http status code etc.


// sending post request => option how to chnage homework
// usd/inr.json

let base="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


let dropdowns=document.querySelectorAll(".dropdown select")

let button=document.querySelector(".btn")
let fromcurr=document.querySelector(".from select")
let tocurr= document.querySelector(".to select")
let Msg=document.querySelector(".para")
let i=0;
for(let select of dropdowns){
    for(cutrycode in countryList ){

    
        let newOption=document.createElement("option")
        newOption.innerText=cutrycode
        newOption.value=cutrycode
        if(select.name==="from"&& cutrycode==="USD"){
            newOption.selected="selected"
        }
        if(select.name==="to"&& cutrycode==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target)


    })}

    const updateflag=(element)=>{
let cutrycode=element.value;
let country=countryList[cutrycode]
let newsrc=src=`https://flagsapi.com/${country}/flat/64.png`
let img=element.parentElement.querySelector("img")
img.src=newsrc;
    }

    button.addEventListener("click", async(evt)=>{
        evt.preventDefault();
        let amount=document.querySelector(".amount input")
        let newamount=amount.value
        if(newamount==""|| newamount==1){
            newamount=1;
            amount.value="1"

        }
        const URL =`${base}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
        // console.log(fromcurr.value,tocurr.value)
        let response=await fetch(URL)
    
        let data=await response.json();
        let rate=data[tocurr.value.toLowerCase()];
        let finalamt=newamount*rate;
        Msg.innerText=`${newamount}${fromcurr.value}=${finalamt}${tocurr.value}`;
     })
   

