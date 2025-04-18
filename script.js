let computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "Rock";
    else if (choice === 1) return "Paper";
    else return "Scissors";
};

let humanChoice = () => {
    return new Promise(resolve => {
        const rock = document.getElementById("rock-button");
        const paper = document.getElementById("paper-button");
        const scissors = document.getElementById("scissors-button");

        rock.addEventListener("click", () => resolve("Rock"), { once: true });
        paper.addEventListener("click", () => resolve("Paper"), { once: true });
        scissors.addEventListener("click", () => resolve("Scissors"), { once: true });
    });
};

let playGame = async () => {
    let comp_score = 0;
    let human_score = 0;
    let score_text = document.getElementById("score-text");

    let playRound = (human_selection, comp_selection) => {
        if (human_selection === comp_selection) return "Tie";

        const win =
            (human_selection === "Rock" && comp_selection === "Scissors") ||
            (human_selection === "Paper" && comp_selection === "Rock") ||
            (human_selection === "Scissors" && comp_selection === "Paper");

        if (win) {
            human_score++;
        } else {
            comp_score++;
        }

        return `( ${human_score} , ${comp_score} )`;
    };

    for (let i = 0; i < 5; i++) {
        const human_selection = await humanChoice();
        const comp_selection = computerChoice();
        score_text.innerText = playRound(human_selection, comp_selection);
    }

    if (human_score > comp_score) {
        console.log("You win! :)");
    } else if (human_score < comp_score) {
        console.log("You lose! :(");
    } else {
        console.log("Tie! :/");
    }
};

playGame();
