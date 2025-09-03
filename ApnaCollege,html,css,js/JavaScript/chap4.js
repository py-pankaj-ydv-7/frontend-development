////************* Arrays *********/

// let marks = [97,82,76, 64,36];
// console.log(marks);         
// console.log(typeof (marks));         
// console.log(marks.length);//    property= value deti hai ,  method = kaam karthai a 


//array indices 
// marks[3] = 99 
// console.log(marks[3]);

// looping over an Arrays
console.log("Looping over an arrays ");

let heroes = ["ironman", "thor","hulk","shaktiman","spiderman","antman"];

for(let i= 0; i<heroes.length; i++){
    // console.log(`${i} ${heroes}`);
    // console.log(heroes[i]);   
}

// array me for of loop ka jada use krenge abhi

for(let hero of heroes){
    // console.log(hero);    
}

let cities = ["delhi","pune","mumbai", "hyderabad","gurgaon"];
for(let city of cities){
    // console.log(city.toUpperCase());
    
}

// practice questions 
//Qs. For a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// let avg;
// for(let students of marks){
//     console.log(students);
    
// sum=sum+students;// shorthand => sum +=student
// avg=sum/marks.length; // avg of marks 
// }
// console.log(`this is total of marks = ${sum}`);
// console.log(`this is avg ${avg}`);


//Qs. For a given array with prices of 5 items -> [250,645,300,900,50] .All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

let items = [250,645,300,900,50];
// let i = 0;
// for (val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i]= items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
    
//     i++;
// }

// console.log(offer);

// for(let i = 0; i< items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }

// console.log(items);

/***** arrays methods  */
/*
Push() = add to end , pop() = delete from end & return, toString()= Convert array to string  

*/


let fooditems = ["potato", "apple", "litchi","tomato"]
// console.log(fooditems);

// fooditems.push("banana"); // yr original array me hi change krta hai 
// console.log(fooditems);


/*** pop() */

// let deletedItem=  fooditems.pop()
// console.log(fooditems);
// console.log("deletedItem = ",deletedItem);


/****  toString() = to convert array into String */


// console.log(fooditems.toString()); // ye original array k andar change nahi hota hai . 


/***** conCat() method */ // original array ko change nahi karta hai.

let marvelHeroes=["thor","spiderman","ironman","Dr Strange"];
let dcHeroes = ["superman","batman"];
 
/* unshift() method ye elements ya items ko aage se add karta hai  */
marvelHeroes.unshift("Antman");
let Honda = marvelHeroes.concat(dcHeroes);

// console.log(Honda);


// console.log(marvelHeroes);

/*** shift () method ye aage se delet kar deta hai element ya items ko  */

// marvelHeroes.shift();
// console.log(marvelHeroes);


/*** slice (), return a piece of the array */
// eg .  slice(startids,endidx) ===> kabh kabhi iska array ki copy banana k liye bhi use karte hai .

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));



/**** splice() method : change array (add,remove, replace) */
// eg. splice(startidx, delCount, newEl1...) // ye original array k andhar change karta hai .


let arr = [ 1,2,3,4,5,6,7];

// arr.splice(2,2,1001,1220)

// you only add element

// arr.splice(2,0,103)
// console.log(arr);

//Delete Element

// arr.splice(3,1)
// console.log(arr);


//  Replace Element
// arr.splice(3,1,101)
// console.log(arr);


// arr.splice(4);
// console.log(arr);


//Qs. create an arry to store companies => "Blooming","MicroSoft","Uber","IBM","Netflix"

/*  
a. Remove the first company from the array
b. Remove Uber & ola in its place 
c. Add Amazone at the end 

*/

let companies =["Blooming","MicroSoft","Uber","IBM","Netflix"];
console.log("Before applying methods : ",companies);


// companies.shift()
// console.log("After applying methods : ",companies);

// companies.splice(2,1,"ola")
// console.log("after applying method : ",companies);

companies.push("Amazon")
console.log("after applying methods : ",companies);

