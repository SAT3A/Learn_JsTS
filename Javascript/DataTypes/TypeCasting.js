
// Explicit Type Casting
// Proses mengubah tipe data secara eksplisit menggunakan fungsi bawaan JavaScript
let numStr = "123";
let numFloat = "123.45"
let num = Number(numStr); // Convert string to number
console.log('From String 123 to Number ', num); //123
console.log('From String 123 to Integer ', parseInt(numStr)); //123
console.log('From String 123 to Float ', parseFloat(numFloat)); //123.45



// Type Coercion
// Proses otomatis yang dilakukan JavaScript untuk mengubah tipe data saat dibutuhkan

let result = "5" * 10; // "5" dikonversi jadi 5 => hasilnya 50
console.log('Type Coercion: "5" * 10 = ', result); //50