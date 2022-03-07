
const API_KEY = "4a97288af10c7b63369ecae985f8e612";




function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {


        const icon = document.querySelector("#weather-condition img");
        const weather = document.querySelector("#weather-condition span:nth-child(2)");
        const temp = document.querySelector("#weather-condition span:nth-child(3)");
        const location = document.querySelector("#weather-condition span:nth-child(4)");


        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = data.weather[0].description;
        temp.innerText = `${data.main.temp}°C`;
        location.innerText = data.name;

    })
}

function onGeoError() {
    alert("Can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



