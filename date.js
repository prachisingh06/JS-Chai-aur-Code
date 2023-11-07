//date
//date is object
let mydate = new Date()
console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
//month stared by 0
let mydate1= new Date(2023, 0, 23)
console.log(mydate1.toDateString());

let mydate2 = new Date(2023, 3, 9, 3, 5)
console.log(mydate2.toLocaleString());

//but mm-dd-yy is started by 1

let mydate3 = new Date("2023-01-14")
console.log(mydate3.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);

console.log(Math.floor(Date.now()/1000));

let newdate4 = new Date()
console.log(newdate4.getMonth()+1);
console.log(newdate4.getDay());
console.log(`${newdate4.getDay()}and the time`);

newdate4.toLocaleString('default',{
    weekday:"long",
    
})