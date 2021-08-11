// simple max of two function
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "They are the same";
  }
}
// testing function
// console.log(maxOfTwo(3,5));

// max of two function
function maxOfTwo2(a, b) {
  let max = Math.max(a, b);
  return max;
}
// console.log(maxOfTwo2(2,9));

// (make a test) ? return_this_value : return_other_value;
// ternary function
function ternaryMaxOfTwo(a, b) {
  // is the test true ? return this : return that
  return a > b ? a : b;
}
// testing function
//  console.log(ternaryMaxOfTwo(8,8) );

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

// get maxword function
const getMaxWord = (array) => {
  // checking that there is no null array
  if (array === null) {
    return null;
  }

  let max = "";
  for (let i = 0; i < array.length; i++) {
    if (max.length < array[i].length) {
      max = array[i];
    }
  }
  return max;
};
// testing function
// console.log(getMaxWord(words));

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// get sum function
const getSum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    // sum += array[i];
    sum = sum + array[i];
  }

  return sum;
};

// testing function
// console.log(getSum(numbers));

let arturo = { name: "arturo" };
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
// get sum Generic

const getSumGeneric = (mixed) => {
  let sum = 0;

  for (let i = 0; i < mixed.length; i++) {
    if (
      typeof mixed[i] === "number" ||
      typeof mixed[i] === "string" ||
      typeof mixed[i] === "boolean"
    ) {
      if (typeof mixed[i] === "string") {
        sum += mixed[i].length;
      } else {
        sum += mixed[i];
      }
    } else {
      return `Error type of value in array is '${typeof mixed[i]}, ${
        mixed[i]
      }'`;
    }
  }
  return sum;
};
// testing the function
// console.log( getSumGeneric(mixedArr));

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9]; // 48; 8;
// calculate average => avg = totSum / totNumbers
const getAvg = (array) => {
  let sum = getSum(array);
  // console.log(sum);
  let totValues = array.length;
  let total = (sum / totValues).toFixed(2);
  total = Number(total); // converts only a string that contains a number;
  return total;
};
// testing function
// console.log(getAvg(numbers2))

const words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
// get words lenght avg
function getWordLenghtAvg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].length;
  }
  let totalWords = array.length;
  return sum / totalWords;
}
// testing function
// console.log(getWordLenghtAvg(words2));

const mixedArr2 = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
// get generic array sum average
const getGenericAvg = (array) => {
  let genericSum = getSumGeneric(array);
  let totCount = array.length;
  let avg = genericSum / totCount;
  return avg;
};
// testing function
// console.log(getGenericAvg(mixedArr2));

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// get rid of duplicate words function
function uniquifyArray(array) {
  const uniqueArray = [];

  for (let i = 0; i < words3.length; i++) {
    if (i === array.indexOf(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}
// test the function
// console.log(uniquifyArray(words3));

const teams = ['Man U', 'Liverpool', 'Liverpool', 'PSG'];
// removes duplicates in array
function removeDuplicate(array) { // TODO: FINISH THIS FUNC
  for(let i = 0; i < words3.length; i++) {
    word = words[i];
    if (i !== array.indexOf(array[i])) {
      array.splice(array.indexOf(word), array.indexOf(word)); // NOTE: you could use filter
    }
  }
  return array;
}
// testing function
// console.log(removeDuplicate(teams));

const words4 = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];
// searching for word
const doesItExist = (array, word) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return true;
    }
  }
  return false;
};
// testing
// console.log(doesItExist(words4, "truth"));

// another easy example to follow double array and doubl for loops
dogs = [
  ["balto", "huskie"],
  ["bethoveen", "st. bernard"],
  ["kujo", "assasin"],
  ["benji", "shitsu"],
  ["hachiko", "shiba"],
];

for(let i = 0; i < dogs.length; i++) {
	for (let j = 0; j < dogs[i].length; j++) {
		console.log(dogs[i][j]);
	}
}

const testMatrix = [
  [2,5,6,5,6],
  [2,5,7,9,3],
  [3,7,9,3,7]
]

const getGreatestProduct = (matrix) => {
  let greatestProduct = 0;
  let current = 0;
  for(let i = 0; i < matrix.length; i++ ) {
    for (let j = 0; j < matrix[i].length; j++) {
      // is there anything left?
      if (matrix[i][j-3]) {
        current = matrix[i][j] * matrix[i][j-1] * matrix[i][j-2] * matrix[i][j-3];
        greatestProduct = Math.max(current, greatestProduct);
      }

      // check for right: j+1 ...


      // check upwards: i-1

      // check downward: i+1
    }
  }
}