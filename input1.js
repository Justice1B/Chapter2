const readline = require('readline-sync');

let answer = readline.question("Would you like to hear a joke ? \nYour answer: ");
console.log(answer);


if (answer == "Yes"){
    console.log(`Why is a backstabber considered as a coin? Cus they're two-sided.`);
} else{
    console.log("invalid");
}

//2
let num = Number*readline.question("Enter a number:");
if (num % 2 == 0){
    console.log("It's divisible by 2");
} else {
   console.log("not divisible by 2")
}
if (num % 2 == 0){
    console.log("It's divisible by 3");
} else {
    console.log("not divisible by 3")
}
if (num % 2 == 0){
    console.log("It's divisible by 4");
} else {
    console.log("not divisible by 4")
}
if (num % 2 == 0){
    console.log("It's divisible by 5");
} else {
    console.log("not divisible by 5")
}
if (num % 2 == 0){
    console.log("It's divisible by 6");
} else {
    console.log("not divisible by 6")
}

//4
let guess = Number(readline.question("Enter number:"));
if (guess == 16){
    console.log("You won!");
} else if (guess < 16){
    console.log("Too small");
} else if (guess > 16){
    console.log("Too big")
}

//5 and 6
let cost = Number(readlline.question("Enter cost:"));
if (cost <= 0) {
    console.log("Invalid")
    let tax = cost * .08;
    let newTotal = cost + tax;
    console.log(`Your bill is $${newTotal.toFixed(2)}`);
}

//7
let mealCost = Number(readline.question("Enter cost:"));
let service = readline.question("How was the service? (great/good/average) : ");
let tip = 0;
if (service == "great"){
    tip = mealcost * .20;
} else if (service == "good"){
    tip = mealcost * .15;
} else if (service == "average"){
    tip = mealcost * .10;
}
console.log(`The total bill should be $${totalbill.toFixed(2)}`);