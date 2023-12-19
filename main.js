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
    document.querySelector("#correct span").innerText = correct;
    document.querySelector("#incorrect span").innerText = incorrect;
 }

const checkAnswer = (event, nums) => {
    event.preventDefault();

    const answer = Number(document.getElementById("answer").value);
    const correctAnswer = nums[round-1][0] * nums[round-1][1];
    answer == correctAnswer? correct++ : incorrect++;
    
    document.querySelector("#correct span").innerText = correct;
    document.querySelector("#incorrect span").innerText = incorrect;

    document.getElementById("answer").value = "";

    if (round == 10) {
        document.querySelector('button').style.visibility = "hidden";
        document.querySelector('#answer').style.visibility = "hidden";

        document.querySelector("#divScore").style.visibility = "hidden";
        
        document.getElementById("num1").parentNode.innerText = `Score: ${correct}`

        if (correct > 7) {
            document.querySelector("#divAnswer").innerText = "😁";
        } else if (correct > 4) {
            document.querySelector("#divAnswer").innerText = "😐";
        } else {
            document.querySelector("#divAnswer").innerText = "😭";

        }
    } else {
        round++;
        num1 = Math.ceil(Math.random()*10);
        num2 = Math.ceil(Math.random()*10);
        nums.push([num1,num2]);

        document.getElementById("num1").innerText = nums[nums.length-1][0];
        document.getElementById("num2").innerText = nums[nums.length-1][1];
    }
}

