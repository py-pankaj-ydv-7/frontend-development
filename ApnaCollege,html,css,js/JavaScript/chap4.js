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

for(let i = 0; i< items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}

console.log(items);

