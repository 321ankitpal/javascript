// it is single line comment
// for doing multiple line in comment we can use /* and end with */
//written in comment is easy english sentence which is defined oue code easily

// operator in js => it is used for performing some operation on the data
//  A + B =C => here a,b,c  is operands , + is operator and whole are called as expression

// arthimetic opeartor

let a =5;
let b = 2;

console.log("a = ",a,"& b =",b)
console.log("a - b = " ,a-b)
console.log("a * b = " ,a*b)
console.log("a / b = " ,a/b)
console.log("a ** b = " ,a**b)
console.log("a % b = " ,a%b)


//  unary operator

// a-- and a++  post increment and  post decrement => next line me badhegi
// --a and ++a pre increment and pre decrement => print ke pahle hi badegi

console.log("a++ = " , a++)
console.log("a-- = " , a--)

console.log("++a = " , ++a)
console.log("--a = " , --a)

// assignment operator

// = ,+= ,-= , *= , %= ,**=

a += 4;// a= a+4
a -= 4;// a= a- 4
a *= 4;// a= a*4
a **= 4;// a=a^4
a %= 4;//a= a%4
a /= 4;//a= a/4

// comparison operator=> last ans will be true or false


// == , != ,=== , !==
// > ,>= ,< ,<=

// logical operator => it LAST ans will b also true or false

// &&=> logiccal and 
// ||=> logical or
// !=> logical not
// ^ => logical xor

let cond1= a>b;//true
let cond2= a<b;//false
console.log(cond1 && cond2)// false

// !(a<b)=> true



// CONDITIONAL STATEMENT
// to implement some condition on the code
// 1> if 2>if-else 3>else-if

let mode="dark"
let color;

// if (mode==dark){
//     color=black;
// }
// if(mode==light){
//     color=white;
// }
console.log(color);


// 2>
// let age=25;
// if(age>=18){
//     console.log("you can vote")

// }
// else{
//     console.log("you can not vote")
// }

let num =10;

if(num%2==0){
    console.log(  num," is even")

}
else{
    console.log(num," is odd")
}

// 3>
// if (mode=="dark"){
//     color="black";
// }
// else if(mode=="light"){
//     color="white";
// }else{
//     color="blue";
// }

// if (mode=="dark")console.log(mode)//shortcut jo use nahi hota hai

// TERNARY OPERATOR=> it is simpler or compact method of if else codition

// let age =20;
// let res=age>18 ? "adult":"not adult"

// let result =age<18?"not adult":"adult"


// console.log("result")

// also switch is other method of conditional statement

// get user input an dcheck number is multiple of 5

// let number=prompt("enter the number")

// if(number%5==0){
//     console.log(number,"is multiple of five")
// }
// else{
//     console.log(number,"is not multiple of five")
// }

// give score to student grade

let marks=prompt("enter the marks")
let grade;

if(marks<=100 && marks>=80){
    grade ="a"
}
else if(marks<=79 && marks>=70){
    grade ="b"
}else if(marks<=69  && marks>=60){
    grade ="c"
}
else if(marks<=59 && marks>=50){
    grade ="d"
}
else if(marks<=49 && marks>=0){
    grade ="f"
}
console.log(grade)