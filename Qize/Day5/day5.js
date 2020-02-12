//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const ONE_DAY = 24*3600*1000;
const ONE_HOURS = 3600*1000;
const ONE_MINITES = 60*1000;
const ONE_SECONDS = 1000;

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const currentTime = new Date();
  const longTimeNoSee = xmasDay-currentTime;
  const utilDay = parseInt(longTimeNoSee/(ONE_DAY));
  const utilHours =parseInt ((longTimeNoSee%ONE_DAY)/ONE_HOURS);
  const utilMinites =parseInt ((longTimeNoSee%ONE_HOURS)/ONE_MINITES);
  const utilSeconds =parseInt( (longTimeNoSee%ONE_MINITES)/ONE_SECONDS);
  clockTitle.innerText=`${utilDay}d ${utilHours<10 ? `0${utilHours}`:`${utilHours}`}h ${
    utilMinites<10?`0${utilMinites}`:`${utilMinites}`}m ${
        utilSeconds<10 ?  `0${utilSeconds}`:`${utilSeconds}`}s`;
}
function init() {
    getTime();
    setInterval(getTime,1000);
}
init();
