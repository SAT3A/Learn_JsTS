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
