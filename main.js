function ComputerPlay(){
    const choice=["Rock", "Paper", "Scissors"];
    let random=Math.floor(Math.random()*choice.length);
    console.log("Computer's choice: " +choice[random].toUpperCase());
    return choice[random].toUpperCase();
}


function playRound(p,c){
    if ((p=="ROCK" && c=="PAPER")|| (p=="PAPER" && c=="SCISSORS") || (p=="SCISSORS" && c=="ROCK")){
        console.log("Player Lose");
        return 0; 
    }
    else if (p==c){
        console.log("tie");
        return 0;
    }
    else {
        console.log("Player Wins !!");
        return 1;
    }
}



function game(){
    let playerScore=0;
    for (let i=1; i<=5; i++){
        let playerSelect=prompt("Enter choice (rock, paper, or scissors");
        let playerSelection=playerSelect.toUpperCase(); 
        console.log("Player: "+playerSelection);
        let computerSelection=ComputerPlay(); 
        
        let score=playRound(playerSelection,computerSelection);

        if (score==1){
            playerScore=playerScore+1;
        }

    }
    console.log("Player Score: "+ playerScore);
    if (playerScore>=3){
        console.log("Player Wins !!")
    }
    else {
        console.log("Player lose :(")
    }
}

game();