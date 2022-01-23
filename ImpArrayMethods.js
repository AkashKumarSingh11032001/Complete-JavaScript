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