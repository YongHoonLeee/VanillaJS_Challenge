const toDoForm = document.querySelector(".js-toDoform");
const toDoInput = toDoForm.querySelector("input");
const toDoPending = document.querySelector(".js-pending");
const toDoFinished = document.querySelector(".js-finished")
const TODOS_PENDING_LS ="pending";
const TODOS_FINISHED_LS = "finished"
let toDoPendings =[];
let toDoFinisheds =[];

function moveToDo(event) {
    const btn= event.target;
    const li = btn.parentNode;
    const moveToDos = toDoPendings.filter(function(toDo) {
        return toDo.id   === parseInt(li.id);
    });
   paintToDoforFinished(moveToDos[0].text);
   deleteToDoInPending(event);
}
function moveToDoforReturn(event) {
    const btn= event.target;
    const li = btn.parentNode;
    const moveToDosforReturn = toDoFinisheds.filter(function(toDo) {
        return toDo.id   === parseInt(li.id);
    });
   paintToDo(moveToDosforReturn[0].text);
   deleteToDoInFinished(event);
}

function deleteToDoInFinished(event) {
    const btn= event.target;
    const li = btn.parentNode;
    toDoFinished.removeChild(li);
    const cleanToDos = toDoFinisheds.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoFinisheds = cleanToDos;
    saveToDos();
}

function deleteToDoInPending(event) {
    const btn= event.target;
    const li = btn.parentNode;
    toDoPending.removeChild(li);
    const cleanToDos = toDoPendings.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoPendings = cleanToDos;
    saveToDos();
}
function saveToDos() {
    localStorage.setItem(TODOS_PENDING_LS,JSON.stringify(toDoPendings));
    localStorage.setItem(TODOS_FINISHED_LS,JSON.stringify(toDoFinisheds));
}
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const FinishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoPendings.length+1;
    delBtn.innerText ="X";
    FinishBtn.innerText ="Findish!"
    delBtn.addEventListener("click",deleteToDoInPending);
    FinishBtn.addEventListener("click",moveToDo);
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(FinishBtn);
    li.id = newId;
    toDoPending.appendChild(li);

    const toDoObj ={
        text:text,
        id : newId
    };

    toDoPendings.push(toDoObj);
    saveToDos();

}

function paintToDoforFinished(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const returnBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDoFinisheds.length+1;
    delBtn.innerText ="X";
    returnBtn.innerText ="Return!"
    delBtn.addEventListener("click",deleteToDoInFinished);
    returnBtn.addEventListener("click",moveToDoforReturn);
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(returnBtn);
    li.id = newId;
    toDoFinished.appendChild(li);

    const toDoObj ={
        text:text,
        id : newId
    };
    toDoFinisheds.push(toDoObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function sometingInPending(toDo) {
    paintToDo(toDo.text);
}
function sometingInFinished(toDo) {
    paintToDoforFinished(toDo.text);
}
function loadToDos() {
    const loadedtoDosInPending = localStorage.getItem(TODOS_PENDING_LS);
    const loadedtoDosFinished = localStorage.getItem(TODOS_FINISHED_LS)
    if(loadedtoDosInPending !==null){
        const parsedToDosPending = JSON.parse(loadedtoDosInPending);
        parsedToDosPending.forEach(sometingInPending);
    }
    if(loadedtoDosFinished !==null){
        const parsedToDosFindished = JSON.parse(loadedtoDosFinished);
        parsedToDosFindished.forEach(sometingInFinished);
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();