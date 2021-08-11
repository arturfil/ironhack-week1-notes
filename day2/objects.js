// OBJECTIVES: simple objects, go into food and students object, iterate throuhg objects
// REMINDER: functions lowercase, strings (if constant Capita), Objects (Capital);
//           arrays (generally lowercase, if it's constant array Capital i guess...)
const ROWS = 6;
const COLS = 12;

let enemiesHealth = 10;

function attack() {
  console.log("Link has attacked!");
  enemiesHealth--; // enemiesHealth -= 1; // enemiesHealth = enemiesHealth - 1;
}

let Fairy = {
  phrase: "HEY LISTEN!",
  pitch: "really high"
}

let sword = {
  damage: 5
}

let Link = {
  attack: attack,
  // defend: function (){ console.log("Link defended") }, // you can do this, not adviced
  name: "Link",
  items: [sword, shield, 'bow', 'boomerang'],
  hearts: 9,
  stamina: 9,
  companion: Fairy,
  crush: "Zelda"
}


// console.log(Link.hearts);
// console.log(Link.items[1]);

let st1 = {
  name: "Alfredo",
  food: "Risoto"
}

let inst = {
  name: "Arturo",
  food: "Escamoles"
}

let st2 = {
  name: "Andriw",
  food: "Sushi"
}

let st3 = {
  name: "Frank",
  food: "Encebollado (Fish Soup)"
}

let students = [st1, st2, st3, inst, ];

// for(let i = 0; i < students.length; i++ ) {
//   console.log(`The student ${students[i].name} likes to eat ${students[i].food}`);
// }

// students.forEach((student) => {
//   console.log(`The student ${student.name} likes to eat ${student.food}`)
// })

console.log("The enemiesHealth is", enemiesHealth);
// console.log("\n")
Link.attack(); // 9
console.log("The enemiesHealth is", enemiesHealth);

Link.defend();