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

// array destructing
const a = [1,2,3];
// let a1 = a[0];
// let b1 = a[1];

// direct vaal
let [a1,b1] =  a;
console.log(a1);
console.log(b1);


let name = ['ab','cd','ef','gh','ij'];
let [n1,n2,...newName] = name; // n1->ab || n2->cd || rest in newName array
// let [n1, , , ,n2] = name; //n1-> ab || n2 -> ij
console.log(n1);
console.log(n2);
console.log(newName)