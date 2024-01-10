let student = {
    name: "ankit",  //state 
    Age: 21,
    marks: 91,
    branch: "ds",
    print: function () {  //method
        ("marks =", this.marks); //=> mean student.marks another method is student["marks"]
    },

}
console.log(student["marks"]);

// prototype in js

// a javascript object is an entity having state and behavior (prototype and method).
// js object have a special property called prototype .
// we can set prototype using __prototype__

// if object and prototype have same method ,objects method will be used
// object ke andar object by default aa rahi hai ush by default object ko prototype kehte hai jisme prop and method hata hai

// hum apne khud ke bhi prototype banaa skate hai ex like niche


const emi = {
    calctax() {
        console.log("tax rate is 10%")

    },

}
const ankit = {
    salary: 100000,
    calctax() {
        console.log("tax rate is 20%")// most prefrence

    },
}

ankit.__prototype__ = emi


// classes in js=> blueprint
// class is program code template for creating objects.
// those objects will have some state (variable ) and some behaviour(function) inside it.
// class is single template hai jisse hum bhot saree object bana sakte hai
// refrences of object hum dusra object ka adress acess kar sakt

// this la matlabs set as individually shirf khud ke liye vo object set kar sakta hai ush value ko
// this ka istemaal hum variable banane ke time pe karte hota hai

// class myclass {
//     constructor() {
//         mymethod(){

//         }
//     }
// }
// let myobj = new myclass();

// constructor() method is 1> automatically invoked by new 2> initilise object


class toytacar {
    constructor(brand,milage){
        console.log("creating new object");
        this.brand=brand;
        this.milage=milage;
    }
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    setbrand(brand) {
        this.brandname = brand;// brandname mean is class se banan wale sabhi object ki property hai and brand is like argument hai ,
        // ye dono ka name same bhi ho sakta hai

    }
}
let fortunar = new toytacar();
fortunar.setbrand("ankit",10);
let lexux = new toytacar();


// inheritance in js
// inheritance is passing down properties and method from parent class to child class
//if the child and parent methid will be same method than child method will be use(method overriding)

class parent{
 hello(){
    console.log("hello")
 }
}
class  child extends parent{

}
let obj = new child();

class person{
    eat(){
        console.log("i can eat")
    }
    sleep(){
        console.log("i can sleep")
    }
}

class engineer extends person{
    work(){
        console.log("complete our work on time")
    }
}
let engobj=new engineer;

// superkeyword
// the super keyword is used to call constructor of its parent class to acess the parents properties and methods

// super(args)
// super.parentmethod(args)

class human{
    constructor(name,species){
console.log("this is human constructor")
this.name=name;
this.species=species;

    }
    age(){
        console.log("i ahve age also")
    }
}

class doctor extends human{
    constructor(name,branch,species){
        super(name,species) //to invoke parent class constructor
        // ishi bhi chij ko apne parent class me send karne ke liye hum log super ke ander ushe declared karke bhejte hai
        this.name=name;
        this.branch=branch


    }
    work(){
        super.eat()
        console.log("i done my work")
    }
}
let newobj=new doctor("aayush","homo","biology")

// practice question in which you are creating one website for your college .in which create class user with 2 properties first name and second
// email and also create one method view data .
 let data="i love you jesus"
class user{
    constructor(name, email){
 this.name=name;
 this.email=email;

    }
    viewdata(){
        console.log(data)
    }
}
// let user1=new user("rohit","321ankitpla@gmail.com")
// let teacher=new user("arati","vawvavw@gmail.com")

class admin extends user{
 setdata(){
    data="new some data"
 }
}
let admin1=new admin()


// error handling

let a=5;
let b=4;

console.log(a+b)
console.log(a+b)
console.log(a+b)
console.log(a+b)
try{
console.log(a+c)

}catch(err){
    console.log(err)
}
console.log(a-b)
console.log(a-b)
console.log(a-b)
console.log(a-b)
console.log(a-b)


