
// Arithmetic operators

// let a = 5;
// let b = 2;
// let c = a+b;

// console.log("a+b");
// console.log("a = ", a ,"& ", "b ",b );

// console.log("a+b = ",a+b);
// console.log(c);

// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ",a/b);
// console.log("a**b = ",a**b); // exponentiation

// Unary Operator

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

// a = a+1;        // shorthand = a++, a--
// console.log(a);


// Assignment Oprator

// let a = 5;
// let b= 2;

// a +=4;
// a -=4;
// a *=4;
// a /=4;
// a %=4;
// a **=4;
// console.log("A = ",a);


//comparison operator

// let a = 5;
// let b= 5;


// console.log("5 == 2", a== b);
// console.log("5 == 2", a!= b);


// logical operators

// let a = 6;
// let b = 5;

// let cond1 = a>b; // true
// let cond2 = a === 5; // true

// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 && cond2 =", cond1 || cond2);
// console.log("cond1 && cond2 =", !cond1 );

// Conditional Statements

/***** if condition *******/

// let age = 25;

// if(age > 18){
//     console.log("you can vote");
    
// }

// let mode = "light"
// let color;

// if(mode == "dark"){
//     color= "black"
    
// }
// if (mode == "light"){
//     color = "white"
    
// }

// console.log(color);

/***** if else condition *******/


// let mode = "red";
// let color ;

// if (mode === "dark"){
//     color = "black";
// }
 
// else{
//     console.log("white");
    
// }

// console.log(color);


//Q2. 

// let age = 15;
// if(age>=18){
//     console.log("you can vote");
    
// }

// else{
//     console.log("you can not vote");
    
// }

//Q3.  odd or even

// let num = 7;

// if(num%2===0){
//     console.log("even");
    
// }
// else{
//     console.log("odd");
    
// }



// syntax -> rules 

/***** else-if Statement ******/

// let age = 17;


// if(age < 18){
//     console.log("junior");
    
// } else if(age > 60){
//     console.log("Senior");
// } else{
//     console.log("middle");
    
// }


//Q.2 

// let mode = "blueberry";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if(mode === "blue"){
//     color = "blue";
// } else if (mode === "light "){
//     color = "white";
// }
// else if (mode === "pink"){
//     color = "pink";
// }
// else{
//     color = "yellow";

    
// }

// console.log(color);

//************ Ternary Operators **********/


// codition ? true output: false output

// let age = 14 ;

// let result = age >18 ? "adult" : "not adult";

// console.log(result);

// practice questions 

// Q1. Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not. 


// alert("helllo"); // one time pop up krke deta hai .
// let name = prompt("enter a number")
// console.log(name);


// ans

// let number = prompt("enter a number ");

// if(number % 5 === 0 ){
//     console.log(number, " is a multiple of 5 ");
    
// }
// else{
//     console.log(number,"is not a multiple of 5 ");
    
// }
// console.log(number);

//Q.2 Write a code which can give grades to students according to their scores.

/*0-100,A
70-89,B
60-69,c
50-59,d
0-40,f 
 

 */

let scores = prompt("Enter your scores");
let grades;

if(scores >=90 && scores <=100){
    grades = "A";
    
} else if(scores >=70 && scores<=89 ){
    grades = "B";
} else if(scores >=60 && scores<=79 ){
    grades = "C";
} else if(scores >=50 && scores<=69 ){
    grades = "D";
}else if(scores >=0 && scores<=59 ){
    grades = "F";
}
console.log(grades);
