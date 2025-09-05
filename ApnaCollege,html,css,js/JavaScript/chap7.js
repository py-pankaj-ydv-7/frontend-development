/************* dom part 2 */

// let div = document.querySelector("#box");
// console.log(div);

//  div.innerHTML = "my name is pankaj yadav";

// let id =div.getAttribute("id");
// console.log(id);


// let name1 = div.getAttribute("name");
// console.log(name1);


// let para = document.querySelector("p")
// console.log(para.setAttribute("class","new-class"));

// style ko select karne k liye .

// let div = document.querySelector("div");

// div.style.backgroundColor="pink";
// div.style.fontSize="34px";
// // div.style.visibility="hidden";
// div.innerText ="hello";
// div.style.color="black";


/*** Dom Manipulation, insertElements  */
// eg let el = docoment.createElement("div");

/*   insert Elemet
node.append(el) // adds at the end of node (inside)
node.prepend(el) // adds at the start of node (inside)
node.before(el) // adds before the node (outside)
node.append(el) // adds after the  node (outside)

*/

// let newBtn = document.createElement("button");
// console.log(newBtn);
// newBtn.innerText=" me button hu";

// let div =document.querySelector("div");

// div.append(newBtn); // button end me ayega (inside).
// div.prepend(newBtn); // button start me ayega (inside).
// div.before(newBtn); // button start me ayega (outside).
// div.after(newBtn); // button end me ayega (outside).
// newBtn.style.backgroundColor="green";
// newBtn.style.color="white";

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>this is new Heading</i>";


document.querySelector("body").prepend(newHeading);


newHeading.style.backgroundColor="green"

let para = document.querySelector("p")
para.remove() // is se elemet remove ho gaya.

newHeading.remove()// ye bhi remove ho gaya.