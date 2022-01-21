//  object data type just like dictonary in python

const person = {name:'akash',age:21};
console.log(person);
console.log(person.name);
console.log(person.age);

// other ways

const person ={
    name:'akash',
    age:21,
    hobbies : ["a","b","c"],
    
}
console.log(person);
console.log(person.name);
console.log(person.hobbies)

// loop in object

for(let key in person){
    console.log(person[key]);
}

// object.keys(person) will give array of all keys
for(let i of Object.keys(person)){
    console.log(person[i])
}