//  Array methods

// foreach
// reduce
// map
// filter


// FOREACH
const num = [4,2,6,5,9,,2]
function sum(n,i){
    console.log(i + ":" + n*2);
}

num.forEach(sum);

// or
num.forEach(function(n){
    console.log(n*2);
})


// *************
// MAP : create new array after applied computation
const numbers = [3,4,5,6,7];
function square(num){
    return num*num;
}

// number.forEach(square);
const newSquare = numbers.map(square);
console.log(newSquare)

// or
const updatesq = numbers.map(function(num){
    return num*num;
})
console.log(updatesq)

//  FILTERS : store the data in an array only if the mentioned condition return true only.

const numbers = [3,4,5,6,7];
const isEven = function(num){
    return num%2===0;
}
const evenNum = numbers.filter(isEven);
console.log(evenNum);

// **************
//  SORTING
const number = [5,9,6,1,2,,8,3];
number.sort();
console.log(number);
number.sort((a,b)=>{return b>a});  
console.log(number);

// ***********
//  Find 
 
const arr = ["abc","defg","hijkl"];

function isLength(str) {
    return str.length === 3;
}

const ans = arr.find(isLength);
console.log(ans);

// ***********
// Every
// every : it will return true only if 'all' element statify the mentioned condition
const numbers = [2,4,6,8,10];

const val = numbers.every((number)=>number%2===0);
console.log(val);

// ***********
// Some
// some : it will return true only if 'any' element statify the mentioned condition
const numbers = [2,4,6,8,11];

const val = numbers.some((number)=>number%2===0);
console.log(val);


// ***********
// fill
//  fill the enitire array with some predifent value

const myArray = new Array(10).fill(0);
console.log(myArray);

// fille can be used to fill some part of array with some value
// fill(value,start,end)
const arr = [1,2,3,4,5,6,7,8,9];
arr.fill(0,2,5);
console.log(arr);


// *************
//  SPLICES 
//  (start,delete,insert)

const arr = ["a","b","c"];
console.log(arr);
// delete
const delitem = arr.splice(1,1);
console.log(delitem);
console.log(arr);
// insert
arr.splice(1,0,"b");
console.log(arr);

// using both insert and delete
arr.splice(1,2,"d","e");
console.log(arr);

