startGame();

function startGame() {
  let currentRound = 0;
  const hrock = document.querySelector(".hrock");
  const hpaper = document.querySelector(".hpaper");
  const hscissor = document.querySelector(".hscissor");

  const crock = document.querySelector(".crock > img");
  const cpaper = document.querySelector(".cpaper > img");
  const cscissor = document.querySelector(".cscissor > img")

  const hscore = document.querySelector(".hscore");
  const cscore = document.querySelector(".cscore");

  let humanScore = +hscore.textContent;
  let computerScore = +cscore.textContent;

  function playMatch(e) {
    currentRound++;

    if (currentRound < 11) {
      crock.classList.remove("computer-button-highlight");
      cpaper.classList.remove("computer-button-highlight");
      cscissor.classList.remove("computer-button-highlight");

      const humanChoice = e.target.dataset.move;
      const computerChoice = getComputerChoice();

      playRound(humanChoice, computerChoice);
    } else {
      hrock.removeEventListener("click", playMatch);
      hpaper.removeEventListener("click", playMatch);
      hscissor.removeEventListener("click", playMatch);

        if (humanScore > computerScore) {
          window.location.href = "pages/win.html";
        } else if (computerScore > humanScore) {
          window.location.href = "pages/lose.html";
        } else {
          window.location.href = "pages/tie.html";
        }
      }
   }

  function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);

    switch (randomValue) {
      case 0:
        crock.classList.add("computer-button-highlight");
        return "rock";
      case 1:
        cpaper.classList.add("computer-button-highlight");
        return "paper";
      case 2:
        cscissor.classList.add("computer-button-highlight");
        return "scissor";
    }
  }

  hrock.addEventListener("click", playMatch);
  hpaper.addEventListener("click", playMatch);
  hscissor.addEventListener("click", playMatch);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissor") {
      humanScore++;
      hscore.textContent = humanScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      hscore.textContent = humanScore;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
      humanScore++;
      hscore.textContent = humanScore;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;
      cscore.textContent = computerScore;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
      computerScore++;
      cscore.textContent = computerScore;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
      computerScore++;
      cscore.textContent = computerScore;
    } else {
      humanScore++;
      computerScore++;
      hscore.textContent = humanScore;
      cscore.textContent = computerScore;
    }
  }
}
