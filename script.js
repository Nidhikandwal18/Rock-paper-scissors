let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let choice=document.querySelectorAll(".choice");
let comp=document.querySelector("#comp")
let user=document.querySelector("#you")
choice.forEach(element=>{
    element.addEventListener("click",()=>{
        let userChoice=element.getAttribute("id");
        playGame(userChoice);
        
    });
});
const drawGame=()=>{
    console.log("game is draw")
    msg.innerText="Game was draw, Play Again!"
    msg.style.backgroundColor="#CDEBD3"
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("user won");
        msg.innerText="You Won!"
        msg.style.backgroundColor="#77C79B";
        userScore++;
        user.innerText=userScore;
        

    }
    else{
        console.log("user lose")
        msg.innerText="You Lose :(";
        compScore++;
        comp.innerText=compScore;
        msg.style.backgroundColor="#F28D8C"
    }
}
let compChoice;
const getCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randomTxt=Math.floor(Math.random()*3);
    return options[randomTxt]; 
    
}
const playGame=(userChoice)=>{
    compChoice=getCompChoice();
    console.log(`User choice: ${userChoice} and Comp choice: ${compChoice}`);
    if(userChoice === compChoice){
        drawGame();
    }
    else {
    let userWin=true;
    if(userChoice ==="rock"){
        userWin=compChoice==="paper" ? false : true
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="rock" ? true : false 
    }
    else if(userChoice==="scissors"){
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);

}};

