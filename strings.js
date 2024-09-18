const greeting = "Why, hello, there";

// Basic string manipulation
console.log(greeting.length); // no () because this is a property
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// Subsection of string
console.log(greeting.substring(0, 4));  

// Split string by separator 
console.log(greeting.split(',')); 

// 
console.log(greeting.slice(-4));  // gets the word here , -3 would be (ere) 

// Slice 
console.log("slice")
console.log(greeting.slice(-3)); // ere 



let sentence = "the quick brown fox jumps over the lazy dog";

// Check if string includes the word fox 
console.log(sentence.includes("fox")); // true

// Check where the index of the word the is (case sensitive) 
console.log(sentence.indexOf("the")); // 0

// Check where the last index is 
console.log(sentence.lastIndexOf("the")); // 31

// REGEX!!!!

// Case sensitive 
let pattern = /hello/;
console.log(pattern.test("why hello there"));

// Case in-sensitive 
let pattern2 = /hello/i;
console.log(pattern2.test("why Hello there"));


// REG EX is built in no need to import it
// Digit and 1 or more 
// G is global search (keep going) 
pattern = /\d+/g;
console.log(pattern.test("abc123abc456"));  //True = get Bool value
console.log("abc123abc456".match(pattern)); // [ '123', '456' ]
//Taking out the G gives a different result of just the first match 

// Example: Analyzing Social Media Posts
let post = "Hey @JohnDoe, did you see the new #JavaScript tutorial? #coding";

// Finding the usernames
let mentions = post.match(/@[A-Za-z0-9_]+/g); 
console.log("Mentions:", mentions) // found it dur to reg ex match 

// Finding the hashtags
let hashtags = post.match(/#[A-Za-z0-9_]+/g);
console.log("Hashtags:", hashtags) // found it dur to reg ex match




