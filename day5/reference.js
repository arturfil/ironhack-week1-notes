// // copy by reference, call backs, classes, search alg.

// copy by value

let lifeCoach = "Simon Sinek";
let arturoCoach = lifeCoach;
// console.log(lifeCoach);
arturoCoach = "Arturo";
// console.log(arturoCoach);
//
lifeCoach = "Tony Robins";
// console.log(lifeCoach);
// console.log(arturoCoach);

const arturosName = "Arturo";
// arturosName = 'Santiago';
// console.log(arturosName);

// copy by reference
const cellphones = ["iphone", "samsung", "xoami", "google pixel"];
cellphones.push("plus 1");
// console.log(cellphones);
cellphones.pop();
// console.log(cellphones);

const attInventory = cellphones;
// console.log(attInventory);
cellphones.push("HTC"); // pushing in cellphones
cellphones.push("Nokia"); // pushing in cellphones
// console.log(attInventory);
// [ 'iphone', 'samsung', 'xoami', 'google pixel', 'HTC', 'Nokia' ]
attInventory.pop();
// console.log(cellphones);
attInventory.push("MOTOROLA");
// console.log(cellphones);

// object copied by reference
const link = {
  name: "Link",
  weapons: ["Master Sword", "Hylian Shield"],
  enemy: "Ganondorf",
};

// assingning new object to link
const darkLink = link;
// creating, assigning new property to darkLink object
darkLink.isDark = true;

// console.log(darkLink)
// console.log(link); // ask them what they think it will happen

// Object Assign
const toonLink = Object.assign({}, link); // shallow copy
// console.log(toonLink);
toonLink.name = "Bob";
// console.log("After changing with Object.assing()")
// console.log(link);
// console.log(toonLink);

// changing weapons array
toonLink.weapons.push("Boomerang");
// console.log("Boomerang added")
// console.log(link);
// console.log(toonLink);

// Deep Copy Objects
const wolfLink = JSON.parse(JSON.stringify(link));
wolfLink.weapons.push("toilet");
wolfLink.name = "Wolf Link";
// console.log(link);
// console.log(wolfLink);

// Deep Copy Arrays
const writers = [
  [5,"Steven King"],
  [5,"Ernest Hemingway"],
  [5,"Garcia Marquez"],
  [5,"Ruben Dario"],
  [5,"Isabel de Allende"],
  [5,"Juan Rulfo"],
  [5,"Borges"],
  [5,"George RR Martin"],
  [5,"JRR Tolkien"]
]; //

// Deep Copy
const ironhackFavWrites = JSON.parse(JSON.stringify(writers));

// console.log(writers)
ironhackFavWrites.push(['JK Rowling', 'Harry Potter']);
console.log(ironhackFavWrites); // 
console.log(writers); // 

// Annoying way, don't need this 
// function cloneObject(object) {
//   let newObj = {};
//   for (let prop in object) {
//     if (object[prop] != null && typeof object[prop] == 'object') {
//       newObj[prop] = cloneObject(object[prop])
//     } else {
//       newObj[prop] = object[prop];
//     }
//   }
//   return newObj;
// }

// const toonDarkLink = cloneObject(darkLink);
// darkLink.weapons.push('Bow');
// toonDarkLink.companion = {name: "epona", speed: 40}

// // shallow copies
// // show spread operator
// const switchGames = ['mario kart', 'fifa', 'luigis Mansion'];
// const wiiGames = switchGames;
// // [...switchGames, 'Smash Brothers'];

// wiiGames.push('Mario Golf')
// console.log(wiiGames);

