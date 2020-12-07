/**
 * 1.클래스를 호출
 * 2.그 클래스의 input 을 다시 호출
 */
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

//????
const TODOS_LS = "toDos";

//배열 추가
const toDos = [];

//자바 스크립에 localstorage는 데이터 저장 못함
//오로지 String 만 가능
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

//할일을 로그에 띄움
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1
    delBtn.innerHTML = "❌";
    span.innerText =newId+":" + text;
    //자신을 부모로 자식을 추가
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}
/**
 * input default event 새로고침? 이벤트를 막고
 * 변수에 input value를 대입
 *  paintToDo 함수 실행
 * input value 값 공백으로 바꿈
 */
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

//JSON javaScript Object Notation
//데이터를 전달할 때, JS가 그걸 다룰 수 있도록 object로 바꾸는 기능
//즉 String으로 보여주는 것을 Object로 보여준다.
//forEach? 요소 하나마다 함수 실행
//toDo.text는 toDo가 가진 속성 text를 가르킨다. 자바 클래스 변수 처럼!
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();