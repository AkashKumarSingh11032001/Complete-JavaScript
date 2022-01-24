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