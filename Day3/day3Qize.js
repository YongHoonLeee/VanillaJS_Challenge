// <⚠️ DONT DELETE THIS ⚠️>
//import "./style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
제목 텍스트는 마우스가 위에 있을 때 변경되어야 한다.
제목 텍스트는 마우스가 떠날 때 변경되어야 한다.
창의 크기가 조정되면 제목이 변경되어야 한다.
오른쪽 클릭 시 제목도 변경되어야 한다.
제목 색은 색상 배열에서 나온 색이어야 한다.
.css 또는 .html 파일을 변경하지 마십시오.
모든 기능 핸들러는 "superEventHandler"의 삽입물이어야 함
*/
const m = document.querySelector("h2");

const superEventHandler = {
    WindowResizeEvnet : function() {
     m.innerHTML = "You just Resize~ ;)";
    m.style.color = colors[3];
    },
    RightClickEvent :function () {
        m.innerHTML = "That was a Right Click !";
        m.style.color = colors[2];
    },
    MouseOutEvnet : function (){
        m.innerHTML = "The Mouse gone...";
        m.style.color =colors[1];
    },
    MouseOverEvent : function (){
        m.innerHTML="The Mouse is Here~!";
        m.style.color =colors[0];
    }
}

window.addEventListener('auxclick',superEventHandler.RightClickEvent);
window.addEventListener('resize',superEventHandler.WindowResizeEvnet);
m.addEventListener('mouseover',superEventHandler.MouseOverEvent);
m.addEventListener('mouseout',superEventHandler.MouseOutEvnet);
