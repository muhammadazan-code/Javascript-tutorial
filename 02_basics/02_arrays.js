const nationHero = ["Allama Iqbal","Muhammad Ali Jinnah"]
const myArr = ["Shouqat Khan","Sir Syed Ahmed Khan"]

nationHero.push(myArr)

console.log(nationHero)
console.log(nationHero[2][0])
// First way of adding two array
const allHeros = nationHero.concat(myArr)

console.log(allHeros);
// Second way of adding array
const all_new_hero = [...nationHero,...myArr]
console.log(all_new_hero);

const another_array = [1,2,3.[4,5,6],[6,7,[8,9,10]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ali"));
console.log(Array.from("Hammad"));
console.log(Array.from({name: "Subhan"}));

let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1,score2, score3));





