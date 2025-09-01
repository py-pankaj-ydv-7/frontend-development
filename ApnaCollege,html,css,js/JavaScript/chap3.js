
// print 1 to 5 

// for(let count = 1; count<=5; count++){
//     console.log(count,"Apna College");   
// }

// console.log("loop has ended");

// calculate sum of 1 to 5 

// let sum = 0;
// for (let i =1; i<=100; i++){
//     console.log(sum=sum+i);
    
// }

// console.log("sum = ",sum);
// console.log("loop has ended");


/** While loop */

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

//************  Do while loop *******/

// let i = 20;

// do{
//     console.log("Apna college");
//     i++;    
// } while(i<=10);

// let i = 1;

// do{
//     console.log(i);
//     i++;
    
// }while(i<=5);

// ************** for of loop ***********, mostly use with arrays, stringds

// let str = "ApnaCollege * PANKAJ YADAV";
// let length=0;
// for(let i of str){ // i - iterator -> characters 
//     console.log("i= ",i); 
//     length++   
// }
// console.log("length = ",length);


// ************** for in loop *********** this loop is used in bojects and arrays 

// use in objects and arrays , ye loop hame key return karta hai kisi bhi value ki .

// let sutudent = {
//     name: "Pankaj Yadav",
//     age : 24,
//     cgpa: 8.28,
//     isPass: true
// }

// for(let key in sutudent){
//     console.log(k , "key and value ",sutudent[key]);
    
// }


// let's practice
// Q.1 print all even numbers from o to 100.

// let count = 0;


// for(let i = 0; i<=100; i++){
//     if(i%2 !==0){
//         console.log("even no = ",i);
//         count++;
         
//     }

// }

// console.log("total even no. b/w 0 to 100 ",count);


// Q.2 create a game where you start with any random gaemm number. Ask the user to keep guessing the game number until the user the user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the game numbr : ");
console.log(userNum);


while(userNum != gameNum){
   userNum = prompt("You entered wrong number. Guess again : ");

}

console.log("congratulations, you entered the right number ", gameNum);
