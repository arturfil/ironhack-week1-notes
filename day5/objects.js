let darthVader = {
  name: "Darth Vader",
  weapon: "Red Saber",
  revealTruth() {
    console.log(`I am ${this.name} and I am your FATHER...`);
  },
  attackDamage: 8,
  attack() {
    console.log(
      `${this.name} has attached you with his ${this.weapon}, causing a ${this.attackDamage} points damage`
    );
  },
  defend: () => {
    console.log(`${this.name} Said, I am your father`);
  },
};

darthVader.revealTruth();
darthVader.defend();

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
    // let index = Math.random() * (endOfArray - begOfArray) + begOfArray; // works for any min, max
    // let diceNum = Math.floor(Math.random() * 6) + 1; // only works with 1 to 6
    let diceNum = Math.floor(Math.random() * (6 - 1)) + 1; // only works with 1 to 6
    if (this.name === 'Messi') {
      return diceNum > 1 ? "scored" : "didn't score"
    } else {
      return diceNum > 3 ? "scored" : "didn't score"; 
    }
  }
}

const messi = new SoccerPlayer('Messi', 'PSG', 'Argentina', 'False 9 (Foward)');
console.log( messi.shoot() );

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

  fly() {
    console.log(`The eagle will fly at ${this.speed} mph`)
  }
}

const americanEagle = new Eagle("Eagyy Azalea", "Dark Brown", preys, "American Eagle", 255 );

console.log( americanEagle.name );
americanEagle.hunt();
americanEagle.fly();