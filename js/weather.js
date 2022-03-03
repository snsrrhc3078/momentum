
const API_KEY = "4a97288af10c7b63369ecae985f8e612";




function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const temp = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:nth-child(3)");

        temp.innerText = `${data.main.temp}°C`;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    })
}

function onGeoError(){
    alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



