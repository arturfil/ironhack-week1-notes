const prompt = require("prompt-sync")();
const readline = require("readline");

// setup for readline
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// adding function -> get used to comment things like so
function sum(a, b) {
  return a + b;
}

// delete function
function substract(a, b) {
  return a - b;
}

function divide(a,b) {
  return a / b;
}

// greeting with prompt-sync
function greeting() {
  const name = prompt("What's your name: ");
  console.log(`Hello ${name}`);
}

// greeting with readline
// function greeting2() {
//   // a callback, we will see this later
//   rl.question("What is your name? \n", (answer) => {
//     // log it
//     console.log(`Hello ${answer}`);
//     // we close the listening for user input
//     rl.close();
//   });
//   return;
// }

// execute/calling function
// greeting2();

// making all our functions available to other files
module.exports = {
  sum,
  substract,
  greeting,
  divide
};
