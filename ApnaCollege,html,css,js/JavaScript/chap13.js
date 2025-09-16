const URL = "https://jsonplaceholder.typicode.com/todos";

let factPara = document.querySelector("#fact");
let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Get fact";
body.appendChild(btn);

const getFacts = async () => {
  console.log("Getting data ........ ");
  let resoponse = await fetch(URL);
  console.log(resoponse);
  let data = await resoponse.json();// readable formate me ata hai.
  // console.log(data[0].text);
  factPara.innerText = data[2].text;
};


// promise chainning.

// function getFacts(){
//     fetch(URL).then((resoponse)=>{
//     return  resoponse.json;
//     }).then((data)=>{
//         console.log(data); 
//     });
// }


btn.addEventListener("click", getFacts);
