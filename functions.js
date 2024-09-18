function greet(fullName) { // parameter
  return "Hello " + fullName + "!";

  // this is ignored because its after the return
  console.log("I will not run");
}

// greet("George")
console.log(greet("George")); 

// Closures 
// Child(inner) function has access to parent(outer) variables 
function outer() {
  let message = "I am from the outer function";

  function inner() {
    console.log(message); 
  }

  return inner;
}

let closureFunc = outer(); 
console.log(closureFunc);
closureFunc(); 

// Arrow functions as Normal functions
function add(a,b){  
  return a + b; 
}

console.log(add(3,5));

// as arrow 
// the return is implied/built in
// return => 
  const addArrow = (a, b) => a + b;
console.log(addArrow(3,5));

const addArrow2 = a => a*5; 
console.log(addArrow2(3)); 

const greet = fullName => `Hello, ${fullName}`
console.log(greet("Adam Cain"))
const greet2 = fullName => `Hello, ${fullName}`
console.log(greet2("Adam Cain"))