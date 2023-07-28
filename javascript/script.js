// hoisting -- variable and functions are hoisted which means there declaration is moved on the top of code 

// types in js 
// primitives and reference 

//primitives -- number, string ,null , undefined , boolean
//reference -- [] () {} , reference jinme brackit ho 
// aisi koi bhi value jisko copy karne pr real copy nahi hota , balki us main value ka reference pass ho jaata hai , use hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti  hai

// var a = 12;
// var b =12;

// b=b+2;

// var a = [1,2,3,4];

// var b=a;

// b.pop();

// loop ka matalab repeat 
// 1 1 1 1 1 1 1 1  1 1 1 1 1 
// 1 2 3 4 5 6 7 8 9 10 
// console.log("pankaj");
// console.log("pankaj");
// console.log("pankaj");
// console.log("pankaj");
// console.log("pankaj");

// for(var i =25;i<=50;i++)
// {
//     console.log(i);
// }

// functions 
// function ka matlab aap kuchh code ko likh kar koi naam de sakte ho and baad mein usey use kar sakte ho with that name as many times .
// function = code ko naam dena 

//functions mainly teen kaam k liye hote hai.functions.functions
//1) jab aapka code aap turant nahi chalana chaahte ho future mein chalana chahate ho  
//2) jab aapka code aap reuse karna chahte ho 
//3) jab aap code chalana chahate ho with different data

// function holobolo(){
//     console.log("hello ");
// }


// arrays = hum ek variable mein ek value store kar paate hai par jab humein ek se jaada value store karni ho tab fir use hota hai array ka , matlab ki array aapko freedom deta hai ek se jaada value use karne ki 

// var a =[12,13];

// objects 

// ek se jada bande ki baat ki to hua array , ek bande ke baare mein saari baat ki to hua object

// object hai ek bande ki details ko hold karna, in a key value pair 

//1) blank obj
var a = {}

// 2) filled obj 

var a={
    age :24,
    name: "Harsh",
    email: "email@male.com",
    linkedin: "harsh",
    contact: 356654365334
}

var ghadi ={
    brand: "kenneth cole",
    price: "16k",
    color: "silvar",
    type: "automatic",// or ye sab properties hai
    digital: false
 //   kuchhbolo: function(){}// ye method hai q ki isme function hai 
}

// hum objects ki values bhi change kar sakte hai 

ghadi.brand="puma"