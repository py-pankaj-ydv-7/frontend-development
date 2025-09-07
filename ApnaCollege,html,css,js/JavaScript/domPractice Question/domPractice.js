//1. Background Changer
// Ek button banao jo click hone par body ka background color change kare (random color ho jaye).

// let body=document.querySelector("body");

// let btn1 =document.createElement("button");
// let btn2 =document.createElement("button");
// let btn3 =document.createElement("button");

// btn1.innerText="click me! , to create red backgrond ";
// btn2.innerText="click me! , to create blue backgrond ";
// btn3.innerText="click me! , to create green backgrond ";


// body.append(btn1);
// body.append(btn2);
// body.append(btn3);

// btn1.addEventListener("click",()=>{
//     console.log("click ho rh hai btn1");
    
//     body.classList.add("red");
//     body.classList.remove("blue","green")
// });

// btn2.addEventListener("click",()=>{
//     console.log("click ho rh hai btn 2")
//     body.classList.add("blue");
//     body.classList.remove("red","green")
// });

// btn3.addEventListener("click",()=>{
//     console.log("click ho rh btn 3");
    
//     body.classList.add("green");
//     body.classList.remove("red","blue")
// });



// short and optimise method try ******

// function changeBackground(color) {
//     body.className = ""; // pehle sab hata de
//     body.classList.add(color); // fir naya color add kar
// }



// btn1.addEventListener("click", ()=> changeBackground("red"));
// btn2.addEventListener("click", ()=> changeBackground("blue"));
// btn3.addEventListener("click", ()=> changeBackground("green")); // bahut sai hai yaar 

/***** 2nd question  */
//Ab mai tujhe ek thoda interesting DOM challenge deta hoon:
/*
Ek input box aur button banao.

Input me jo bhi text likhega, button click hone par us text se ek naya paragraph create ho jaye aur body me add ho jaye.

Har click pe naya paragraph add hota rahe.
Isse tu practice karega:

createElement,
innerText,
appendChild,
aur event handling
*/

// let body = document.querySelector("body");

// let btn =document.createElement("button");
// btn.innerText = "click me !";

// body.appendChild(btn);

// let input = document.createElement("input");
// input.placeholder="i am input tag! ";
// body.appendChild(input);



// function createPragraph(inputValue){
//    let p = document.createElement("p")
//    
//     p.innerText= inputValue;
//     body.appendChild(p);

// }

// btn.addEventListener("click",()=>{
//     console.log(" ha bhai chal rh hai !");
//     let value = input.value;
//     if(value.trim() !== "" ){ // emty n ho
//         createPragraph(value);
//         input.value = ""; // yaha input khali kr di after adding.
//     }
//     else{
//         alert("bhai pahle kuch likh to le !")
//     }
// });



/*
🏆 Challenge: Todo List Simple Version
Requirements:

Ek input box aur ek Add Task button banao.

Input me jo text likha hai, button click pe ek list item (li) ke roop me add ho jaye.

Har list item ke saath ek Delete button bhi ho, jo click hone par wahi item remove kar de.

Input blank ho to alert aa jaye: “Please enter a task!”

*/

let body = document.querySelector("body");

let heading = document.createElement("h1");
heading.innerText ="Challenge: Todo List Simple Version";
body.appendChild(heading);

let input = document.createElement("input");
input.placeholder = "Write down here! ";
body.appendChild(input);


let btn = document.createElement("button");
btn.innerText = "Add Task";
body.appendChild(btn);


function listItem(liValue){

    let li = document.createElement("li");
    li.innerText = liValue;
    // body.appendChild(li); 

    let removeTask = document.createElement("button");
    removeTask.innerText =" remove task";
    // body.appendChild(removeTask);

    removeTask.addEventListener("click",()=>{
        body.removeChild(li) // ya fir li.remove()
    });

    li.appendChild(removeTask);

    body.appendChild(li)




}

btn.addEventListener("click",()=>{
    let value = input.value;
    if(value.trim() !== ""){
        listItem(value);
        input.value = "";
    }
    else{
        alert("bhai pahle task to add kr le")
    }
})