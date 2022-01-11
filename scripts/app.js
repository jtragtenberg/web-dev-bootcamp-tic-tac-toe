//initialize html elements
const playerConfigOverlayElement = document.getElementById("config-overlay"); //o config.js é chamado antes no HTML, mas esse objeto só é chamado com add event listener deste app.js, então esse objeto deve ser declarado antes do listener
const backdropElement = document.getElementById("backdrop");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

const cancelConfigButtonElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig); //openPlayerConfig() defined in config.js
editPlayer2BtnElement.addEventListener("click", openPlayerConfig); //openPlayerConfig() defined in config.js

cancelConfigButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);