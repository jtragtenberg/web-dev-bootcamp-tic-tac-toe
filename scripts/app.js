const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];
let activePlayer = 0;

const playerConfigOverlayElement = document.getElementById("config-overlay"); //o config.js é chamado antes no HTML, mas esse objeto só é chamado com add event listener deste app.js, então esse objeto deve ser declarado antes do listener
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigButtonElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig); //openPlayerConfig() defined in config.js
editPlayer2BtnElement.addEventListener("click", openPlayerConfig); //openPlayerConfig() defined in config.js

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig); //event from the form element when I press the submit button, but is associated to the whole form

startNewGameBtnElement.addEventListener("click", startNewGame);

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);