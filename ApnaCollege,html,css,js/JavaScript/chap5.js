//** Fuction and Methods  */

// function MyFunction(){
//     console.log("Welcome to Apna College! ");
//     console.log("We are learning JS : ");
       
// }

// MyFunction();

// function MyFunction(msg){ // parameter
//     console.log(msg);

       
// }

// MyFunction("i love js"); // argument

// function sum(x,y){
//     // console.log(x+y);
//     s = x+y;
//     return s;
     
// }

// let val = sum(85,6);
// console.log(val);


// function -> 2 number, sum

// function sum(x,y){
    // local variables -> function k scope me rahta hai, block scope .
    // s= x+y;
//     console.log("before return ");
//     return s;
    
// }

// let val = sum (3,4);
// console.log(val);



/**** Arrow function  */
/* 
Arrow function => compact way of writting a function */

const functionName = (param1 , param2)=>{
    // do some work
}


// sum function 
// function sum(a,b){
//     return a+b;
// }

// let k =sum(5,6);
// console.log(k);


// console.log(sum(5,8));

// arrow function ********** it is a part of modern js 
// arrow function se a+b ka formula laga ke solve kiya 
let arr = (a,b) =>{
    console.log((a+b)**2);
    
}//  ese execute karne k liye kisi variable me store karn apadta hai .
console.log(arr(5,9));



// multiplication 

// function multi (a,b){
//     return a*b;
// }

// console.log(multi(6,8));


// arrow function se multiplication 

let multi=(x,y)=>{
    return x*y;
}

console.log("This is multiply = " ,multi(3,8));
