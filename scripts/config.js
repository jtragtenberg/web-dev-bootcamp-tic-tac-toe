function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //se fosse um data-player-id, precisaria colocar["player-id"]; O + é pra transformar o string em um número
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = ""; //just to practice DOM digging
}

function savePlayerConfig(event) {
  event.preventDefault(); //stops the browser to execute the standard submit button behaviour reloading the page sending http requests
  const formData = new FormData(event.target); //instantiating an object from a class with the new keyword
  const enteredPlayerName = formData.get("playername").trim();
  console.log(enteredPlayerName);

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return; //prevent the rest of the savePlayerConfig funcion to run
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  //   if (editedPlayer === 1) {
  //       players[0].name = enteredPlayerName;
  //   } else {
  //       players[1].name = enteredPlayerName;
  //   }

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
