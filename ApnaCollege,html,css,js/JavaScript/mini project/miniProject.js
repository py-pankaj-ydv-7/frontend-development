let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const GenComputerChoice = ()=>{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor( Math.random() * 3); 
  return options[randIdx];
  // rock , paper, scissors
};

const drawGame = ()=>{
  console.log("game was Draw");
  msg.innerText = "Game was Draw!, Play Again ";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
}

const showWinner =(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win ! ");
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    
    console.log("You lose");
    msg.innerText = `You lose ! ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "red";
    
  }
}


const PlayGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice; --> modular way of programming.
    const compChoice = GenComputerChoice();
    console.log("comp Choice= ",compChoice);

    if(userChoice === compChoice){
      //Draw Game
      drawGame();
      
    }else {
      let userWin = true;
      if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      }else if(userChoice === "paper"){
        //rock , scissors
        userWin = compChoice === "scissors" ? false : true;
      }else {
        // rock , paper
       userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin,userChoice,compChoice);
    }
  }

choices.forEach((choice) => {// user choice
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    PlayGame(userChoice,);

  });
});


