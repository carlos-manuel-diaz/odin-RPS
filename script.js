
let computerChoice = () => {
    let choice = Math.round(Math.random() * 3);
    if (choice == 1) {
        return "Rock";
    } else if(choice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let humanChoice = () => {
    let choice = prompt("Play a move");
    return choice
}



let playGame=()=> {
    let score = ""
    let comp_score = 0;
    let human_score = 0;

    let playRound = (human_selection, comp_selection) => {
        if (human_selection == comp_selection) {
            return "Tie"
        } else {
            if(human_selection == "Rock" && comp_selection== "Scissors") {
                human_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }else if(human_selection == "Paper" && comp_selection== "Rock") {
                human_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }else if(human_selection == "Scissors" && comp_selection== "Paper") {
                human_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }else if(human_selection == "Scissors" && comp_selection== "Rock") {
                comp_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }else if(human_selection == "Rock" && comp_selection== "Paper") {
                comp_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }
            else if(human_selection == "Paper" && comp_selection== "Scissors") {
                comp_score++;
                return "( " + human_score + " , " + comp_score + " )";
            }
        }
    
    }

    

    for(i = 0; i < 5; i++) {
        let human_selection = humanChoice();
        let comp_selection = computerChoice();
        score = playRound(human_selection,comp_selection);
        console.log(score);
    }

    if (human_score > comp_score) {
        console.log("You win! :)")
    } else if (human_score < comp_score) {
        console.log("You lose! :(")
    } else {
        console.log("Tie! :/")
    }


}

playGame()






