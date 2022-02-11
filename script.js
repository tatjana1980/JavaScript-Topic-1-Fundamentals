// 1
// Variables: Declare admin and name variables. Assign the value "John" to name. Copy the value from name to admin. Show the value of admin using alert (must output “John”).

let name;
let admin;

name = "John";
admin = name;

alert("must output" + " " + admin);


// 2
// Array: Complete the method which accepts such an array, and returns that single different number (length >= 3)
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let strayChar = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (strayChar !== numbers[i]) {
            return strayChar = numbers[i];
        }
    }
    return 0;
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// 3
// Array: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    let firstpart = "";
    let secondpart = "";
    let thirdpart = "";
    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            firstpart += numbers[i].toString();
        } else if (i >= 3 && i < 6) {
            secondpart += numbers[i].toString();
        } else if (i >= 6) {
            thirdpart += numbers[i].toString();
        }
    }
    return `(${firstpart}) ${secondpart}-${thirdpart}`;
}    

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// 4
// Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7


const deepCount = (arr) => {
   return arr
   .reduce((a, b) => {
      return a + (Array.isArray(b) ? deepCount(b) : 0);
   }, arr.length);
};

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));

// 5
// Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. 
// He wants to sell a ticket to every single person in this line. 
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Line.Tickets([25, 25, 50]) // => YES
// Line.Tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// Line.Tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)


function tickets(lineTickets){
  let ticket = 0;
  for (let i = 0; i < lineTickets.length; i++){
    lineTickets[i] == 25 ? ticket += lineTickets[i] : ticket -= lineTickets[i] - 25;
}
    if (ticket < 0){
    return "NO";
  } else {
    return "YES";
  }
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));

// 6
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// I

if (age < 14 || age > 90){

}

// II
if (!(age >= 14 && age <= 90)){
    
}

// 7
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while (i < 3){
    alert( `number ${i}!` ); 
    i ++; 
}


// 8
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

let num = +prompt("Input a number greater than 100");
while (num <=100 && num){
    num = +prompt("Input a number greater than 100");
}
console.log(num);


// 9
// Write a function min(a,b) which returns the least of two numbers a and b:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  console.log(min(2, 5));
  console.log(min(3, -1));
  console.log(min(1, 1));


// 10
// Rewrite the function using '?' and '||'.

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
