// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
var number1 = Math.round(Math.random()* 100);
var number2 = Math.round(Math.random()* 100);
// num1.innerHTML = number1;
// num2.innerHTML = number2;


// Iteration 3: Creating variables required to make the game 
var operator;
var score=0;
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mul = document.getElementById('mul');
const divide = document.getElementById('divide');
const modulus = document.getElementById('modulus');

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3 = document.getElementById('number3');
var number3

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
 number1 = Math.round(Math.random()* 100);
 number2 = Math.round(Math.random()* 100);

    if (number1<number2){
     var extra = number1;
     number1 = number2;
     number2 = extra;
    }

    operator=Math.round(Math.random()*5)
     switch(operator){
        case 1:
            number3 = number1 + number2;

            break;
        case 2:
            number3 = number1 - number2;
            break;
        case 3:
            number3 = number1 * number2;
            break;
        case 4:
            number3 = Math.floor(number1/number2);
            break;
        case 5:
            number3 = number1 % number2;
            break;
        case 0:
            randomise();
    }

    num1.innerHTML = number1;
    num2.innerHTML = number2;
    num3.innerHTML = number3;
    console.log(number1+' '+number2+" "+number3+" "+operator)
}
randomise();
// Iteration 6: Making the Operators (button) functional
plus.onclick=()=>{
    if (number1 + number2 === number3){
        score++;
        resettime(timerid);
        randomise()
    }else{
        location.href = './gameover.html?score='+score;
    }
};

minus.onclick=()=>{
    if (number1 - number2 === number3){
        score++;
        randomise()
        resettime(timerid);
    }else{
        location.href = './gameover.html?score='+score;
    }
};

mul.onclick=()=>{
    if (number1 * number2 === number3){
        score++;
        randomise()
        resettime(timerid);
    }else{
        location.href = './gameover.html?score='+score;
    }
};

divide.onclick=()=>{
    if (Math.floor(number1/number2) === number3){
        score++;
        randomise()
        resettime(timerid);
    }else{
        location.href = './gameover.html?score='+score;
    }
};

modulus.onclick=()=>{
    if (number1 % number2 === number3){
        score++;
        randomise()
        resettime(timerid);
    }else{
        location.href = './gameover.html?score='+score;
    }
};
// Iteration 7: Making Timer functional
var time = 20;
var timer= document.getElementById('timer');
var timerid;

function startTimer(){
    time=20;
    timer.innerHTML = time;
    timerid = setInterval(() => {
        time--;
        if (time == 0) location.href= './gameover.html?score='+score;
        timer.innerHTML=time;
    }, 1000);
}
function resettime(intervalid){
    clearInterval(intervalid);
    startTimer();
}
startTimer();