
//   Lesson 2: Assignment | JavaScript Control Structures & Functions

//   Exploring Conditional Statements and Loops

//   Task 1:

function login(username, password) {
  if (username == "admin" && password == "password") {
    isLoggedIn = true;
    console.log("Thank you for logging in");
  } else {
    console.log("Login has failed, please try again");
  }
}
let cart = [];
function addToCart(item) {    
  if (isLoggedIn) {
    cart.push(item);
    console.log("Item added to your cart");
  } else {
    console.log("Please log in to add items to the cart");
  }
}

//    Task 2:

let products = ["rake","bat","basketball", "hat", "cheese", "vampire repellant", "silver bullets"]; 
let userChoice = prompt("Would you like to add an item to your cart? (yes or no)"); // Extra credit for using a prompt

if (userChoice == 'yes'){
    for (let product of products){
        console.log(product);
    }
}
else{
    console.log("No items added to cart");
}

//     Task 3:

let prices = [10, 20, 30, 40, 15, 120, 200];
let total = 0;
for (let i = 0; i < cart.length; i++){
    total += prices[i];
}
console.log("Total : $" + total);


//     Exploring Functions in JavaScript


//     Task 1:

let balance = 0;
function deposit(amount){
    balance += amount;
    console.log("Congrats, you deposited" + amount );
}

//     Task 2: 

function withdraw(amount){
    if (amount > balance){
        console.log("Stop being poor!!");
    }
    else{
        balance -= amount;
        console.log("Congrats, you withdrew" + amount + "Enjoy your money");
    }
}

//      Task 3:

function getBalance(){
    console.log("Your balance is:" + balance + "We hope this is good news for you");
}


