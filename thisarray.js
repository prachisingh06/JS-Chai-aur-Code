const user = {
    username:"prachi",
    price: 333,

    welcomemessage :function(){
        console.log(`${ this.username} ,welcome to website`);
        console.log(this);

    }
}
//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()
//console.log(this);   //browser ke ander sbse global object h vo WINDOW h.

//function chai(){
    let username ="prachi"
    console.log(this.username);

//chai()

const chai = () => {
    let name="prachi"
//console.log(this);
}
//chai()
const addtwo =(num1,num2) => { //explecity method
    return num1+num2
}
console.log(addtwo (3,12));
const addthree =(num1,num2,num3) =>  num1+num2-num3 //implecity method

console.log(addthree (3,12,6));

