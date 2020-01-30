

if (10>5)
{
    console.log("Yes!");
}
else{
    console.log("No! ;(");
}
//---------------
//const age = prompt("How old are you ?");

// if( age >19){
//     console.log("You Can drink!");
// }
// else{
//     console.log("Get out of Here ~ ");
// }
//------------------------

//const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#44bd32";
//console.log(title.style.color);
// function handleClick() {
//     const currentColor = title.style.color;
  
//     if(currentColor===BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = BASE_COLOR;
//     }
//     console.log(title.style.color);
// }


//----하지만 이런건 css 에서 할일이니까 js 파일에서는 다르게 ㄱ

// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";
// function handleClick(){
//     const currentClass = title.className;
//     if(currentClass!==CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     }
//     else{
//         title.className="";
//     }

// }
// function init(){
//     title.addEventListener("click",handleClick);
//     }
// init();

//---- clssList 를 이용해보자.

// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";
// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     }
//     else{
//         title.classList.remove(CLICKED_CLASS);
//     }

// }
// function init(){
//     title.addEventListener("click",handleClick);
//     }
// init();

//toggle. plus ~
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    //ㅈㄴ 간단하네 ;;
}
function init(){
    title.addEventListener("click",handleClick);
    }
init();

