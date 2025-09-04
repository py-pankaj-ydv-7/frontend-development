// console.log("hello");

// let heading = document.getElementById("heading");


// let headings = document.getElementsByClassName("heding-class");
// console.dir(headings);
// console.log(headings);


// let elements = document.querySelector("p"); // 1st element return karke deta hai .
// let allElements = document.querySelectorAll("p"); // sare (All) element return karke deta hai .

// console.dir(elements)
// console.dir(allElements)

// let div = document.querySelector("div")
// console.dir(div);
// console.log(div);

/***** let's Practice question */
//Qs. Create a h2 heading element with text - "Hello javaScript" .Append "from Apna College Students" to this using js.

// let heading = document.querySelector("h2");
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from Apna College students"; // concatinate.

//Qs.2 create 3 divs with common class name - "box". Access them & add some unique text to each of them.


let divs = document.querySelectorAll(".box");

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// same kaam loop se karenge
let i = 1;
for (div of divs){
    div.innerText = `ye loop se change kiya hai, new unique value ${i}`
    i++;
}