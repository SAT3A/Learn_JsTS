//Structured Data di JavaScript biasanya mengacu pada data kompleks yang berisi data lain di dalamnya, seperti : 
// Object, Array, JSON

//Contoh : 

let user = {
    name: "Alice",
    age: 30,
    isAdmin: true,
    hobbies: ["reading", "gaming"],
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

// Keyed Collections
// Struktur data khusus yang memungkinkan kamu menyimpan pasangan key-value atau sekumpulan item unik.

// Map
// Menyimpan pasangan key - value 
// Key bisa dari tipe apa pun (termasuk object atau function)
// Menjaga urutan penambahan

const map = new Map();
map.set('name', 'Alice');
map.set(42, 'anwer');

const myObj = { id: 1 };
map.set(myObj, 'object value');

const myFunc = function() {
    return "I'm a function";
};

map.set(myFunc, 'function value');

console.log(map.get('name')); // Alice
console.log(map.get(42)); // anwer
console.log(map.get(myObj)); // object value
console.log(map.get(myFunc)); // function value
console.log(map.size); // 2

// Set
// Menyimpan nilai unik tanpa duplikat
// Tidak menyimpan key-value, hanya value saja.

const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplikat tidak akan ditambahkan
console.log(set.has(1)); // true
console.log(set.size)

// WeakMap
// Mirip dengan Map, tetapi key-nya hanya bisa object
// dan tidak akan mencegah garbage collection pada key tersebut.
// tidak bisa di-iterate

const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, 'value associated with objKey');
console.log(weakMap.get(objKey)); // value associated with objKey

// WeakSet
// Mirip dengan Set, tetapi hanya bisa menyimpan object
// tidak bisa di-iterate
// Weak reference => memungkinkan object dihapus dari memori

const weakSet = new WeakSet();
const objValue = {};
weakSet.add(objValue);
console.log(weakSet.has(objValue)); // true

//Array 

let arr = [1, "Hello", true, null]
console.log(arr[0]); // 1
console.log(arr[1]); // Hello

arr.push("new item"); // Menambahkan item baru ke array
console.log(arr.length); // 5
