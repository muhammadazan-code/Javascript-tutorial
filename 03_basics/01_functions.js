// // syntax of writing function
// function myFunction(){
//     console.log("Hello World");
    
// }
// // myFunction()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//     // myFunction()
// }

// // addTwoNumbers(1,2)
// // addTwoNumbers(1,"4")
// // addTwoNumbers(1, null)
// // addTwoNumbers(1, undefined)
// // // true  => 1
// // addTwoNumbers(2,true)
// // // false => 0
// // addTwoNumbers(1, false)
// const result = addTwoNumbers(1,4)
// // console.log(result);// It will give an error because we don't return anything from addTwoNumbers() method.

// function subtractTwoNumber(num1, num2){
//     let result = num1 - num2
//     // return result
//     return num1 - num2
// }
// const a = subtractTwoNumber(2,1)
// // console.log(`Result : `,a);

// function loginUserMessage(username){
//     if (!username) {
//         return `Enter correct username`
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("Ibrahim"));
// // console.log(loginUserMessage('Sam'));
// console.log(loginUserMessage());

// Functions with object

function calculateCartPrice(value1, value2,...num1){
    return num1
}
result  = calculateCartPrice(2,3,4,5)
console.log(calculateCartPrice(1,2,3,4));
console.log(result[0]);

const user = {
    username: "Azan",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
const newArray = [1,2,3,4,5,100]
function secondValue(getArray){
    return getArray[2]
}
console.log(secondValue(newArray));
