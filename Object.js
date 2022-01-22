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

// object destructing
const band={
    a: "1",
    b:"2",
    e:"3",
    f:"4",
}

const {a,b} = band;
console.log(a);
console.log(b);

// or you want to store valnin other var
const {a:con,b:dell} = band;
console.log(con);
console.log(dell);

// stor rest propert in other object
const {a,b, ...rest} = band;
console.log(rest);