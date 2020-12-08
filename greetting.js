//클래스 호출
const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetting");

//이 녀석은 왜 대문자이며 뭐지?
const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreetting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreetting(text){
    //왜 제거하는 거지?
    form.classList.remove(SHOWING_ON);
    //클래스 추가
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `안녕! ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        //사람이 저장소에 없을 때
        askForName();
    }
    else{
        //사람이 저장소에 있을 때
        paintGreetting(currentUser);
    }
}

function init(){
    loadName();
}

init();

//로컬 스토리지에 저장 호출 !
// localStorage.setItem("simpson" ,true);
// console.log(localStorage.getItem("simpson"));