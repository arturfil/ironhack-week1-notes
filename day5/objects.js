const darthVader = {
  name: "Darth Vader",
  weapon: "Red Saber",
  revealTruth() {
    console.log(`I am ${this.name} and I am your FATHER...`);
  },
  attackDamage: 8,
  attack() { // function () { this.name will be Darth Vader } 
    console.log(
      `${this.name} has attached you with his ${this.weapon}, causing a ${this.attackDamage} points damage`
    );
  },
  defend: () => { // this.name will be undefined
    console.log(`${this.name} Said, I am your father`);
  },
};

// darthVader.revealTruth();
// darthVader.defend(); // refer to arrow this keyword !work

let arturo = { 
  id: 9, 
  name: 'Arturo', 
  age: 29,
  type: 'staff'
}

class Person {
  walk() {
    console.log("walking")
  }
}

// mold or blueprint of an object
class IronHacker extends Person {
  constructor(id, name, age, type) {
    super();
    this.id = id,
    this.name = name,
    this.age = age,
    this.type = type
  }
}

const andriw = new IronHacker(23423, "Andriw", 26, "student");
const matias = new IronHacker(234234, "Matias", 28, "student")
andriw.walk();
console.log(andriw)
console.log(matias)

// classes and inheritance
// Use basketball player if desired
class SoccerPlayer {
  constructor(name, team, country, position) {
    this.name = name;
    this.team = team;
    this.country = country;
    this.position = position;
  }
  shoot() {
    let diceNum = Math.floor(Math.random() * (6 - 1)) + 1; // only works with 1 to 6
    if (this.name === 'Messi' || this.name === 'Ronaldo') {
      return diceNum > 1 ? "scored" : "didn't score"
    } else {
      return diceNum > 3 ? "scored" : "didn't score"; 
    }
  }
}

const messi = new SoccerPlayer('Messi', 'PSG', 'Argentina', 'False 9 (Foward)');
// console.log( messi.shoot() );

// explain how the clue lab was a pain, refactor

class Bird {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  fly() {
    console.log("This bird is flying");
  }
}

let preys = ['Dove', 'Pigeon', 'Colibri', 'Rabbit', 'Serpent'];

class Eagle extends Bird {
  constructor(name, color, preys, type, speed) {
    super(name, color); // super always goes first
    this.preys = preys;
    this.type = type;
    this.speed = speed;
  }

  hunt() {
    let rnd = Math.floor(Math.random() * (preys.length - 0)) + 0;
    console.log(`${this.name} got a ${preys[rnd]} for a meal`);
  } 
}

const americanEagle = new Eagle( preys, "American Eagle", 255, "Eagyy Azalea", "Dark Brown", );
const deadEagle = new Eagle();

deadEagle.fly()
// console.log(deadEagle.name);
console.log( americanEagle );
// americanEagle.hunt();
// americanEagle.fly();