// Convert numbers to string

/*let answer = 42;
let stringAnswer = answer.toString(); // Converts to "42"

console.log(stringAnswer);
*/

/*const number = 28;
let stringNumber = number.toString();
console.log(stringNumber);*/

// Convert strings to numbers

/*let str = "30";
let numericValue = Number.parseInt(str, 10);

console.log(numericValue);
*/

/*let str = "20";
let numericValue = Number.parseInt(str, 10);
console.log(numericValue);*/

//Number.parseInt(string, radix);
// The first parameter is the string that you'd like to convert into a number. The second argument is the radix that will be used in the conversion. The radix is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is 10 which represents the decimal system.

// Exercise (cases for converting to a number)
/*let a = 10;
let b = "30";
b = Number.parseInt(b, 10);
let sum = a + b;
console.log(sum);*/

/*let x = 15;
let y = "10";
y = Number.parseInt(y, 10);
let subtraction = x - y;
console.log(subtraction);*/

// Limiting Decimal Places in JS

/*let number = 2.34567;
let limitedNumber = number.toFixed(2);
console.log(limitedNumber);*/

// JavaScript Math Object

/*let num = -7.77;
let absolute = Math.abs(num);
console.log(absolute);
*/

let num = -5.58;
let rounded = Math.round(num);
console.log(rounded);
