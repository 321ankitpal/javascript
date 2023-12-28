// functions and method

// block of code that perform a specific task , can be invoked whenever needed

function myfunction(msg){ //=> msg it is type of input called as parameter
 console.log(msg)
}
myfunction(" i love jesus")// argument

function sum(a,b){ // a,b are local variable of function ,  it mean block scope  
    s=a+b
    return s;
}

let val=sum(3,4);
console.log(val)

// return ke baad function me aap koi bhi code likhe vo excute nahi hota hai

// arrow function is compact written type of a function

const mul=  (a,b)=>{
 console.log(a*b);
}

// practice q take string find vowels on it

// function countvow(str){
//     let count=0
//     for(let char of str){
//         if(char==="a"|| char==="e"||char==="i"|| char==="o"||char ==="u"){
//             count=count+1;
          
//         }
//     }
//     return count;
// }
// let vowels=countvow("jesusiloveu")
// console.log(vowels)

let vowels=(str)=>{
    let count=0;
  for(let char of str){
    if(char==="a"|| char==="e"||char==="i"|| char==="o"||char ==="u"){
  count++;

    }
  }
  console.log(count);
}
 vowels("apnacollege");


// for each loop in array => method which is used to only array not on string
// arr.forEach(callbackFunction)
// callbackFunction : here ,it is a function to excute for each element in the array
// a callback is function passsed as an argument to another function

let arr=[1,2,3,4,5,6]
//  arr.forEach(function myfunc(val){
// console.log(val)
//  })

 arr.forEach((val,idx,arr)=>{
console.log(val,idx,arr);
 })

//  heighr order function is type of function which take other function as parameter and also return function

// practice q find sqaure of each array value

// let square=[1,2,3,4,5,6,7]

// square.forEach((val)=>{
//   console.log(val**2)
   
// }

// )

function square(x){
  console.log( x**2);


}
let x=[1,2,3,4,5,6,7]
 

x.forEach( square)


// map array method
// create a new array with the result of some operation . this value its callback return are used  to form new array
   
// arr.map (callbackfnx(value,index,array))
// ex


let newarr=arr.map((val)=>{
      return val*2
})

// filter array method
// creates a new array of element that give true for a condition/filter
// eg: for all even elements

let newarr1= arr.filter((val)=>{
    return val%2==0;
})

// reduce array method
// perform some operation and reduces  the array to a single value .it returns that single value

let array=[,2,3,8,9]
 const output=array.reduce((res,curr)=>{
    return res>curr ? curr:res;
 })
 console.log(output)