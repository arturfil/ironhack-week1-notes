const {alvin} = require('./objectExport');

// normal function
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// standard arrow function
const evenOrOdd3 = (number) => {
  let result = number % 2 === 0 ? "Even" : "Odd";
  return result;
};

// one liner
const evenOrOdd2 = (number) => (number % 2 === 0 ? "Even" : "Odd");

// reduce
const foodItems = [
  { region: "italy", name: "pizza", price: 8 },
  { region: "egypt", name: "beer", price: 3 },
  { region: "italy", name: "ice cream", price: 5 },
  { region: "italy", name: "double nesspreso", price: 9 },
  { region: "france", name: "cookies", price: 82 },
  { region: "argentina", name: "empanadas", price: 20 },
  { region: "cuba", name: "croquetas", price: 45 },
  { region: "India", name: "curry", price: 25 },
  { region: "Venezuela", name: "arepas", price: 20 },
  { region: "Venezuela", name: "cachapas vegan(fake) chicken", price: 28 },
  { region: "Venezuela", name: "malta", price: 3 },
];

// reduce object arryas to single check total
let totalDollarAmount = foodItems.reduce((acc, item) => {
  return acc + item.price;
}, 0);
// testing function
// console.log(totalDollarAmount); // 248 + 15 somwhere around that

// filtering out / getting rid of 'arepas'
const noArepasItems = foodItems.filter( (element) => {
  return element.name !== 'arepas';
});
// testing function
// console.log(noArepasItems);

// filter or group by condition
const venezuelanFood = foodItems.filter( (item) => {
  return item.region === 'Venezuela'; 
})
// test function
// console.log(venezuelanFood);

// filter or group by condition
const italianFood = foodItems.filter((item) => {
  return item.region === 'italy'
})
// test function
// console.log(italianFood);

// map or guide data into new array of foodNames
const foodNames = foodItems.map((food) => {
  return food.name
})

// map or guide data into new array
const anotherFilterWIthMap = foodItems.map((food) => {
  return food ? food.region === 'Venezuela' : null;
})
// testing map functions 
// console.log(foodNames);

let nums = [2,6,7,3,8,22,11]; // 2,6,3,7,8,11,22; [][]

// sort algorithm wth o^2 time complexity
for(let i = 0; i < nums.length; i++) {
  let temp = 0;
  console.log(`This is round ${i}`);
  for(let j = 0; j < nums.length-1; j++) {
    if (nums[j] > nums[j+1] ) {
      temp = nums[j];
      nums[j] = nums[j+1];
      nums[j+1] = temp;
    }
    console.log(nums[j])
  }
}

// console.log(nums) // check modified array

// see objectExport.js file to see how to import, also refer to the top import;
console.log(alvin.name);



