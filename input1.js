const readline = require('readline-sync');

let answer = readline.question("Would you like to hear a joke ? \nYour answer: ");
console.log(answer);


if (answer == "Yes"){
    console.log(`Why is a backstabber considered as a coin? Cus they're two-sided.`);
} else{
    console.log("invalid");
}