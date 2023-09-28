// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var playbtn = document.getElementById("play-button");
playbtn.onclick = () =>{
    location.href = "./game.html"
}