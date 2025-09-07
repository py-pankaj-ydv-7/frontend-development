// // let btn1 =document.querySelector("#btn1");

// // // btn1.onclick =()=>{
// // //     console.log("btn1 was clicked! ");
// // //     let a = 25;
// // //     a++;
// // //     console.log(a);
// // // }

// btn1.onclick =(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// // let div = document.querySelector("div")

// // div.onmouseover=()=>{
// //     console.log(" mouse inside the div ");
    
// // }

// // *********** ye jo jitna bhi humne kiya bo sab normal handler the , tha 

// /******** Event Listeners most impoo */

// let btn1 =document.querySelector("#btn1"); 
// // isme bhi apni event window use  kr sakte hai 
// btn1.addEventListener("click", (evt)=>{
//     console.log("button was clickedn -- Handler1 , and i used event listener !");
//     console.log(evt.type);
    
// })

// // isme bhi apni event window use  kr sakte hai 
// btn1.addEventListener("click", (evt)=>{
//     console.log("button was clicked -- Handler2 , and i used event listener !");
//     console.log(evt.type);
    
// })
// const handler3 =(evt)=>{  // remove karne k liye  function ko variable k under store kara lete hai .
//     console.log("button was clicked -- Handler3 , and i used event listener !");
//     console.log(evt.type);
    
// }
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click", (evt)=>{
//     console.log("button was clicked -- Handler4 , and i used event listener !");
//     console.log(evt.type);
    
// })

// //********** Event Listener remove *************/

// btn1.removeEventListener("click", handler3);

//**** let's practice Question */
//Qs. Create a toggle button that change the screen to dark-mode when clicked & light - mode when clicked again.

// let toggle = document.querySelector("#toggle");
//  let screen = "dark";
// // let body = document.querySelector("body");
// toggle.addEventListener("click",()=>{    
   
//     if(screen === "dark" ){
//         screen = "light";
        
//         // body.style.backgroundColor="white"; // to ye ese to kaam nahi kr rha 
//         document.querySelector("body").style.backgroundColor="white";

//     }
//     else{
//         screen = "dark";
//     //   body.style.backgroundColor="black";
//     document.querySelector("body").style.backgroundColor="black";
//     }

//     console.log(screen);
// })  //by own effort************


// let toggle = document.querySelector("#toggle");

// let body = document.querySelector("body");
// let currMode = "light";

// toggle.addEventListener("click",()=>{    
    
//     if(currMode === "light" ){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// })


// git code copy meri profile se . 
// // // let btn1 =document.querySelector("#btn1");

// // // // btn1.onclick =()=>{
// // // //     console.log("btn1 was clicked! ");
// // // //     let a = 25;
// // // //     a++;
// // // //     console.log(a);
// // // // }

// // // btn1.onclick =(evt)=>{
// // //     console.log(evt);
// // //     console.log(evt.type);
// // //     console.log(evt.target);
// // //     console.log(evt.clientX, evt.clientY);
    
    
    
// // // }

// // // let div = document.querySelector("div")

// // // div.onmouseover=()=>{
// // //     console.log(" mouse inside the div ");
    
// // // }

// // // *********** ye jo jitna bhi humne kiya bo sab normal handler the , tha 

// // /******** Event Listeners most impoo */

// // let btn1 =document.querySelector("#btn1"); 
// // // isme bhi apni event window use  kr sakte hai 
// // btn1.addEventListener("click", (evt)=>{
// //     console.log("button was clickedn -- Handler1 , and i used event listener !");
// //     console.log(evt.type);
    
// // })

// // // isme bhi apni event window use  kr sakte hai 
// // btn1.addEventListener("click", (evt)=>{
// //     console.log("button was clicked -- Handler2 , and i used event listener !");
// //     console.log(evt.type);
    
// // })
// // const handler3 =(evt)=>{  // remove karne k liye  function ko variable k under store kara lete hai .
// //     console.log("button was clicked -- Handler3 , and i used event listener !");
// //     console.log(evt.type);
    
// // }
// // btn1.addEventListener("click",handler3);

// // btn1.addEventListener("click", (evt)=>{
// //     console.log("button was clicked -- Handler4 , and i used event listener !");
// //     console.log(evt.type);
    
// // })

// // //********** Event Listener remove *************/

// // btn1.removeEventListener("click", handler3);

// //**** let's practice Question */
// //Qs. Create a toggle button that change the screen to dark-mode when clicked & light - mode when clicked again.

// // let toggle = document.querySelector("#toggle");
// //  let screen = "dark";
// // // let body = document.querySelector("body");
// // toggle.addEventListener("click",()=>{    
   
// //     if(screen === "dark" ){
// //         screen = "light";
        
// //         // body.style.backgroundColor="white"; // to ye ese to kaam nahi kr rha 
// //         document.querySelector("body").style.backgroundColor="white";

// //     }
// //     else{
// //         screen = "dark";
// //     //   body.style.backgroundColor="black";
// //     document.querySelector("body").style.backgroundColor="black";
// //     }

// //     console.log(screen);
// // })  //by own effort************


// let toggle = document.querySelector("#toggle");

// let body = document.querySelector("body");
// let currMode = "light";

// toggle.addEventListener("click",()=>{    
    
//     if(currMode === "light" ){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// })

