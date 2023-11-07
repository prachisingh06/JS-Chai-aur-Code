//const tinderuser0 = new Object() // single turn object
const tinderuser = {} //non single turn object
tinderuser.id = "123abc"
tinderuser.name = "prachi"
tinderuser.islogn = false
//console.log(tinderuser);
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"prachi",
        lastname:"singh,"
    }
}
}
//console.log(regularuser.fullname);
//console.log(regularuser.fullname.userfullname.firstname);
const obj1 = {1: "a" , 2: "b"}
const obj2 = {1: "a" , 2: "c"}
const obj4 = { 2: "g" , 4: "h"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign( {},obj1 ,obj2, obj4)
const obj3 = {...obj1, ...obj2,...obj4}
//console.log(obj3);

const users= [
    {
        id:1,
        email: "ggj@gmail.com",
    }  ,
    {
      id: 2,
      email:"hgd@gmail.com",
    }
]
users[1].email
//console.log(tinderuser);

//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));
//console.log(tinderuser.hasOwanProperty('islogn'))


const course ={
    coursename:"jsuser",
    price: "222",


}
//course.email

const{price} = course
console.log(price);

{
    name:"prachi"
    coursename :"js"

}