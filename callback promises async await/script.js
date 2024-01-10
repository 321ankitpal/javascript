// async await>> promise chains >>callback hell

// synchronous
// synchronous means the code runs in a particular sequence of instruction gives in the program . each instruction waits for the previous instruction to complete its execution
// asynchronous
// due to synchronous programming ,sonmetimes impinstruction get blacked due to some previous instruction ,which causes a delay in the ui.
// asynchronous code excutation allows to excute next instructions immediately and doesnt block the flow

// callback
// a callback iis function passed as an  argument to another function
// kishi function ke ander jabh koi function as argument pass kiya jaye to ushe callback kehte hai
// callback ko hum without paranthesis pass karte hai as argument

let sum = (a, b) => {
  console.log(a + b)

}

let calcuator = (a, b, sum) => {
  sum(a, b)
  console.log(a * b)

}

calcuator(2, 4, sum);


// callback Hell
// callback hell : nested callback stacked below one another forming a pyramid structure .(pyramid of doom)
// this style of programming becomes difficult to understand and manages
// let getnextdata=()=>{

// }



// function getdata(dataid,getnextdata){
//   setTimeout(()=>{
//     console.log(dataid);
//   if(getnextdata){
//       getnextdata();
//   }
//   },2000)

// }
// // callback hell it is so complex code which is not i=easy reasonable

// getdata(1,()=>{
//   getdata(2,()=>{
//     getdata(3,()=>{
//       getdata(4)

//   })})})


// to tacle the callback hell problem we use promises

// promises=> is for "eventual" completion of task .it is an object in js

// it is a solution to callback hell

// resolve and reject callbback provided by js
// there is two condition 1> pending 2> fullfiled 3> rejected


// let promise = new Promise((resolve,reject) => {
//   console.log("praise the lord")
//   resolve("promise is resolve")

// })

// let promise=getdata(123);

// function getdata(dataid,getnextdata){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("sucess our work")
//       console.log("dataid");
//     if(getnextdata){
//         getnextdata();
//     }

//   },10000)}

//   )}



// function asyncfunc1(){
//   return new Promise((resolve,rreject)=>{
//   setTimeout(()=>{
//     console.log("data1")

//     resolve("suuccess the excutation")
//   },4000)
//   })
// }
// function asyncfunc(){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data2")

//     resolve("suuccess the excutation")
//   },4000)
//   })
// }

// console.log("fetching the data");
// let p1=asyncfunc1();
// p1.then((res)=>{
//   console.log("fetching data 2")
//   let p2=asyncfunc();
//   p2.then((res)=>{
//     console.log(res)
//   })
// })


// replacce thhe callback hell with promises

function getdata(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sucess our work")
      console.log(dataid);


    }, 4000)
  }

  )
}
console.log("fetching the data")


getdata(1).then(() => {
  return getdata(2)
})
  .then(() => {
    return getdata(3)
  })
  .then(() => {
    return getdata(4)
  })
  .then(() => {
    return getdata(5)
  })


// async await 
// async function always returns a promise
// async function myfunc(){}

// await pauses the excutation of its surrounding async function untill the promise is settled

// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("wheather data")
//       resolve("success")
//     },3000)
//   })
// }
// async function wheather(){
//   await api();
//   await api();

// };

// iife=>  IIFE IS FUNCTION THAT IS CALLED IMMEDIATELY AS SOON AS IT IS DEFINED
// yeh ak hi baar call kar sakte hai

// {function()

// }();


function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wheather data")
      resolve("success")
    }, 3000)
  })
}
(async function () {
  await api();
  await api();

})();





