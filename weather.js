const API_KEY = "5b797d601f468d4d154bda49ccb5fb65";

const COORDS = 'coords';

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
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();