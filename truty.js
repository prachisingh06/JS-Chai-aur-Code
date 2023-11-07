const useremail="h@.com"
if(useremail){
    console.log("got user emial");

}
else{
    console.log("don't have user email");
}
const useremail1=""
if(useremail1){
    console.log("got user emial");

}
else{
    console.log("don't have user email");
}
const useremail2=[]
if(useremail2){
    console.log("got user emial");

}
else{
    console.log("don't have user email");
}

//falsy value
//false ,0, -0 ,bigInt , "" , underfinrd .NaN ,null,


//truthy value
// "0", 'flase',  "  "  , [], {}, function{}(),

if(useremail2.length===0){
    console.log("arrary is empty");
}

const emptyobj= {}
if(Object.keys(emptyobj).lenght=== 0){
    console.log("object is empty");
}
else{
    console.log("object");
}
