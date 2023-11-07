const myobject={
    js:'javascript',
    cpp:'c',
    rb:'ruby',
    swift:"swift by apple"

}
for(const key in myobject){
    console.log(myobject[key]);
}
for(const key in myobject){
    console.log(key);
}
for(const key in myobject){
    console.log(`${key} shoetcut is for ${myobject[key]}`);
}

const programming=["js","rr","cpp","py"]
for(const key in programming){
    console.log(key);
}