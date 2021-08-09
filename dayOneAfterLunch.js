let greeting = 'Hello My Name is arturo'; // group of characters;
let initial = 'A';
let Name = 'Arturo';

// we pass position, we get string
// console.log(greeting.substring(1)); // -> My
// console.log(Name.charAt(5));

// we pass string, we get position
// console.log(greeting.indexOf("My")); // -> 1
// console.log(Name.indexOf('o', 3)); // will print position of character

// console.log(Name.slice(0,3)); // 0, 1, 2, -> not three
// console.log(Name.substring(0,3)); // second param not inclusive;

console.log(Name.slice(0,-1));
console.log(Name.substring(0,-3));