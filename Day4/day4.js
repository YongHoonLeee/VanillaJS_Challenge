// <⚠️ DONT DELETE THIS ⚠️>
//import ".day4.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const hello = document.getElementById("hello");
const colors = ["#f5cd79", "#ea8685", "#303952","#574b90"];
function resizeEvent() {
    if (window.outerWidth / screen.availWidth > 0.7) {
        hello.innerHTML = "Change Color~";
        document.body.style.backgroundColor = colors[0];
       
    }
    else if (window.outerWidth / screen.availWidth <= 0.7 && window.outerWidth / screen.availWidth > 0.5) {
        hello.innerHTML = "Wow ~~";
        document.body.style.backgroundColor = colors[1];
       
    }
    else {
        hello.innerHTML = "Good~"
        document.body.style.backgroundColor = colors[2];
      
    }
    console.log(window.outerWidth / screen.availWidth);

}

window.addEventListener('resize',resizeEvent);
    document.body.style.backgroundColor=colors[3];
