// var value3 = 300
// let value1 = 900
// const value2 = 489
// if(true){
//     let value1 = 10
//     // console.log(value1);
    
// const value2  = 20
// console.log(value2);

// var value3 = 30
// }
// // console.log(value1)
// console.log(value2);
// // console.log(value3);

// ;

// Nested scope
function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    // two()
}
one()

if(true){
    const username = "Adam"
    if (username == "Adam") {
        const website = " Tiktok"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


 // +++++++++++++++++++++++ interesting ++++++++++++++++
console.log(addOne(2)
);

 function addOne(num) {
    return num +1
}
console.log(addTwo(2)
);
 const addTwo =  function(num) {
    return num + 2
}
