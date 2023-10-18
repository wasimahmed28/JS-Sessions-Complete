let playGame = confirm("Do you wanna play rock, paper, scissors")
if(playGame){
    while(playGame){
        const choice = prompt("Please enter rock, paper or scissors")
        if(choice|| choice===""){
            const player=choice.trim().toLowerCase();
            console.log(player)
            if(player ==="rock"||player ==="paper"|| player ==="scissors" )
            {
                const computer=Math.floor(Math.random()*3)
                const myArray = ['rock', 'paper','scissors']
                const computerChoice = myArray[computer]

                const result = player === computerChoice? "Tie Game"
                : player === "rock" && computerChoice === "paper"? `Player's Choice : ${player}\nComputer's Choice : ${computerChoice}\nComputer Wins`
                :player === "paper" && computerChoice === "scissors"? `Player's Choice : ${player}\nComputer's Choice : ${computerChoice}\nComputer Wins`
                :player === "scissors" && computerChoice === "rock"? `Player's Choice : ${player}\nComputer's Choice : ${computerChoice}\nComputer Wins`
                :`Player's Choice : ${player}\nComputer's Choice : ${computerChoice}\nPlayer Wins`
                alert(result)
                playGame = confirm("Wanna Play Again?")
                console.log(playGame)
                if(!playGame)alert("Okay. Thanks for Playing");
                continue;

            }
        }
        else{
            alert("I guess you changed your mind. Stop by again??")
            break;
        }
    }
}
else{
    alert("Ok, maybe next time")
}