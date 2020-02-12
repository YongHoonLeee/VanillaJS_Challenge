const selectElement = document.querySelector(".selectBox");
const contry = "Contry";


function handleChange() {
    const result = document.querySelector('.result');
    result.textContent = `A-ha You from  ${event.target.value}! Welcome! ;)`;
    const selectValue = event.target.value;
    saveContry(selectValue);
  }

function saveContry(text) {
    localStorage.setItem(contry,text);
}

function askForContry() {
    selectElement.addEventListener('change',handleChange);
}

function loadContry() {
    const currentContry = localStorage.getItem(contry);
    if(currentContry===null){
        askForContry();
    }
    else{
        selectElement.value=currentContry;
        const result = document.querySelector('.result');
         result.textContent = `I know you from  ${currentContry}! Welcome! ;)`;
    }
}

function init() {
    loadContry();
}
init();



// import "./styles.css";

// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
