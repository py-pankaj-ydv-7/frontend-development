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

const functionName = (param1, param2) => {
  // do some work
};

// sum function
// function sum(a,b){
//     return a+b;
// }

// let k =sum(5,6);
// console.log(k);

// console.log(sum(5,8));

// arrow function ********** it is a part of modern js
// arrow function se a+b ka formula laga ke solve kiya
let arr = (a, b) => {
  console.log((a + b) ** 2);
}; //  ese execute karne k liye kisi variable me store karn apadta hai .
console.log(arr(5, 9));

// multiplication

// function multi (a,b){
//     return a*b;
// }

// console.log(multi(6,8));

// arrow function se multiplication

let multi = (x, y) => {
  return x * y;
};

// console.log("This is multiply = " ,multi(3,8));

// practice code

// function CountVowels(str) {
//   //"ApnaColleg", count =5
//   let count = 0;

//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   // console.log(char);
// //   console.log("count = > ", count);
// return count;
// }

// let vouwel= CountVowels("pankajyadav");
// console.log("vowelCount = > ",vouwel);

// same question doing by arrow function

// let countvowel = (str) => {
//   let count = 0;
//   for (char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countvowel("aieou"));

/***** most important loop forEach loop in arrays */

let Arr =[1,2,3,4,5];

// Arr.forEach(function(val){
//   console.log(val);   // ye hota hai callback function , isko genrally forEach me arrow function me pass krte hai .
// })

Arr.forEach((val,idx,arr)=>{
  // console.log(val,idx,arr); // ye kar di arrow fun me .
  // val = for value
  // idx = for index
  // arr = for arrPrintItself
});

// forEach use for only arrays ******** most impo.

// theory pad li or notes bana liye copy me 

// Practice Question 
// for a given array of numbers, print the square of each value using the forEach loop.
// console.log("practice Questions ");

// let Mrr = [1,2,3,4,5];

// Mrr.forEach((val,idx)=>{
//   console.log(val*val,idx);
  
// })


/******* most imp , Map method , iska new array banta hai . */// mainly use for a create a new array for return value

// let num = [1,2,3,4,5];

// let newArr = num.map((val)=>{
//   return val**2;
  
// });

// console.log(newArr);
// console.log(num);

/******* most important *******/
/************** Filter ********/
// Create a new array of elements that give true for a condition/ filter. Eg. all even elements. // isme me bhi new array banta hai.

/* 
 let newArr = arr.filter((val)=>{

  return val % 2===0;
  
  })

  */

// let numArr = [1,2,3,4,5,6,7];

// let evenArr = numArr.filter((val)=>{
//   return val%2===0;
// })

// console.log(evenArr);

/***** most impo , Reduse method of Arrays */
// Reduce 
// perform some operations & reduce the array to a single value. it returns that single value.

// eg. 

// let Prr = [1,2,3,4];

// const output = Prr.reduce((res,curr)=>{
//   return res + curr;
// })

// console.log(output);

// find out the largest no.

let prr = [1,2,3,4];

const output = prr.reduce((res,curr)=>{
  return res > curr ? res : curr;
});

console.log(output);

