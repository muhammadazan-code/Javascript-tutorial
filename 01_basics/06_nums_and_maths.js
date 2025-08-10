const score = 400
// console.log(score);

const balance = new Number(4000)
// console.log(balance);
number = 1000.2389900
// console.log(number.toString());
// console.log(number.toFixed(1));
// console.log(number.toFixed(9)); Here after decimal 7 numbers but it add 0 two times.
// toFixed()
// toPrecision()
// toString()
// toLocaleString('type')
// console.log(number.toPrecision(8));
// number = 10000000
// console.log(number.toLocaleString());
// console.log(number.toLocaleString('en-PK'));

// ************************* Maths ****************************
/*
Math.abs()
Math.round()
Math.ceil()
Math.floor()
Math.min()
Math.max(
Math.random()// Get value between 0 and 1
random() * 10
(random() * 10) + 1
(Math.random() * (max-min + 1)) + min
*/

// console.log(Math.abs(-19));
// console.log(Math.abs(-0.988));
// console.log(Math.ceil(4.49));
// console.log(Math.ceil(-1.449));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-2.3));
// console.log(Math.max(2,4,2,4,2,21).toFixed(10).toString());
// console.log(Math.min(-4,4,2,-9));
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);

max = 50
min = 5 

console.log(Math.ceil((Math.random() * (max-min + 1))+min));
