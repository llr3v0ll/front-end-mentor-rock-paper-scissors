// SELECTORS
const paper = document.querySelector(".paper"),
  scissors = document.querySelector(".scissors"),
  rock = document.querySelector(".rock"),
  spock = document.querySelector(".spock"),
  lizard = document.querySelector(".lizard"),
  section = document.querySelector(".gameControl-wrapper"),
  scoreNormalHtml = document.querySelector("#score-bonus"),
  rulesButton = document.querySelector(".rules-normal"),
  rulesPage = document.querySelector(".rules-page"),
  courtain = document.querySelector(".courtain"),
  reset = document.querySelector(".reset-game");

let scoreNormal = localStorage.getItem("scoreBonus") || 0;
scoreNormalHtml.innerText = scoreNormal;
// FUNCTIONS
function getValue(event) {
  let selectedButton = "";
  let tEvent = event.target;
  if (tEvent.nodeName == "BUTTON") {
    selectedButton = tEvent;
  } else {
    while (tEvent.nodeName != "BUTTON") {
      tEvent = tEvent.parentNode;
    }
    selectedButton = tEvent;
  }
  renderSelected(selectedButton);
}
function renderSelected(button) {
  section.style = "justify-content: space-between;";
  // adding two columns with selected button inside
  section.innerHTML = `
    <div class="you-picked">
      <p>YOU PICKED</p>
      <div>
        <button class="selected-button ${button.value}" value="${button.value}">
          <div class="big-buttonMid">
            <img src="images/icon-${button.value}.svg" alt="${button.value}" draggable="false" />
          </div>
        </button>
      </div>
    </div>
    <div class="try-again-screen"></div>
    <div class="house-picked">
          <p>THE HOUSE PICKED</p>
          <div class="empty-shadow"></div>
    </div>
    `;
  setTimeout(renderHousePick, 1000);
}
function renderHousePick() {
  section.childNodes[5].childNodes[3].style = "display:none;";

  let randomNum = Math.floor(Math.random() * 5 + 1);
  let houseName = "";
  if (randomNum == 1) {
    houseName = "paper";
  } else if (randomNum == 2) {
    houseName = "scissors";
  } else if (randomNum == 3) {
    houseName = "rock";
  } else if (randomNum == 4) {
    houseName = "lizard";
  } else {
    houseName = "spock";
  }

  section.childNodes[5].innerHTML += `
    <div>
        <button class="selected-button ${houseName}" value="${houseName}">
          <div class="big-buttonMid">
            <img src="images/icon-${houseName}.svg" alt="${houseName}" draggable="false" />
          </div>
        </button>
    </div>
    `;
  changeScore();
}
function changeScore() {
  let selectedValue =
    document.querySelector(".you-picked").children[1].children[0].value;
  let houseValue =
    document.querySelector(".house-picked").children[2].children[0].value;
  if (selectedValue == houseValue) {
    let winlose = "DRAW";
    tryAgainScreen(winlose);
  } else if (selectedValue == "scissors" && houseValue == "paper") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "scissors" && houseValue == "lizard") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "paper" && houseValue == "rock") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "paper" && houseValue == "spock") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "rock" && houseValue == "scissors") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "rock" && houseValue == "lizard") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "lizard" && houseValue == "spock") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "lizard" && houseValue == "paper") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "spock" && houseValue == "scissors") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "spock" && houseValue == "rock") {
    scoreNormal++;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU WIN";
    tryAgainScreen(winlose);
  } else if (selectedValue == "scissors" && houseValue == "rock") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "scissors" && houseValue == "spock") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "paper" && houseValue == "scissors") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "paper" && houseValue == "lizard") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "rock" && houseValue == "paper") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "rock" && houseValue == "spock") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "lizard" && houseValue == "rock") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "lizard" && houseValue == "scissors") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "spock" && houseValue == "lizard") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  } else if (selectedValue == "spock" && houseValue == "paper") {
    scoreNormal--;
    scoreNormalHtml.innerText = scoreNormal;
    let winlose = "YOU LOST";
    tryAgainScreen(winlose);
  }
  saveScoreNormal();
}
function saveScoreNormal() {
  localStorage.setItem("scoreBonus", scoreNormal);
}
function tryAgainScreen(winlose) {
  const tryAgain = document.querySelector(".try-again-screen");
  tryAgain.style.display = "flex";
  tryAgain.innerHTML = `
      <h2 class="tryAgain-header">${winlose}</h2>
      <button class="tryagainbut">PLAY AGAIN</button>
    `;
  const tryAg = document.querySelector(".tryagainbut");
  tryAg.addEventListener("click", reload);
}
function reload() {
  location.reload();
}
function openRules() {
  rulesPage.style.display = "flex";
  courtain.style.display = "block";
  const closeRulesimg = document.querySelector("#close");
  closeRulesimg.addEventListener("click", closeRules);
}
function closeRules() {
  rulesPage.style.display = "none";
  courtain.style.display = "none";
}
function resetGame() {
  scoreNormal = 0;
  scoreNormalHtml.innerText = scoreNormal;
  saveScoreNormal();
}
//   INIT
function init() {
  // GETTING VALUE
  paper.addEventListener("click", getValue);
  scissors.addEventListener("click", getValue);
  rock.addEventListener("click", getValue);
  lizard.addEventListener("click", getValue);
  spock.addEventListener("click", getValue);
  // RULES
  rulesButton.addEventListener("click", openRules);
  reset.addEventListener("click", resetGame);
}
init();
