let heroes = ["hulk", "iron man", "black widow",];
//Accessing hero in array at pos 0
console.log(heroes[0]);

//Python : append
//JS : push
heroes.push("spiderman");
console.log(heroes);
console.log(heroes.length);
//Getting last item in an array
console.log(heroes[heroes.length - 1]);

//pop removes the last item in the array
heroes.pop();
console.log(heroes);
//or
// let lastHero = heroes.pop();
// console.log(lastHero);


for(let hero of heroes){
    console.log("Hero",hero);
}
// For..of loop but quicker
heroes.forEach(hero=>{
    console.log("Hero",hero);
})

//Another Example - also called a call back function

let codingLanguages = ["CSS", "JavaScript", "HTML"];
codingLanguages.forEach(language=>{
    console.log(language);
})

// MAP 

let amazingHeroes = heroes.map(hero=> "The Amazing " + hero);
console.log(amazingHeroes); //Prints out amazing before each hero

let coolLanguages = codingLanguages.map(language => language + " is cool");
console.log(coolLanguages); //Prints out is cool after each language


// filter
// everything that is true in the condition gets put in the new array
let scores = [75, 80, 65, 90, 85, 20, 60];
let cOrAbove = scores.filter( score => score >= 70 );
console.log(cOrAbove);

let failingScores = scores.filter(score => score < 70);
console.log(failingScores);     

// reduce 
let expenses = [100, 50, 200, 150];

// returns a single value
// accumulator is the parameter that holds the returned compounding value
// the 0 is where it starts accumulating
// expense is the temp var that holds all the values of the array
let total = expenses.reduce((accumulator, expense) => accumulator + expense, 0);
console.log(total);   //500  change accumulator to 5 will peint 505 cause total =500 and we started the count at 5 - reduces the array to a single value


// Python Equivalent to js reduce 
// count = 5
// for expense in expense: 
//    count += expense
// return count 

// Sort

let numbers = [33, 3, 1, 6098354, 5, 2, 4, 42, 57, 5756];
let heroesSort = ['hulk', 'iron man', 'black widow'];

console.log(heroesSort.sort()) // [ 'black widow', 'hulk', 'iron man' ]
console.log(numbers.sort())

/* Compare Function
 Sorts the values according to the returned (negative, zero, positive) value.
 If the result is negative, a is sorted before b.
 If the result is positive, b is sorted before a.
 If the result is 0, no changes are done with the sort order of the two values.
*/

numbers.sort(
    function(a, b){
      return a - b;
    }
  )
  console.log(numbers);  // [ 1, 2, 3, 4, 5, 33, 42, 57, 5756, 6098354 ]

  // (b-a) will sort in descending order
    numbers.sort(
        function(a, b){
        return b - a;
        }
    )
    console.log(numbers);  // [ 6098354, 5756, 57, 42, 33, 5, 4, 3, 2, 1 ]

    // destructuring
let arr = ['hulk', 'iron man', 'black widow', "thor", "spiderman"];
let [hero1, hero2, hero3, hero4] = arr;
console.log(hero1);  //hulk
console.log(hero2);  //iron man
console.log(hero3);  // Black widow
console.log(hero4);  // thor

let numbersss = [1, 2, 3, 4,];
let [number1] = numbersss;
console.log(number1);  //1
console.log(numbersss);  // [1, 2, 3, 4]

// spread operator
// spreads or unpacks values from an array
let originalHeroes = ['hulk', 'iron man', 'black widow'];
let spreadHeroes = [...originalHeroes, "thor", "black panther"];
let copyOfHeroes = [...originalHeroes]; // makes a copy of originalHeroes
console.log(spreadHeroes);
console.log(originalHeroes);
console.log(copyOfHeroes);

let arr1 = [1, 2,]
let arr2 = [3, 4,]
let arr3 = [...arr1, ...arr2];
let combinedArr = [...arr1, ...arr2,];
console.log('Combined:'combinedArr);





