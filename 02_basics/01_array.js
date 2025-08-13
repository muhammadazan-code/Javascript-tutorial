// array

const myArr = [0,1,2,3,3,4,5,true,"Ahmed"]


const myHeros= ["Abdul Qadeer Khan","Allama Iqbal"];

const myArr1 = []
console.log(myArr[2]);
// Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
// unShift() method add the element at 0 index
myArr.unshift(8)
console.log(myArr)
// shift() method remove the element at 0 index
myArr.shift()
console.log(myArr)
// includes() method check whether the value exist in the array or not.
myArr.includes(2)// true
//indexOf() method tell the index of element which we pass
console.log(myArr.indexOf(7));

// slice, splice
let myArr3 = [0,1,2,3,4,5]
console.log(`A `, myArr3);
const arr = myArr3.slice(1,3)
console.log(arr)
console.log(`B `, myArr3);
const arr1 = myArr3.splice(1,2,3)
console.log(arr1);
console.log(`C `, myArr3);





