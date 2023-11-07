const marbal = ["a","b","c"]
const dc = ["a","b"]
marbal.push(dc);
//console.log(marbal);
const all = marbal.concat(dc);
//console.log(all);
const allone = [...marbal,...dc]
console.log(allone);

const another= [1,2,2,4,[4,5,7,] ,7,3,[6,9,7,]]
const real = another.flat(Infinity)
console.log(real);
console.log(Array.from("prachi and singh"));
console.log(Array.from({name:"prachi"})); //interviwe ques
let a1 = 100;
let a2 = 200;
let a3 = 400;
let a4 = 300;
console.log(Array.of(a1,a2,a3,a4));
console.log(Array.of(a1,a2,a3,a4,));