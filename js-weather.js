'use strict';
function addCity(cityName) {
    const requestCountry = new XMLHttpRequest();
    requestCountry.open('GET',`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=1fe8ce000106a64976dd6ee0b0c1299a`);
    requestCountry.send();
    requestCountry.addEventListener('load',()=>{
        let [nameCity] = JSON.parse(requestCountry.responseText);
        console.log(nameCity);
        let cityLon = nameCity.lon+'';
        let cityLat = nameCity.lat+'';
        console.log(cityLon)
        console.log(cityLat)
        addWeather(cityLat,cityLon);
    })

}
addCity('Mahilyow');

function addWeather(lat,lon){
    const requestWeather = new XMLHttpRequest();
    requestWeather.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fe8ce000106a64976dd6ee0b0c1299a&units=metric&units=imperial&lang=ru`);
    requestWeather.send();
    requestWeather.addEventListener('load',()=>{
        let weather = JSON.parse(requestWeather.responseText);
        console.log(weather);
        renderHtml(weather)
    })
}

function renderHtml(weather){
let nameCity = weather?.name;
    console.log(nameCity);
    let [...{temp: temper}] = Object.values(weather.main)
    console.log(temper)
}