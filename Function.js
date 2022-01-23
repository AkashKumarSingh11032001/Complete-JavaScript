// Function declaration

function sing(){
    console.log("Fuck the world! everyday")
}

sing();

// 2nd type using => opr
// function expression
const iseven = (number) => {
    return number%2===0;
}
iseven(4);

// ***************************
// param destruction
//  object + react

const person = {
    name : "akash",
    age : 21,
}

// without destructing
function detail(obj){
    console.log(obj.name);
    console.log(obj.age);
}

// with destruction 
function detail2({name,age}){
    console.log(name);
    console.log(age);
}

detail(person);
detail2(person);


// function callbacks
// ---> function calling another function as passed in parameter

// function return function
// ---> function able to return the fuction that was made inside that function