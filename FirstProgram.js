var name = 'Irvansah'
let age = 25
const isMarried = false
alert('Hello ' + name + ' ' + age + ' ' + isMarried)


//Hoisting contohnya : 

var x;
console.log(x); // hasilnya undefined karena var x di deklarasikan dulu baru diisi nilainya
x = 10; 

//Global scope : 
var globalVar = 'global';
function testDoang() {
    console.log(globalVar); // hasilnya global karena var globalVar di deklarasikan di luar function
}

testDoang();
console.log(globalVar); // hasilnya global karena var globalVar di deklarasikan di luar function.

//Function scope : 
function testDoang2() {
    var localVar = 'local';
    console.log(localVar); // hasilnya local karena var localVar di deklarasikan di dalam function
}

//console.log(localVar); // hasilnya undefined karena var localVar di deklarasikan di dalam function

if(true) {
    var blockVar = 'block';
    const blockConst = 42;
    console.log(blockVar); // hasilnya block karena var blockVar di deklarasikan di dalam block
}

console.log(blockVar); // hasilnya undefined karena var blockVar di deklarasikan di dalam block
//console.log(blockConst); // hasilnya undefined karena var blockConst di deklarasikan di dalam block

//Primitive data types : 
//String
let name2 = "Alice";
let greeting = 'Hello, world!';
let message = `Hi, ${name2}!`;  // template literal
console.log(message); // Hi, Alice!

//Number
let age2 = 30;
let pi = 3.14159;
let negative = -10;
console.log(age, pi, negative);

//Boolean
let isActive = true;
let hasAccess = false;
console.log(isActive, hasAccess);

//BigInt
let big = 9007199254740991n; // lebih besar dari Number.MAX_SAFE_INTEGER
let anotherBig = BigInt("123456789012345678901234567890");
console.log(big, anotherBig);


//Null
let emptyValue = null;
console.log(emptyValue);

