let name = String("Azan")
const count = 4
console.log(name);
// console.log('My name is $name')
console.log(`My name is ${name} and my repo count is ${count}`);

// console.log(name.__proto__); {}
// Get the length of the string
console.log(`Length of ${name}: ${name.length}`);
//.toLowerCase it changes the whole string into lower case
console.log(`Lowercase: ${name.toLowerCase()}`);
// .toUpperCase it changes the whole string into upper case
console.log(`Upper case: ${name.toUpperCase()}`);
// trim()
 value =  " John "
console.log(`Before trim:${value}\nAfter trim:${value.trim()
}`);
value = "john gmail.com"
console.log(value.replace(' ','%2'));
// .includes check the value
console.log(value.includes("gmail"));
console.log(value.bold());
console.log(name.charAt(2));
console.log(name.indexOf('n'));
console.log(name.indexOf('b'));// -1

email = 'kdfjla;jfaj;lkajf-azan@gmail.com'
names = email.split('-')
// console.log(email.split('-'));
console.log(typeof(names));
console.log(names[1]);

let someNames  = "Flutter Dev"
console.log(someNames.substring(0,7));




