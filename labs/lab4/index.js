// const { movies: dog, secondArray: second } = require("./data");
const { movies, secondArray, test } = require("./data");

// HOW MOVIES OBJECT LOOKS LIKE
// {
//   title: 'The Shawshank Redemption',
//   year: 1994,
//   director: 'Frank Darabont',
//   duration: '2h 22min',
//   genre: ['Crime', 'Drama'],
//   score: 9.3
// },

// console.log(movies);
// console.log(secondArray);

// Iteration 1: Get all directors in array
const getAllDirectors = (movies) => {
  const directorsArray = [];
  movies.map((movie) => {
    directorsArray.push(movie.director);
  });
  return directorsArray;
};
// console.log(getAllDirectors(movies)); // :Testing function

// TODO: Clean duplicates: could use normal forloop i !== indexOf, remove
// could also use filter, or map to pass two

// Iteration 2: filter movies into new array with only drama & Steven Spielber
const howManyMovies = (movies) => {
  return movies.filter(
    (movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
};
// console.log(howManyMovies(movies)); // testing line

// Iteration 3: 
function scoresAverage(array) {
  let numberOfMovies = array.length;
  const sum = array.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  console.log(  (sum / (numberOfMovies)).toFixed(2) );
}
// scoresAverage(movies) : Testing function

// Iteration 4 
const dramaMoviesScore = (movies) => {
  let numberOfMovies = 0;
  const sum = movies.reduce((acc, movie) => {
    // test ? true_value_returned : false_value_returned
    // return movie.genre.includes('Drama') ? acc + movie.score : 0;
    if (movie.genre.includes('Drama')) {
      numberOfMovies++;
      return acc + movie.score;
    } else {
      return acc + 0;
    }
  }, 0);
  return (sum / numberOfMovies).toFixed(2);
}
// console.log(dramaMoviesScore(movies)); :Testings

// Iteration 5
const orderByYear = (movies) => {
  // sorting a & b where a and b will be each movie swapping a for b 
  // if a has a greater year than b i.e. 1992 & 1980 
  const newSorted = movies.sort((a, b) => (a.year > b.year ? 1 : -1));
  return newSorted;
}
// console.log(orderByYear(movies)); // :Testing

let m1 ={name: "Movie 1", year: 2020, title: "Blah"}
let m2 ={name: "Movie 2", year: 2008, title: "Blah"};

// creating our own compare function like the one in sort;
// so you understand what the comparing function does
function compare(a, b) {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  } 
  // a must be equal to b
  return 0;
}
// console.log( compare(m1, m2) ); // Testing

// Iteration 6
// sorts all the array then push
const orderAlphabetically = (movies) => {
  movies.sort((a, b) => (a.title > b.title ? 1 : -1));
  let sorted = [] 
  for (let i = 0; i < 20; i++) {
    sorted.push(movies[i].title)
  }
  return sorted;
}

// could be more efficient, push 20 random movies, then sorts
const orderAlphabetically2 = (movies) => {
  let newArr = [] 
  for (let i = 0; i < 20; i++) {
    newArr.push(movies[i].title)
  }
  let sorted = newArr.sort((a, b) => (a > b ? 1 : -1));
  return sorted;
}

console.log(orderAlphabetically2(movies));


