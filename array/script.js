// array is collection of different type  data type or same data type //array  

let marks=[1,2,3,4,55,6,7]
console.log(marks)
console.log(marks.length) // property

// array behave like object whre key is index and value is index value =>so intresting thing

// array indices
console.log(marks[2])
marks[2]=8;//array is mutable


// looping in array

let heroes=["ironman","thor","antman","spiderman","hulk","captain"]

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i])
}


// for off

for(let val of heroes){
    console.log(val)
}

// practice arry of marks find the average
let sum=0;
let mark=[85,97,44,37,76,60]

for (let i=0;i<mark.length;i++){
    sum= sum + mark[i]
}
let avg =sum/mark.length
console.log(`average of marks is ${avg}`)

// practice q 5 item find discount amount 10% off on every item

let item=[250,645,300,900,50]
let offer;

for(let i=0;i<item.length;i++){
  offer=item[i]/10
  item[i]=item[i]-offer
}
console.log(item)

// array method => function of array

// push()=> add to end ,changes original array
// pop()=>delete from end and return, changes original array
// toString()=>convert into string, changes a new array 

let food=['apple','banana','grapes','lichi']

food.push("chips","stoberry")

console.log(food)

let deleted=food.pop();
console.log(deleted)

console.log(food.toString());

// .concat()=> join multiple array and return result, changes on  create new array

preach=["ankit","aayush","aditya","rohit"]
quality=["speaker","quality","writer","louder"]

 console.log(preach.concat(quality))

//  unshift() => add the element on the strating,changes on original array
// shift() => delete the element on the starting,changes on original array

// slice()=>return a piece of the array, change on new create array
// slice(startidx,endidx)

console.log(preach.slice(1,3)); //last number is exclusiive

// splice()=> changes original array (add,remove,replace)
//   splice(startidx,delidx,new)

let arr1=[1,2,3,4,5,6,7,8]

arr1.splice(2,2,101,102)
console.log(arr1);

// arr1.splice(3);=> it is deleted element of after the index 3, work as slice


// practice q remove first ele ,add one thing ,addd amazon at end

company=["bloomberg","microsoft","uber","google","ibm","netflix"]

console.log(company.shift());
console.log(company);

company.splice(2,1,"ola");
console.log(company)

company.push("amazon")
console.log(company);