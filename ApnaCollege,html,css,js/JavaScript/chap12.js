

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

// const hello = ()=>{
//     console.log("hello");
// }
// setTimeout(hello,3000);


// get data from database*****************

// function getData(dataId,getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
//     getData(1, ()=>{ // callback pass, isi ko callback hell bolte hai , (nested callbacks)
//         getData(2,()=>{
//             getData(3, ()=>{
//                 getData(4, ()=>{
//                     getData(5,()=>{
//                         getData(6)
//                     });
//                 });
//             });
//         });
//     }); 


    //****  how to use promises ****/
    // resolve or reject ye dono handlers hai , apne aap me hi function hai , callback functions kah sakte hai , callback hi hai.

// const getPromise =()=>{
//    return new Promise((resolve,reject) =>{
//     console.log("I am promise");
//     reject("some error occured");
//     // resolve("succes");
//     }); 
// };

// let promise = getPromise();
// promise.then((result)=>{
//     console.log("Promise fulfilled",result);
// })

// promise.catch((error)=>{
//     console.log("rejected! ",error);
    
// })


// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("success!");
//     reject("some error occured ");
// });

// eg . data Api

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//          console.log("data " ,dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//        },5000)
        
//     });
// }



/***** Promises chain ***/


// function asyncFunc1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },3000);
//     });
// }

// function asyncFunc2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             reject("data is not get ");
//         },6000);
//     });
// }

// console.log("fetching data1");

// let p1 = asyncFunc1();
// p1.then((result)=>{
//     console.log(result);
//     console.log("fetching data2");
// let p2 = asyncFunc2();
// p2.catch((reject)=>{
//     console.log(reject);
// })
// })


// console.log("fetching data2");
// let p2 = asyncFunc2();
// p2.catch((reject)=>{
//     console.log(reject);
// })



// callback hell wala kaam promise chain se 

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//          //2s
//     setTimeout(() => {
//         console.log("data ", dataId);
//         resolve("success")
//     }, 2000);

//     })
   
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//         getData(3).then(()=>{
//             console.log(res);
            
//         })
        
//     }) 
// })

// actually promises chainning is.

// getData(1).then((res)=>{
//     return getData(2);    
// }).then((res)=>{
//     return getData(3);
    
// }).then((res)=>{
//     console.log(res);
// })


// **************** Async - await *****
// async function always returns a promise.
/* 
async function myFunc(){
..............
..............
..............

}

// awit pauses the execution of its surrounding async function until the promise is settled.

*/

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200)
            
        }, 2000);
    })
}

async function getWeatherData(){
  await  api();// 1st call
  await  api();// 2nd call
}

async function hello(){
    console.log("Hello");
}

// wahi kaam async await se kitna simple ho gaya hai .

function getData(dataId){
    return new Promise((resolve,reject)=>{
         //2s
    setTimeout(() => {
        console.log("data ", dataId);
        resolve("success")
    }, 2000);

    })
   
}

async function getAlldata(){
    await getData(1);
    await getData(2);    
    await getData(3);    
    await getData(4);
    await getData(5);

}


// iife: immediately invock function

