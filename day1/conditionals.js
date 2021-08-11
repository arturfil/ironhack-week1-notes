// if () else;

let arturosNationaly = 'Mexican';
let arturosDiet = 'Pesketarian';

if (arturosNationaly === 'Colombian') {

  console.log("Let's go to Mondogos");

} else if (arturosNationaly === 'Mexican') {
  
  if (arturosDiet === 'Omnivore') {
  
    console.log("Lets get tacos in rinconcito Mexicano");
 
  } else if (arturosDiet === 'Pesketarian') {
    
    console.log('Lets eat fish tacos');
 
  } else {
  
    console.log("Just watch out, this guy can't toleate any food");
  
  }

} else {

  console.log("Nah, he doesn't get to eat"); 

} 
// ----------------------- switch cases ----------------------------------- //



let nationality = prompt('What is your nationality'); // remember to either:
// import the package, do it on the console browser or do it on replit (for prompt  )
nationality = nationality.toLower(); // 
let foodYoullEat = '';

switch (nationality) {
    case 'Mexican':
        foodYoullEat = 'tacos';
        break;
    case 'Preuvian':
        foodYoullEat = 'Ceviche';
        break;
    case 'Venezuelan':
    case 'Colombian':
    case 'Ecuatorian':
        foodYoullEat = 'Arepas';
        break;
    case 'Indian':
        foodYoullEat = 'Indian Curry';
        break;
    case 'Argentinian':
        foodYoullEat = 'Asado';
        break;
    default:
        foodYoullEat = 'Pizza';
        break;
}

console.log(`Hey you are ${nationality}, you may like ${foodYoullEat}`);

