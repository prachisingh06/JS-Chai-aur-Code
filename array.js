//array
//js ki array resizeable hote h
const myarr  = [0, 1, 2, 3, 5, 6]
const myheros = ["a","b","h"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr[0]);
//jb copy operation krte h to ye shallowcopy(jo bhi change krege vo orignal array me bhi change hoga) and deep copy bnata h
//array method
myarr.push(6)
console.log(myarr);
myarr.push(9)
console.log(myarr);
myarr.pop()
console.log(myarr);
console.log(myarr.includes(9));
console.log(myarr.indexOf(4));
myarr.unshift(9)
console.log(myarr);

const newarr = myarr.join()  //join change the type in string
    console.log(newarr);
    console.log(typeof newarr); 

 //slice splic
//most important question
//defferent between slice and splic 
//slice(1,3)  print(1, 2)
//splice(1,3) print(4,5,6)
    console.log("slice and splic");

    console.log("A",myarr);
    const myn1= myarr.slice(1,3)
    console.log(myn1);
    console.log("8",myarr);

const myn2 =myarr.splice(1,3)
console.log(myn2);






