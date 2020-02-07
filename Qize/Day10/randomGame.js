const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
let randomNumber = Math.floor(Math.random() * slider.value) + 1;
const resultIndex = document.querySelector("h4");
const getNumberForm = document.querySelector(".js-getNumber");
const myChose = getNumberForm.querySelector("input");
const btn = document.querySelector("button");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value*5;
  randomNumber = Math.floor(Math.random() * slider.value*5) + 1;
}

function getRandomNumber() {
    console.log(myChose.value,typeof(myChose.value),randomNumber,typeof(randomNumber));
    if(parseInt(myChose.value)!==randomNumber)
    {
        resultIndex.innerText=`You chose :${myChose.value} ,The machine chose : ${randomNumber}
        You lost!`;
    }
    else{
        resultIndex.innerText=`You chose :${myChose.value} ,The machine chose : ${randomNumber}
        You Won!`
    }
    randomNumber=Math.floor(Math.random() * slider.value*5) + 1;
}
btn.addEventListener('click',getRandomNumber);
function handleSubmit(event) {
    const currentValue = myChose.value;
}
function init() {
    slider. oninput();
    getNumberForm.addEventListener('submit',handleSubmit);
    btn.addEventListener('click',getRandomNumber);
}
init();