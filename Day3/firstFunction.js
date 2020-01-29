function sayhello(){
    console.log("Hello JS!");
}
function sayhello2(name){
    console.log("Hello ",name);
}
function sayhello3(name,age){
    console.log("Hello ",name,"you have",age,
    "years old!");
}

sayhello();
sayhello2("yonghoon");
sayhello3("yonghoon",27);
//------------------------------------------
const calculator = {
    plus :function(a,b){return a+b;},
    minus :function(a,b){return a-b;},
    multi : function(a,b){return a*b;},
    div : function(a,b){return a/b;},
    pow : function(a,b){return a**b;}
}

const val = calculator.plus(2,6);
console.log(`2 + 6 = ${val} good! `);

const valmulti = calculator.multi(3,5);
console.log(`3 + 5 = ${valmulti} good! `);

const powab = calculator.pow(3,5);
console.log(`3 ^ 5 = ${powab} good! `);
//----------------------------------------
const name = "yonghoon";
const title = document.getElementById("title");
//Document 도 객체다.
title.innerHTML = `${name} welcome DOM!`;
title.style.color ="red";
//getElementById 로 html의 id 로 접근해서,
// innerHTML 로 바꾸어주었다. 신기하넹.
//그리고 title 이라는 객체 안에서 style 안에서
//color 도 변경가능하다. 신기하넹.

