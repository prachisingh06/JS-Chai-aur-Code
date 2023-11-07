console.log("prachi");
let x=33; //mostly use by let becuse in scope does not change value 
var y="prachi"; //dont use 
x=55;
y="alka";
const z=4; // value is not change
console.log(z);
console.log(x);
console.log(y);
console.table([z,x,y]);
//prefer not to use var  because of  issue in block scope and function acope