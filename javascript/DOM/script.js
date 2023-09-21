// 4 pillars of dom 

//1. selection of an Element ----
//2. changing HTML
//3. Changing CSS
//4. Event Listener 


// var a = document.querySelector("h1")
// console.log(a)

// var a = document.querySelector("h1")
// a.innerHTML = "changed  HTML"            //changing html 
// a.style.color = "red"
// a.style.backgroundColor = "grey"        //changing css 


// var a = document.querySelector("h1")   // changing by event listener

// a.addEventListener("click",function(){
   
//     a.innerHTML = "badal gaya hu me teri ex ki tarah hahahahhaahhaha "
//     a.style.color = "yellow"
//     a.style.backgroundColor = "black"
// })

// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")


// var flag = 0

// btn.addEventListener("click",function(){
    
//     if(flag == 0 ){
//         bulb.style.backgroundColor = "yellow "
//         console.log("cliocked")
//         flag =1
//     }
//     else {
//     bulb.style.backgroundColor = "transparent"
//     console.log("Again clieckedf")
//     flag = 0
// }
// })

//***************** selecting multiple element at a same time  */


var h = document.querySelectorAll("h1")
console.log(h)

h.forEach(function(e){
    console.log(e)
    })