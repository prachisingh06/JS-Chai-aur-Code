//const coading=["js","ruby","java","python","cpp"]
//const values = coading.forEach( (item) => {
    //console.log(item);
    //return item
//})
//console.log(values); //undefined
//for each loop does not return value

const mynums  =[1,2,3,4,5,6,7,8,9,10]
const newnums= mynums.filter ((num) => {
   return num > 4
})
//console.log(newnums);

//for each loop uses
const newnum =[]
mynums.forEach((num) =>{
    if(num>4){
        newnum.push(num)
    }
})
console.log(newnum);

const books =
[
{
    title:'book one' , genre:'fiction' ,publish:1981,
},
{
    title:'book one' , genre:'story' ,publish:2000,
},
{
    title:'book one' , genre:'history' ,publish:1991,
},{
    title:'book one' , genre:'fiction' ,publish:2090,
},{
    title:'book one' , genre:'history', publish:2081,
},
];

const userbooks= books.filter((bk) => bk.genre==='history')
console.log(userbooks);
const userbooks1= books.filter((bk) => {
    return bk.publish >=1995 && bk.genre ==="history"})
console.log(userbooks1);