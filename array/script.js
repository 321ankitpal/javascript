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