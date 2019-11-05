let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 

}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
    }


function win(userChoise, computerChoise) {    
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;    
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord(computerChoise)}${smallCompWord}.You win!`;
    userChoise_div.classList.add('green-glow');
    setTimeout(() => userChoise_div.classList.remove('green-glow') , 300);
}
function lose(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;    
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} loses ${convertToWord(computerChoise)}${smallCompWord}.You lost...`;
    userChoise_div.classList.add('red-glow');
    setTimeout(() => userChoise_div.classList.remove('red-glow') , 300);
}
function draw(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoise_div = document.getElementById(userChoise)
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord}.Its a draw!`;
    userChoise_div.classList.add('gray-glow');
    setTimeout(() => userChoise_div.classList.remove('gray-glow') , 300);
}


function game(userChoise) {
    const computerChoice = getcomputerChoise();
    switch (userChoise + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise, computerChoice);
            break;
        default:
    }

}
game("c");

function main() {
    rock_div.addEventListener('click', () =>  game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main()


