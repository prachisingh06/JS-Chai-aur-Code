//immediately invoked function expression (iife)

(function chai(){   //named iife
      console.log(`DB CONNECTED`);
})();
//()()first paramthies function diffection and secound paramthies execution 
//why use iife
//golbal scope ke poulation se problem hoti h kai bar to us golbal scope ke jo bhi varibales ya decelartion h uske poulation ke htane ke liye use krte h

( function prachi(name){   //arraay iife
    console.log(`db connected two ${name}`);
})('alka');

( (address) => {  //unname iife
    console.log(`dbms connected ${address}`);
})('chunar')