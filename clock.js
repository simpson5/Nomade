//아이디 혹은 클래스등을 호출---속성 변환 가능
const clockContainer = document.querySelector(".js-clock"),
    clcokTitle = clockContainer.querySelector("h1");

//시간 생성 함수
function getTime(){
    //오브 젝트 생성
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //삼항연산자
    clcokTitle.innerText =`${hours < 10 ? `${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ?  `0${seconds}` : seconds}`;
}

function init(){
    //이 녀석 안하면 1초 건더 뛰고 생성함!
    getTime();
    //함수를 일정 시간마다 셋? 한다
    setInterval(getTime, 1000);
}

init();  