

// async await >> promise chains >> callback hell

// callback hell  


// function Hello(){
//     console.log("hello!");
    
// }

// console.log("me pahle print ho gaya");

// setTimeout(Hello,2000)// timeout ; 2s = 2000 ms


// function sum(a,b){
//     console.log(a+b);
    
// }   // synchronous programming callback.

// function calculater(a,b, sumCallback){
//     sumCallback (a,b)

// }
// calculater(1,2, sum);

const hello = ()=>{
    console.log("hello");
}
setTimeout(hello,3000);