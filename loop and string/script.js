// lops in js 
// loop excute the piece of code again and again

// for loop

// for(let i=1;i<=5;i++){
//     console.log("jesus ilove u")
// }

//  sum of first 5 num
let sum =0;
let n=prompt("enter the number")
for(let i=1;i<=n;i++){
    // let sum= 0;
    sum=sum +i;

   
}
console.log(sum)

// while loop

// let i=1;
// while(i<=5){
//     console.log("jesus");
//     i++;
// }

// do while loop
let i=1;
do{
  console.log("jesus")
  i++;
}while(i<=5);

// for of loop => use for iterating array and string

// for in loop => use for iterating array and object key

let str1="ankit pal"
for(let val of str1){
    console.log(val)
}

let student ={
 Name:"rahul kumar",
 age:20,
 cgpa:7.5,
 isPass:true,

}

for (let key in student){
    console.log("key=",key,"value=",student[key]);
}

// question print even number

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
  
}

// question create game number and check with user number

// let gameNumber=25;
// let userNum=prompt("enter the game number")

// while(gameNumber!=userNum){
//  userNum= prompt("please guess next")
// }
// console.log("congratulation ou win the game")



// STRINGS IN JS 
// string is sequential character that represent the string

//  create string 
 let yourName = "ankit"
 let your='jesus'

//  string length

let str='apna college'
console.log(str.length);

// string indices

console.log(str[0]);
console.log(str[3])


// template literals in js=> they way to have embeded expression in strings

// `this is ${expression} template literals`

let obj={
    item:'pen',
    price:10
}

console.log(`the cost of ${obj["item"]} is ${obj.price} rupees `)

// string interpolation=> to create string by doing substitution of placeholders or variable

// escape character => it is provide next line of output symbol  /n  (just like html br tag)
// /t => provide tab space between string


// string method or function=> it is built in function to manipulate a string
// every string method will not be changed actual string but it making new virtual string same like that and change it
// javascript string is immutable mean not be changed

// str.toUpperCase=> making capital letter character
// str.toLowerCase=> making small letter character

// str.trim => removing whitespaces

let str2='ankitpal'

console.log(str2.slice(1,4)) //last number exclusive

console.log(str.concat(str2))
console.log(str+ str2)

console.log(str.replace("ankit" , "jesus"))

/* there is also one thing that is replaceAll it mean replace sevral time ,it mean howmany times ankit repeat that
much time replace with jesus*/

console.log(str2.charAt(2)) // searching of character

// practice q create username with help of prompt name ,username formate which is start with @ and fullname last with 

let Name=prompt("enter the name")

 let username="@" .concat(Name).concat(Name.length)

console.log(username)