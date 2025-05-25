
// == Loose Equiality, membandingkan nilai dengan coercion
console.log(1 == '1'); // true, karena '1' diubah menjadi number

// === Strict Equality, membandingkan nilai dan tipe tanpa coercion 
console.log(1 === '1'); // false, karena tipe berbeda (number vs string)

// Object.is(), same value, hampir mirip === tapi lebih akurat untuk NaN dan -0
console.log(Object.is(0, -0)); // false


console.log(isLooseLyEqual(1, '1')); // true, karna sama seperti ==
console.log(isStrictlyEqual(1, '1')); // false, karna sama seperti ===
console.log(SameValue(0, -0)); // false, mirip === tapi NoN === NaN => True, +0 !== -0
console.log(SameValueZero(0, -0)); // true, mirip SameValue, tapi +0 dan -0 dianggap sama

