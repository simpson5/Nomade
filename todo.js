/**
 * 1.클래스를 호출
 * 2.그 클래스의 input 을 다시 호출
 */
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

//????
const TODOS_LS = "toDos";

//할일을 로그에 띄움
function paintToDo(text){
    console.log(text);

}

/**
 * input default event 새로고침? 이벤트를 막고
 * 변수에 input value를 대입
 *  paintToDo 함수 실행
 */
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos == null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();