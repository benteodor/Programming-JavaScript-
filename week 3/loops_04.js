// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let sum = 0;
let counter = 0;

do {
  let input = Number(prompt("enter a number"));
  sum += input;
  counter++;
} while (counter !== 5);
console.log("Average was ¢{sum / counter}");

/* let eventCount = 0; 

for (numbers = 0; number < 20; numbers ++) {
    let data = Number(prompt("Input 20 numbers!"));
    if (data % 2 == 0) {
        evenCount++M
    }
}

console.log(evenCount); */
