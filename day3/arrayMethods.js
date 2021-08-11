// forEach, filter, reduce, map
let startWarsCharacters = [
  "Groku",
  "Mandalorian",
  "Master Windu",
  "Luke Skywalker",
  "GRRRRRRR",
];

// for each recap
// startWarsCharacters.forEach((name) => {
//   console.log(name);
// });

// startWarsCharacters.forEach(function(character) {
//   console.log(character);
// })

// filtering out
const result = startWarsCharacters.filter(
  (character) => character !== "Master Windu"
);
// console.log(result);

// simple map
// startWarsCharacters.map((name, i) =>
//   console.log(name.toLowerCase() + ` is in index ${i}`)
// );

const f1Drivers = [
  {
    name: "Checo Perez",
    team: "RedBull",
    experience: 9,
    setTires: [
      'hard',
      'medium',
      'soft'
    ]
  },
  {
    name: "Max Verstappen",
    team: "RedBull",
    experience: 4,
    setTires: [
      'hard',
      'soft'
    ]
  },
  {
    name: "Lightning McQueen",
    team: "Cuchow Team",
    experience: 2,
    setTires: [
      'none'
    ]
  },
  {
    name: "Matter",
    team: "Cuchow Team",
    experience: 2,
    setTires: [
      'rusty'
    ]
  },
  {
    name: "Alex Albon",
    team: "RedBull",
    experience: 1,
    setTires: [
      'hard',
      'soft',
      'medium'
    ]
  },
  {
    name: "Michael Schumacher",
    team: "Ferrari",
    experience: 20,
    setTires: [
      'hard',
      'soft',
      'medium'
    ]
  },
];
const redbullDrivers = [];
f1Drivers.map(function (driver) {
  return driver.team === "RedBull" ? redbullDrivers.push(driver) : null;
});
// console.log(redbullDrivers);

// the same as above
const filteredDrivers = [];
f1Drivers.map((driver) =>
  driver.team === "RedBull" ? filteredDrivers.push(driver) : null
);
// console.log(filteredDrivers)
// f1Drivers.map(function(cat) { console.log(cat.team)});

// filtering in
const filtered = f1Drivers.filter((player) => {
  return player.team === "Cuchow Team";
});
// console.log(filtered);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

// reduce
const totalYearsOfExperienceCombined = f1Drivers.reduce(function(acc, driver) {
  return acc + driver.experience;
}, 0)
console.log(totalYearsOfExperienceCombined); // 38;

// same way but with ES6 syntax
const totalYearsOfExperienceCombined2 = f1Drivers.reduce((acc, driver) => acc + driver.experience, 0)
console.log(totalYearsOfExperienceCombined2); // 38;

// iterate through array objects that have an array
for(let i = 0; i < f1Drivers.length; i++) {
  // console.log( f1Drivers[i].setTires );

  for (let j = 0; j < f1Drivers[i].setTires.length; j++) {
    // console.log(`${f1Drivers[i].name} has tire: ${f1Drivers[i].setTires[j]}`);
  }

}