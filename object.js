//object listerals
const mysym = Symbol("key1")
const jsuser = {
    name: "prachi",
    "fuull name":"prachi singh",
    mysym:"mykey1",
    age : 20,
    location: "jaipur",
    email :"email@gamil.com",
  isloggedin: false,
  lastloginday:["monday","saturday"]
    

}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser.mysym);
