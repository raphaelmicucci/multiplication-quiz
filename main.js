let round = 1;
let correct = 0;
let incorrect = 0;

let nums = [];
let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
nums.push([num1,num2]);

window.onload = init;
function init() {
    document.getElementById("num1").innerText = nums[nums.length-1][0];
    document.getElementById("num2").innerText = nums[nums.length-1][1];
    document.getElementById("correct").innerText = correct;
    document.getElementById("incorrect").innerText = incorrect;
 }



const checkAnswer = (nums) => {
    const answer = Number(document.getElementById("answer").value);
    const correctAnswer = nums[round-1][0] * nums[round-1][1];
    answer == correctAnswer? correct++ : incorrect++;

    console.log(`Round ${round}: ${nums[round-1][0]} x ${nums[round-1][1]} = ${correctAnswer}`);
    
    document.getElementById("correct").innerText = correct;
    document.getElementById("incorrect").innerText = incorrect;

    if (round == 10) {
        document.querySelector('button').disabled = true;
        document.querySelector('#answer').disabled = true;
    } else {
        round++;
        num1 = Math.ceil(Math.random()*10);
        num2 = Math.ceil(Math.random()*10);
        nums.push([num1,num2]);

        document.getElementById("num1").innerText = nums[nums.length-1][0];
        document.getElementById("num2").innerText = nums[nums.length-1][1];
    }
}

