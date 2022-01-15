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

//  Arrays in JS

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
new_arr = new Array('a', 'b', 'c', 'd', 'e', 'e');
console.log(arr[3]);
arr['f'] = 'g';

for(let i = 0; i < arr.length; i++){

    console.log(arr[i]);
}

// array common methods
console.log(arr.join('*'));
console.log(arr.push('x'),arr);
console.log(arr.pop(),arr);
arr.shift(); //remove first element
arr.unshift('q'); //add element at first in an arry

let veg = ['x','y','z'];
let fru = ['p','q','r'];
let all = fru.concat(veg);
console.log(all);
console.log(all.reverse()); //reverse

let n = [1,5,2,9,3];
console.log(n.sort()); // accending-sort
console.log(n.sort(function(a,b){return a-b})); //accending -sort
console.log(n.sort(function(a,b){return b-a})); //deccending -sort






