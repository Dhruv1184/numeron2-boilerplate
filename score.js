// Iteration 8: Making scoreboard functional
var playagain = document.getElementById('play-again-button')
playagain.onclick = () =>{
    location.href = './game.html'
}
var urlparams = new URLSearchParams(window.location.search);
var score = urlparams.get('score');
var scoreboard = document.getElementById('score-board');
scoreboard.innerHTML=score;