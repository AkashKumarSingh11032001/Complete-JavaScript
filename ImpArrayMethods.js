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

