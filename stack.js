
const a="prachisingh";
let b=34567;
console.log('my name is'+a);
const ganename= new String('ruchisingh')
console.log(ganename[0]);
console.log(ganename.__proto__);
console.log(ganename.toUpperCase());
console.log(ganename.charAt(2));
console.log(ganename.indexOf('h'));

const newstring=ganename.substring(0,4)
console.log(newstring);
const newstring1=ganename.slice(-10,2)
console.log(newstring1);
const newstring2="    prachi    "
console.log(newstring2);
console.log(newstring2.trim());
const url ="http://prachi.com/prachisingh"
console.log(url.replace('%20','-'));  //worng output
console.log('hello my name ${b}'); //worng output