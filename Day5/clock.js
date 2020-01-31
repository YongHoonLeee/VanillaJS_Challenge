const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText=`${hours<10 ? `0${hours}`:`${hours}`}:${
        minutes<10?`0${minutes}`:`${minutes}`}:${
        seconds<10 ?  `0${seconds}`:`${seconds}`}`;
}


//for 분할정복.
function init() {
    getTime();
    setInterval(getTime,1000);

}

init();