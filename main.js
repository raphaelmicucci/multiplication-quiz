let round = 1;
let correct = 0;
let incorrect = 0;

let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);


window.onload = init;

function init(){
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
}


const checkAnswer = (num1, num2) => {

    const answer = Number(document.getElementById("answer").value);

    const correctAnswer = num1 * num2;

    answer == correctAnswer? correct++ : incorrect++;

    console.log(`Round ${round}: ${num1} x ${num2} = ${correctAnswer}`);
    
    

    if (round == 10) {
        document.querySelector('button').disabled = true;
    } else {
        round++;
    }
}



// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
