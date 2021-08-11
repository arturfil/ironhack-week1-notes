function greeting(name) {
  console.log(`Hello, ${name}`);
}

function getTip(total, percentage) {
  let tipAmount = total * percentage // 0.15, 0.18, 0.02, 0.00 ;
  return tipAmount;
}

// greeting("Arturo");

// console.log( getTip(100, 0.16) );
// let whatDoIPay = getTip(100, 0.15);

// console.log("Artuo pays " + whatDoIPay);

// console.log( greeting('John'));

// global scope
let favoriteArtist = 'Imaging Dragons';
// console.log(favoriteArtist);

const hey = () => { 
  console.log("Hey")
}

function hey2() {
  console.log("Hey")
}

function printArtist () {
  // local scope
  let favoriteArtist = 'Kendric Lammar'
  console.log(favoriteArtist);
}

console.log(favoriteArtist);
printArtist();
console.log(favoriteArtist);

const greeting2 = (name, lastname) => {
  console.log(`Hello ${name} ${lastname}`);
} 

greeting2("arturo", "filio");