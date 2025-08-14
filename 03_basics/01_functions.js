// syntax of writing function
function myFunction(){
    console.log("Hello World");
    
}
// myFunction()
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    // myFunction()
}

// addTwoNumbers(1,2)
// addTwoNumbers(1,"4")
// addTwoNumbers(1, null)
// addTwoNumbers(1, undefined)
// // true  => 1
// addTwoNumbers(2,true)
// // false => 0
// addTwoNumbers(1, false)
const result = addTwoNumbers(1,4)
// console.log(result);// It will give an error because we don't return anything from addTwoNumbers() method.

function subtractTwoNumber(num1, num2){
    let result = num1 - num2
    // return result
    return num1 - num2
}
const a = subtractTwoNumber(2,1)
// console.log(`Result : `,a);

function loginUserMessage(username){
    if (!username) {
        return `Enter correct username`
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ibrahim"));
// console.log(loginUserMessage('Sam'));
console.log(loginUserMessage());


