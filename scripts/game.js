function startNewGame() {
    if (players[0].name === "" || players[1].name === ""){
        alert("Please set custom player names for both players!");
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target;

    if (selectedField.tagName != "LI"){
        return;
    }
    
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    
    if (gameData[selectedRow][selectedColumn] > 0){
        alert("Please select an empty field");
        return;
    }
    
    selectedField.textContent = players[activePlayer].symbol; //starts with players[0]
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    const winnerId = checkForGameOver();
    console.log(winnerId);
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    //Check rows for equality
    for (let i=0; i<3; i++){
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    //Check columns for equality
    for (let i=0; i<3; i++){
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }
    //Check main diagonal for equality
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] == gameData[1][1] &&
        gameData[0][0] == gameData[2][2]
    ) {
        return gameData[0][0];
    }
    //Check other diagonal for equality
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] == gameData[1][1] &&
        gameData[2][0] == gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if (currentRound === 9) { 
        return -1;
    }

    return 0;
}