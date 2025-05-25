//Object

const person = {
    name: 'Irvansah',
    age: 25,
    city: 'Jakarta',
    greeting: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
    
};

console.log(person);
person.greeting();

//Object prototype
//Sebuah object "induk" yang menjadi sumber properti dan method default
//Prototype memungkinkan objek mewarisi properti dan method dari objek lain

// CONTOH : 
const animal = {
    eats: true,
};

const rabbit = Object.create(animal);
rabbit.jumps = true;


console.log(rabbit.eats);
console.log(rabbit.jumps); 

// Prototypal inheritance
// Contoh

const parent = {
    greet(){
        console.log('Hello, from parent');
    }
};

const child = Object.create(parent);
child.greet(); //Hello from parent

// Typeof Operator

console.log(typeof 1); //number
console.log(typeof 'Hello'); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof Symbol()); //symbol
console.log(typeof function() {}); //function
console.log(typeof [1,2,3]); //object
console.log(typeof {a:1, b:2}); //object

//Build in object
//Object yang disediakan oleh JavaScript

//Contoh
//String
let text = 'Hello World';
console.log(text.toUpperCase()); //HELLO WORLD

//Number and Math 
let xNum = 3.14159; 
console.log(Math.round(xNum)); //3
console.log(Math.random()); //0.123456789 (random number between 0 and 1)

//Date
let now = new Date();
console.log(now.getDate()); //Current date and time in milliseconds since Unix Epoch

//Array
let fruit = ["apple", "banana", "cherry"];
fruit.push("orange"); //Add an item to the end of the array
console.log(fruit); //["apple", "banana", "cherry", "orange"]

//Set 
let ids = new Set();
ids.add(1);
ids.add(2);
ids.add(3);
console.log(ids); //true

//Map
let userRoles = new Map();
userRoles.set('Alice', 'admin');
console.log(userRoles.get('Alice')); //admin

//JSON 
let obj = { name: "Irvansah", age: 25, city: "Jakarta" };
let str = JSON.stringify(obj);

console.log(str);

//Reg Exp
let pattern = /world/i; //Case-insensitive search for "world"
console.log(pattern.test('Hello World')); //true

//Error 

try {
    throw new Error('Something went wrong!');
}catch (e) {
    console.error(e.message); //Something went wrong!
}
