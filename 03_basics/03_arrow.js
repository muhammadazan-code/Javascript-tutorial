const user = {
    username: "Azan",
    price: 888,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
        
    },
}
// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()
console.log(this);
//Refers to empty object
//Window object in browser

function chai() {
    let username = "john"
    console.log(this.username);// Undefined
    console.log(username);// It will print John
}
chai()

const myFunction= ()=> {
    let myName = "habib"
    // console.log(this.myName); UNDEFINED{}
}
myFunction()

const addTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(addTwo(3,5));
const addTwoNumber = (num4, num5) => num4 +num5;

console.log(addTwoNumber(9,4));


