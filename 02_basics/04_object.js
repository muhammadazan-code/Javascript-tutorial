const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.name = "Ali"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    userfullname: {
        firstName :"Ahmed",
        lastName:"Ali",
    }
}
// console.log(regularUser["userfullname"]['firstName']);
// console.log(regularUser.userfullname.lastName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1, obj2)
// First spread and then combine it
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id: 110,
        name: "John"
    },    {
        id: 111,
        name: "John"
    }
,    {
        id: 112,
        name: "John"
    }
,    {
        id: 113,
        name: "John"
    }

]
console.log(user[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



