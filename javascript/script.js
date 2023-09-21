// variables :- data store karne k liye use hota hai variables.


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

//functions mainly teen kaam k liye use hote hai.functions.functions
//1) jab aapka code aap turant nahi chalana chaahte ho future mein chalana chahate ho  
//2) jab aapka code aap reuse karna chahte ho 
//3) jab aap code chalana chahate ho with different data

// function holobolo(){
//     console.log("hello ");
// }

//array = group of values 
// arrays = hum ek variable mein ek value store kar paate hai par jab humein ek se jaada value store karni ho tab fir use hota hai array ka , matlab ki array aapko freedom deta hai ek se jaada value use karne ki 

// var a =[12,13];

// objects 

// ek se jada bande ki baat ki to hua array , ek bande ke baare mein saari baat ki to hua object

// object hai ek bande ki details ko hold karna, in a key value pair 

//1) blank object
// var a = {}

// // 2) filled obj 

// var a={
//     age :24,
//     name: "Harsh",
//     email: "email@male.com",
//     linkedin: "harsh",
//     contact: 356654365334
// }

// var ghadi ={
//     brand: "kenneth cole",
//     price: "16k",
//     color: "silvar",
//     type: "automatic",// or ye sab properties hai
//     digital: false
//  //   kuchhbolo: function(){}// ye method hai q ki isme function hai (method me bhi property hoti hai)
// }

// // hum objects ki values bhi change kar sakte hai 

// ghadi.brand="puma"

/***** java script advance crash course  */

// the difference between var and let const

// var old js mein tha 
// var function scoped hota hai => var apne parent function mein kahi bhi use ho sakta hai
// var adds itself to the window object

// function abcd(){
//     for(var i = 1; i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd();
// let const new js mein hai
// let const braces scoped hota hai 
// let const does't adds
//js mein kai saare features hai par kuchh features jo hum use  karte hai wo features wo nahi hai par fir bhi use kar paate hai kyoki wo features js langauge use kar leti hai window se, aur window hai ek box of features given by browser to use with js .
// features ---------------->
// alert , console aur bhi bahut saare . 

// Heap memory --->>   jitne bhi variables ya data hum baanaate hai unhe store kahi to karna padta hai uske liye hota hai heap memory.


//Execution Context --->(imaginary dabbba  ) execution context ka matalab jab bhi hum function chalaayenge fnc apna ek khudka ek imaginary continer bana lega jisme uski teen chije hogi :
//1) variables
//2)functions inside that parent fnc
//3)lexical environment of that function// ye batata hai sir aap kin kin chijo ko use kar sakte ho ya nahi .

// defination of ec -->> execution context is a container where the function's code is executed and it's created whenever a function is called , it contains 3 things, variables, functions and lexical environment.

// lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function kin cheejo ko access kar sakta hai and kinki nahi , matlab ki it holds it's scope and scope chain


//turthy and falsy ---> js mein kuchh bhi likho wo mainly do prakaar mein se kisi ek prakaar ko belong karti hai . 
// falsy values ye hai = 0  false undefined null NaN(not a number) document.all
// turthy values , or baki sab r=truthy values hi hoti hai

// foreach loop srf array pe chalta hai matlab ki jab bhi tumhaare paas ek array ho, tab use mein kaun aata hai foreach loop aata hai
// for example 

// var a = [1,2,23,34,4,23,4,3,45,54,3,23];

// a.forEach(function(val){
//     console.log(val+2);
// })

//foreach kabhi bhi by default aapke array mein change nahi karta wo aapko changes krke deta hai array ki temporary copy par jiske wajah se array humesha same rehta hai

//forin--> objects par loop karne ke liye hota hai forin loop

// var obj={
//     name:"pankaj",
//     age:22,
//     city:"bhopal"
// }

// for(var key in obj){

//    // console.log(key)
//    // console.log(obj[key]); // is se sirf j ki values print hogi.
//    // console.log(key,obj[key]); // is se dono ek sath print ho jayenge .
// }

//callback functions --> jab bhi koi aisa code jo baad me chalta hai aap  likhoge , kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi , aise code ke comletion par js ko btaya jaata hai ke wo complete hogya aur aap use chala sakte ho, ye bataane ka kaam callback ka hai.
// ye asycronous js hai

// setTimeout(function(){
//     console.log("2 secound baad chala ");
// },  2000);// yahi call back function hai


//aisa code jo baad me chalta hai use hum ek function dedete hai ke bhaiya jab complete ho jaana to ye function chala dena , aur wo function ja hum dete hai wo ek normal fnc hi hota hai aur use kahte hai callback fnc

// first class functions 
// js mein ek concept hai jiska matlab hota hai ki aap fnc ko use kr sakte ho as a value 

// function abcd (a){
//     a();
// }

// abcd(function(){console.log("hello");})


/*** how arraysare made  behinds the sceens */

// var arr = [1,2,3,4];

// arr[-1] = 2;

// array ka pata kese karenge ki vo kab array hai or kab bo object hai .

//Array.isArray([]) ---> ye hame true dega 
//Array.isArray({}) ---> ye hame false dega 


/** how to delete  object prop  */

// var a = {
//     name :"pankaj",
//     age:22
// }
// delete a.age;



/*************************************** Master Advanced javascript concepts and become a javascript ninza */

// higher order functions

// function abcd(val){

// }
// abcd(function(){})

// constructor function

/*  */

// function saanchaofBiscuit(){
//     this.width =12;
//     this.height=22;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var bis1 = new saanchaofBiscuit();
// var bis2 = new saanchaofBiscuit();
// var bis3 = new saanchaofBiscuit();

// new => jab bhi new lagta hai humesha ek blank object apne man me bana lo 
// {

// }

// function abcd(){
//     this.age=12;
// }

// new abcd()

// {

//     age:12;
// }

//iife=> immediately invoked function expression 
//iife hai function ko turant chala ne ki kala , 9s tareeke se ki hum log koi private variable bana paaye 
// ye private variable banane k kaam ataa hai .

//prototype inheritance 

// var human = {
//     canFly : false,
//     canTalk: true,
//     canWalk: true,
//     haveEmotions: true,
//     hasFourLegs: false
// }

// var sheriyansStudent = {
//     canMakeAmazingWebsite: true,
//     canMakeAwesomeAnimations: true,
//     canMakerWorldClassAwwwardedWebsites: true

// }

// sheriyansStudent.__proto__ = human;

// this ki baat chal rahi hai 

// function abcd(){
//     console.log(this);
// }
// abcd();// ye window dega 


// yaha methods ki baat chal rahi hai 

// ek function jo object k andar bana ho, use method kahate hai 

// var obj ={
//     baatkaro: function(){ // for example ye method hai 
//     console.log(this);
// }
// }
// obj.baatkaro();

// yaha call apply bind ki baat chal rahi hai

// function abcd (){
//     console.log(this.age);
// }
// var obj = {age : 24} // this is call

// abcd.call(obj)

// function abcd (val , val2, val3){
//     console.log(this,val, val2,val3);
// }
// var obj = {age : 24} // this is call

// abcd.call(obj,1,2,3)

// function abcd (val , val2, val3){
//     console.log(this,val, val2,val3);
// }
// var obj = {age : 24} // this is call

// abcd.apply(obj,[1,2,3])


//bhind

// function abcd (){
//     console.log(this);
// }
// var obj = {age : 24} // this is bind ye code ko chalata nahi hai

// abcd.bind(obj,1,2,3);

// pure or impure function 





/********************************* master async javascript , wait it is and how to use it  */

//ek kaam jab tak complete nahi hoga tab tak dusra kaam nahi hoga , ek ke baad ek kaam perform hoga use hi hum sync kahte hai 
// kuch task ko hum ek sath chala de or jiska ans sabse pahle milte jaye use hum A sync bolte hai .


//sync matlab ek ke baad dusara hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga .
//Async matalab saaare kaaam ek saath  shuru kardo , jiska ans pahle aaajaye uska jaawab de dena.

// kaise pata chalta hai ki hum sync code likh rahe ya async ?

/* agar in sab ka use kar rahe hai to ye async  hai 
 setTimeout 
 setInerval
 promises
 fetch                   
 axios
 xmlhttpRequest  */


 // async js hai kya ? 
 // kai baar aapka final code depended hota hai kisi aur k server par , is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya nahi kr sakte is writting sync code , isse nipatne ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi anwer aaye humara answer ke respect mein chalne waala code chal jaaye 

 ///* event loop side stack se main stack me chije leke attaa hai .


 /**
 fetch 
 axios 
 promises  agar hai sab hai to async or isko baaa d me chalane k liye use karte hai (then catch , callbacks  , async await)
 settimeout
 setinterval


  */

 // ****  callback humesha ek function hota hai, ye sirf tab chalta hai jab async code ka completion hojaata hai

 /**
  for example :- setTimeout(function(){}, 10000) ise ko kahte hai call back fuction
  */

  //async code likhne ke liye 

//   fetch 
//   axios 
//   promises  
//   settimeout
//   setinterval
 
  // inka ans chalane k liye hota hai callbacks , then catch , async await
  
 /* 
 promises example  ..............

 var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else {
        return rej();
    }
 })

 ans
 .then(function(){
    console.log("resolve hogaya tha ")
 })
 .catch(function()){
    console.log("reject hua tha !")
 }
 */

 // user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject

//  var ans = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()* 10);

//     if(n<5){
//         return res();
//     }
//     else {
//         return rej();
//     }
//  })

//  ans.then(function(){
//     console.log("below");
//  })

//  .catch(function(){
//     console.log("above"); 
//  })




// async await :- koi bhi esa function jisme aap async code likhenge , kyoki async code hai to aap promises ka istemaal kar sakte hai, jab uska answer aayega aapko then lagana padega , us then ko lagaane se bachne ke liye , aap async await ka istemaal kar sakte hai.


// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega
// for example 

// async function abcd(){
//    let raw= await fetch(`https://randomuser.me/api/`);
//    let ans = await raw.json();
//    console.log(ans);
// }

 // 5 use cases ekdum real world waale 
 // node mein jab db
 //fetch 
 //settimeout
 //setinterval

 //[concept aside ]
 //concurrency and parallelism
 // concureency => js mein sync code and async code ek saath process ho raha tha ye hai concurrency 

 //parallelism => focus jaada karta hai different processors and uske cores par kaam ko chalaane par 
 //throttling => kisi code ko control karna number of executions


 /*************************************** DOM :- DOCUMENT OBJECT MODEL , BASICS ****************************/

 