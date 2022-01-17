//  DataType

// string "akash"
// number 2,4,5,6
// boolens
// undefined
// null
// BigInt
// Symbol

let age = 5;
let nam = "akash";

// identify the type of dataType
console.log(typeof nam);

// conver number to strings {trick}
age += "";
console.log(typeof age);

// convert string to Number {trick}
let st = "58"
st = +st;
console.log(typeof st);