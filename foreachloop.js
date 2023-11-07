const coading=["js","ruby","java","py","cpp"]

coading.forEach(function (item){
    console.log(item);
})

coading.forEach((item) =>{
    console.log(item);

})

coading.forEach( (item, index , arr)=>{
    console.log(item, index, arr);
})

const mycoading=
[
{
    languagename:"javascript",
    languagefilename:"javascript",
},
{
    languagename:"java",
    languagefilename:"java",

},
{
    languagename:"python",
    languagefilename :"py",
}
]

mycoading.forEach((item) =>{
    console.log(item.languagename);
})