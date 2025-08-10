let myDate = new Date(2025,8,1)
console.log(myDate.getMonth());
console.log(myDate.getSeconds());

console.log(myDate.toString());
myDate = new Date(2022,0,1)
console.log(myDate.toDateString());
myDate = Date.now()
console.log(myDate.getMonth);
// console.log(myDate.getTime());


/*
Functions:
toDateString()
toLocaleString()
toString()
.getTime()
.getDay()(
Date() => 

*/
let today = new Date()
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.toLocaleString());

let november = new Date(2022,9,13)
console.log(`Month: ${november.getMonth()}`);
console.log(`Date: ${november.getDate()}`);
console.log(`Year: ${november.getFullYear()}`);
console.log(`Day: ${november}`);

