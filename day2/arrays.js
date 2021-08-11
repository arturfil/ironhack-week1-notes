// splice, split, forEach, in functions, double arrays (not really)
// REMINDER: map, reduce, filter

function printCars() {
  console.log("We will print cars");
}

const printCars2 = () => {
  console.log("We will print cars");
}

// string arrays
const favCars = ['Ferrari', 'Pagani', 'Lamborgini', 'Porsche', 'McClaren'];

// nums arrays
const grades = [80, 20, 94, 56, 76, 78,72];

// mix of arrays 
const mix = ['Ferrari', 80, 'Test', 100, printCars, printCars2 ]

// console.log(favCars[4]);
// console.log(favCars.splice(0,2));

let favArtist = 'Eminem';
// favArtist = favArtist.split("");
// console.log(favArtist);

const students = ['student 1', 'student 3', 'student 2']
const foods = ['Pizza', 'Tofu', 'Tacos', 'burger'];
const laptopbrands = ['apple', 'razer blade', 'asus rog', 'think pad', 'alienware'];

function printLaptops() {
  for(let i = 0; i < laptopbrands.length; i++) {
    console.log(laptopbrands[i]);
  }
}

// for (let i = 0; i < favCars.length; i++) {
//   console.log( favCars[i] );
// }

// iterating through normal loop [Not ideal please refer to objects file]
for (let i = 0; i < 3; i++) {
  console.log(`${students[i]} likes to eat: ${foods[i]}`);
  if (foods[i] == 'Pizza') {
    console.log("I know student 1 likes Pizza");
  }
}

// iterating with a forEach; NOTE: only available to arrays
// students.forEach(function(student) {
//   console.log(student);
// });

// with arrow function
// foods.forEach((cat) => {
//   console.log(cat);
// });

// with normal annoymous functio
// foods.forEach(function(cat) {
//   console.log(cat);
// })

// printLaptops();

// create a function that takes an array as an argument
// and prints all the values inside of the array
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// lazy -> good way
const arraysToGoThrough = [foods, favCars, students, laptopbrands];
// arraysToGoThrough.forEach((array) => {
//   printArray(array);
// })

// another way
// printArray(foods);
// printArray(favCars);
// printArray(students);

console.log(arraysToGoThrough[3][4]); // alienware = 4th index

console.log(arraysToGoThrough[1][3]) // Porsche =  3rd index

const doubleArray = [
  ['colada', 'espesso', 'capuccinno'], 
  ['blond beer', 'lager', 'ipa', 'amber'],
  ['camomile', 'black tea', 'cha tea']
];

console.log(doubleArray[2][0]);
