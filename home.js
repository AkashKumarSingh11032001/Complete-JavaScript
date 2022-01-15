console.log("Hello World!");

//variable
var b = 'smoothie';
console.log(b);

var sum = 50;
console.log(sum);

// // getting html id and changing in js
// var age = prompt("You'r age: ");
// document.getElementById('abcd').innerHTML = age;


//Number is js
var num1 = 5.7;
console.log(80*98);

//Function is
function fun(){
    console.log("this is fun");
}
// fun();


function fun1(){
    var name = prompt("Name: ");
    console.log("Hello " + name);
}
// fun1();

function arthematics(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
// arthematics(50,5)

//  Loops
    // --> While Loops

var num = 0;
while(num < 10){
    num+=1;
    console.log(num);
}

    // --> For loops
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Datatype

let age = 50;
let namex = "Akash Kumar Singh";
let name = {first:'akash',last:'singh'};
let truth = false;
let groc = ['a', 'b', 'c', 'd', 'e', 'd'];
let random; //undefined
let nothing = null;


// string in JS
let fruit = 'apple';
let morefruit = 'apple\nbanana\nfuck';
console.log(morefruit);
console.log(fruit.length);
console.log(fruit.indexOf('pp'));
console.log(fruit.slice(2,4));
console.log(fruit.replace('pp','xx'));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.toUpperCase(fruit));
console.log(fruit[2]);
console.log(fruit.split('')); // split by charater space,comma etc

