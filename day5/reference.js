// copy by reference, call backs, classes, search alg.

// copy by value
let arturo = 'arturo';
let namecopy = arturo;

arturo = 'Santiago';
console.log(namecopy)

// copy by reference
const array = ['Adri', 'Arturo'];
const arraycopy = array;
arraycopy.push('Fernando');
// console.log(array)

// object copied by reference
const link = {
  name: "Link",
  weapons: ["Master Sword", "Hylian Shield"]
}

const darkLink = link;
darkLink.isDark = true;

// console.log(darkLink)
// console.log(link) // ask them what they think it will happen

// // Object Assign
const toonLink = Object.assign({}, link);
// console.log(toonLink);

// // ask them if this is true
// console.log(link === darkLink);
// // and now? // This is a shallow copy
// console.log(link === toonLink);

// Shallow copy example
link.name = "Toon Link";
// console.log(link.weapons);
// console.log(toonLink.weapons.push('Boomerang'));
// console.log(link.weapons);
// console.log(toonLink.weapons);

// Deep Copy
const wolfLink = {};

// one level deep copy
for (let prop in link) {
  wolfLink[prop] = link[prop]; 
}

// show the name deep copy
link.name = "Link";
console.log("One level deep copy")
console.log(link.name)
console.log(wolfLink.name)

// show ...
console.log("WolfLink weapons: ", wolfLink.weapons);
let boomergangIndex = link.weapons.indexOf('Boomerang') 
link.weapons.splice(boomergangIndex, boomergangIndex);

console.log(link.weapons);
console.log("Wolf Link Weapoins", wolfLink.weapons);

function cloneObject(object) {
  let newObj = {};
  for (let prop in object) {
    if (object[prop] != null && typeof object[prop] == 'object') {
      newObj[prop] = cloneObject(object[prop])
    } else {
      newObj[prop] = object[prop]; 
    }
  }
  return newObj;
}

const toonDarkLink = cloneObject(darkLink);
darkLink.weapons.push('Bow');
toonDarkLink.companion = {name: "epona", speed: 40}

console.log("Deep nested copy")
console.log(darkLink);
console.log(toonDarkLink);

// copy object with json parse and json stringify
const lukeSkywalker = {
  name: "Luke",
  faction: "Jedi",
  powers: ['saber skills', 'jedi force', 'pilot skills']
}

// better way of copying objects
const anakin = JSON.parse(JSON.stringify(lukeSkywalker));
anakin.name = 'Anakin'
let jediForce = anakin.powers.indexOf('jedi force');
anakin.powers.splice(jediForce, jediForce);
anakin.powers.push('dark force')
console.log(lukeSkywalker);
console.log(anakin);

// shallow copies
// show spread operator
const switchGames = ['mario kart', 'fifa', 'luigis Mansion'];
const wiiGames = switchGames;
// [...switchGames, 'Smash Brothers'];

wiiGames.push('Mario Golf')
console.log(wiiGames);

console.log(switchGames)

// copy array with also json parse and json stringify
let gradesStudents = [
  ['student a', 'student b'],
  ['A+', 'A-']
]

let studentPartTime = JSON.parse(JSON.stringify(gradesStudents));

gradesStudents.push(['pizza', 'burger']);

console.log(gradesStudents)
console.log(studentPartTime)