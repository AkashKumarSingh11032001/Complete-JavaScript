// premitive vs refernce data type

// clone array
let arr = ['a','b'];
let arr2 = [...arr]; //copying arr to arr2 [spread opr]
let arr3 = [...arr, "c","d"];

console.log(arr);
console.log(arr2);
console.log(arr3);

// For-Of Loop ---> give element directly
const frus = ['a','b','c','d']
for(let fru of frus){
    console.log(fru);
}

// For-IN Loop ---> give index
const frus = ['a','b','c','d']
for(let index in frus){
    console.log(index);
}