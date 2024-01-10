console.log("apna college")
// varriable is container of the data
// memory location of the address is particular assign  nAME is called as varible name

 var Name="tony stark"

// javascript is dynamic type language
// equal sign is called assignment operator it mean that left side value asign to right side value
// javascript  is case senstivity it mean capital A andd small a is different
// only letter ,digit ,underscore,and $ is allowed for intialization of variable
// reserved word is not a variable name ,and space is not allowed, and first letter not be digit
// we always used camel case for writing words 

// let ,cons,var
//  var variable can be re declared and updated . a global scope varible
// let variable can not be re declared but can be updated . it is block scope variable
// cons varible can not be re declared and updated . it is block scope variable

// datatypes in javascript

// number, string,boolean, null ,undefined,bigint,symbol=> premitive

// object=>non premitive

// typeof is used to find which type of datatype it is?

let x=BigInt("123")
let y=Symbol("hello")

let ankit;
// undefined

// object is collection of value
// it is key value pair like structure

const student={
    name :"anki",
    age:21,
    isPass:true
}

// for accesing key value two method 1> obj.key 2>obj["key"]

console.log(student.age)

console.log(student["age"])

//  how to updated the value of object

 student["age"]=student["age"] +1
 student["name"]="jesus"

//  cons object ho to hum key value ko replace kae sakte hai

// object=> Array,function

// "123"+ 2 => string
// "abcd" + 3 => string

const profile={
    username:"ankit",
    isFllow: true,
    posts:195,
    follwers:596,
    
}

console.log(typeof profile["isfollow"]);//=> boolean
console.log(typeof profile["username"]);//=> string

let score="20";
 console.log(typeof score)


 let value=Number(score);
 console.log(typeof value)

//  same as that you can typecast  all datatype  write first letter capital of that datatypes

let isLogin="ankit";

let booleanis=Boolean(isLogin);
 console.log(typeof booleanis );
 


