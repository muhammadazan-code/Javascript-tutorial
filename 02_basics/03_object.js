// Singleton
// Object.create() constructor object
const mySymb = Symbol("Key1")
// Object Literals

const MyObject = {
    name: "Azan",
[mySymb]: "1",
    "Profession": "Flutter Dev",
    age: 20,
    isLoggedIn : false,
    city: "Istanbul",
    lastDayLogin: ["Monday", "Thursday"],
    email: "azan@google.com"
}
console.log(MyObject);

 MyObject.email = "azan@chatgpt.com"

 console.log(MyObject.email);
 console.log(MyObject[mySymb]);
 console.log(typeof MyObject.mySymb);
 
 console.log(`Symbol ${MyObject.mySymb}`);
 
 
 console.log(MyObject.Profession);
 
 
// console.log(MyObject.Profession);
// console.log(MyObject.name);
// console.log(MyObject["age"]);

MyObject.greeting = function (){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(MyObject.greeting());

MyObject.Profession = "App dev",
// Object.freeze(MyObject)
MyObject.Profession = "Android Dev"
console.log(MyObject);

MyObject.greetingTwo = function(){
    console.log("Hello JS User, How are you");
}
console.log(MyObject.greetingTwo());
console.log(MyObject.greeting());


