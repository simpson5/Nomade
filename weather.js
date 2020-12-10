//const weather = document.querySelector(".js-weather");
const weather = document.querySelector("span");

//API 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
const API_KEY = "5b797d601f468d4d154bda49ccb5fb65";
const COORDS = 'coords';

//then 데이터가 완전히 들어온 다음에 호출
function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handlGeoError(){
    console.log("볼 수 없 어");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handlGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else {
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();