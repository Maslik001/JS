'use strict';

/**
 * Переменные
 */
const weatherOn = document.getElementById('weather-img');
let weatherElementsIco;
let search;
let searchIco;
let locCity = 'Minsk';
let weatherWrapper;
let blockAddNewWeather = true;
let currentDate;
let currenDay;
let pressure;
let countryID;
let temperature;
let humidity;
let weatherForecast;
let windSpeed;
let status;
let closeWeather;
let latWeather;
let lonWeather;
let ico1;
let ico2;
let ico3;
let temp1;
let temp2;
let tepm3;
let forecastBlock = true;
let forecNextDay1;
let forecNextDay2;
let forecNextDay3;
let forecastWeatherStatus1;
let forecastWeatherStatus2;
let forecastWeatherStatus3;
let forecastWrapper;
let nightTemp1;
let nightTemp2;
let nightTemp3;

/**
 * Функция получения данных о погоде по API
 */
async function addCity() {
    const requestCountry = new XMLHttpRequest();
    await requestCountry?.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${locCity}&appid=1fe8ce000106a64976dd6ee0b0c1299a&units=metric&units=imperial&lang=ru`);
    requestCountry.send();
    requestCountry.addEventListener('load', () => {
        let nameCity = JSON.parse(requestCountry?.responseText);
        if (nameCity.cod !== 200) {
            console.log('City not founded')
        } else {
            locCity = nameCity?.name;
            countryID = nameCity?.sys.country;
            windSpeed = nameCity?.wind.speed;
            status = nameCity.weather[0].main;
            weatherForecast = nameCity.weather[0].description;
            temperature = Math.round(nameCity.main.temp);
            humidity = nameCity.main.humidity;
            pressure = nameCity.main.pressure;
            latWeather = nameCity.coord.lat;
            lonWeather = nameCity.coord.lon;
            let timeCity = nameCity.dt * 1000;
            data(timeCity);
            dataWeather()
            weatherIco(status);
        }
    })
}

/**
 * Функция получения данных о Прогнозе погоды по API
 */
async function forecast() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latWeather}&lon=${lonWeather}&exclude=alerts&appid=1fe8ce000106a64976dd6ee0b0c1299a&units=metric&units=imperial&lang=ru`)
    if (!response.ok) {
        throw new Error(`${response.status}. Page is not found`);
    }
    let city = await response.json();
    console.log(city);
    [temp1, temp2, tepm3] = [Math.round([city.daily[1].temp.day]), Math.round([city.daily[2].temp.day]), Math.round([city.daily[3].temp.day])]
    let sec1 = city.daily[1].dt * 1000;
    let sec2 = city.daily[2].dt * 1000;
    let sec3 = city.daily[3].dt * 1000;
    forecNextDay1 = data(sec1);
    forecNextDay2 = data(sec2);
    forecNextDay3 = data(sec3);
    // [{weather: [{icon: ico1}]}, {weather:[{icon: ico2}]} , {weather: [{icon: ico3}]}] = city.daily;
    [ico1, ico2, ico3] = [city.daily[0].weather[0].icon, city.daily[1].weather[0].icon, city.daily[2].weather[0].icon];
    ico1 = city.daily[1].weather[0].icon;
    ico2 = city.daily[2].weather[0].icon;
    ico3 = city.daily[3].weather[0].icon;
    [forecastWeatherStatus1, forecastWeatherStatus2, forecastWeatherStatus3] = [city.daily[1].weather[0].description, city.daily[2].weather[0].description, city.daily[3].weather[0].description];
    // [nightTemp1, nightTemp2, nightTemp3] = [Math.round([city.daily[1].temp.night]), Math.round([city.daily[2].temp.night]), Math.round([city.daily[3].temp.night])];
    nightTemp1 = Math.round([city.daily[1].temp.night]);
    nightTemp2 = Math.round([city.daily[2].temp.night]);
    nightTemp3 = Math.round([city.daily[3].temp.night]);
    resultForecast();

}

/***
 * Функция добавления виджета "Прогноза" на страницу
 */
function resultForecast() {
    if (forecastBlock) {
        let progn = `
   <div class="wr-prog">
   <div class="close-forecast"><p>&#10097;</p></div>
            <div class="d1">
                <div class="wr">
                    <div class="wrapper-temp-forec">
                        <div class="pic-weather" id="ico1"></div>
                        <div class="tem1 temp1"></div>
                        <p id="textTem1"></p>
                    </div>
                    <div class="day netx1"></div>
                </div>
            </div>
            <div class="d1">
                <div class="wr">
                    <div class="wrapper-temp-forec">
                        <div class="pic-weather" id="ico2"></div>
                        <div class="tem1 temp2"></div>
                        <p id="textTem2"></p>
                    </div>
                    <div class="day netx2"></div>
                </div>
            </div>
            <div class="d1">
                <div class="wr">
                    <div class="wrapper-temp-forec">
                        <div class="pic-weather" id="ico3"></div>
                        <div class="tem1 temp3"></div>
                        <p id="textTem3"></p>
                    </div>
                    <div class="day netx3"></div>
                </div>
            </div>
            <div class="flip"></div>
`
        weatherWrapper.insertAdjacentHTML('afterbegin', progn);
        forecastBlock = false;
        forecastWrapper = document.querySelector('.wr-prog');
        forecastWrapper.classList.add('animate__fadeInRight');
        let closeForecast = document.querySelector('.close-forecast');
        closeForecast.addEventListener('click', () => {
            weatherWrapper.removeChild(weatherWrapper.firstChild);
            forecastWrapper.classList.remove('animate__fadeInRight');
            forecastWrapper.classList.add('animate__fadeOutRight');
            setTimeout(function () {
                weatherWrapper.removeChild(weatherWrapper.firstChild);
                forecastBlock = true;
            }, 1000)
        })

        forecastVue()
    } else {
        forecastVue()
    }
}

/**
 * Функция для отображения данных о прогнощируемых погодных условиях
 */
function forecastVue() {
    let forecastIco1 = document.getElementById('ico1');
    let forecastIco2 = document.getElementById('ico2');
    let forecastIco3 = document.getElementById('ico3');
    let forecastTemp1 = document.querySelector('.temp1');
    let forecastTemp2 = document.querySelector('.temp2');
    let forecastTemp3 = document.querySelector('.temp3');
    let netx1 = document.querySelector('.netx1');
    let netx2 = document.querySelector('.netx2');
    let netx3 = document.querySelector('.netx3');
    let textTem1 = document.getElementById('textTem1');
    let textTem2 = document.getElementById('textTem2');
    let textTem3 = document.getElementById('textTem3');
    forecastIco1.innerHTML = `<img src="http://openweathermap.org/img/wn/${ico1}@2x.png" alt="">`;
    forecastIco2.innerHTML = `<img src="http://openweathermap.org/img/wn/${ico2}@2x.png" alt="">`;
    forecastIco3.innerHTML = `<img src="http://openweathermap.org/img/wn/${ico3}@2x.png" alt="">`;
    forecastTemp1.innerHTML = `<span class="forecast-temp">${temp1}&#176;</span> <span class="night-temp">/ ${nightTemp1}&#176;</span>`
    forecastTemp2.innerHTML = `<span class="forecast-temp">${temp2}&#176;</span> <span class="night-temp">/ ${nightTemp2}&#176;</span>`
    forecastTemp3.innerHTML = `<span class="forecast-temp">${tepm3}&#176;</span> <span class="night-temp">/ ${nightTemp3}&#176;</span>`
    netx1.innerHTML = `${forecNextDay1}`
    netx2.innerHTML = `${forecNextDay2}`
    netx3.innerHTML = `${forecNextDay3}`
    textTem1.innerHTML = `${forecastWeatherStatus1}`
    textTem2.innerHTML = `${forecastWeatherStatus2}`
    textTem3.innerHTML = `${forecastWeatherStatus3}`

}

/***
 * Функция добавления виджета "погода" на страницу
 */
weatherOn.addEventListener('click', () => {
    if (blockAddNewWeather) {
        blockAddNewWeather = false;
        weatherWrapper = document.getElementById('weather-wrapper');
        let weather = `
        
        <div class="weather" id='weather'>
        <div class="close-weather">&#10150;</div>
            <div class="inter-loc">
                <img src="img/weather/search-ico.png" alt="search-ico" class="search" id="search">
                <input type="text" class="search-location" id="searchLocation" placeholder="Введите город" ">
                <img src="img/weather/geographic.png" alt="">
            </div>
            <div class="weather-info animate__jackInTheBox">
                <div class="location">
                    <div class="city-location">
                        <img src="img/weather/local.png" alt="">
                        <div class="city-name" id="city-name"></div>
                        <div class="country-id" id="country-id"></div>
                    </div>              
<!--Анимация погоды--------------------------------------------------------------------------->
                    <div class="container">
                        <div class="elements">

                            <!-- Cloudy -->
                            <div class="element cloudy" id="cloudy">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style="enable-background:new 0 0 60.7 40;" xml:space="preserve">
            <g id="Cloud_1">
  \t          <g id="White_cloud_1">
  \t\t          <path id="XMLID_2_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                  <circle id="XMLID_3_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                  <circle id="XMLID_4_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                  <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;5;0"
                                    calcMode="linear">
                </animateTransform>
  \t          </g>
                <g id="Gray_cloud_1">
  \t\t          <path id="XMLID_6_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle id="XMLID_7_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="6s"
                                      keyTimes="0;0.5;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0;-3;0"
                                      calcMode="linear">
                </animateTransform>
  \t          </g>
            </g>
          </svg>
                            </div>

                            <!-- Rainy -->
                            <div class="element rainy" id="rainy">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 60" style="enable-background:new 0 0 55.1 49.5;" xml:space="preserve">
            <g id="Cloud_2">
        \t    <g id="Rain_2">
                <path id="rain_2_left" class="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S20.7,44.7,20.7,46.4z"></path>
                    <path id="rain_2_mid" class="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S31.4,44.7,31.4,46.4z"></path>
                    <path id="rain_2_right" class="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S41.3,44.7,41.3,46.4z"></path>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="1s"
                                      keyTimes="0;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0 0;0 10"
                                      calcMode="linear">
                </animateTransform>
                    <animate attributeType="CSS"
                             attributeName="opacity"
                             dur="1s"
                             keyTimes="0;1"
                             repeatCount="indefinite"
                             values="1;0"
                             calcMode="linear"/>
                    <!--attributeType="XML"-->

        \t    </g>
                <g id="White_cloud_2">
        \t\t    <path id="XMLID_14_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                    <circle id="XMLID_13_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                    <circle id="XMLID_10_" class="white" cx="34.5" cy="15.6" r="15.6"/>
        \t    </g>
            </g>
          </svg>
                            </div>

                            <!-- Cloudy with sun -->
                            <div class="element cloudyWithSun" id="cloudyWithSun">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.7 42.8" style="enable-background:new 0 0 61.7 42.8;" xml:space="preserve">
            <g id="Cloud_3">
      \t      <g id="White_cloud_3">
      \t\t      <path id="XMLID_24_" class="white" d="M47.2,42.8H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0C0,30.5,3.5,27,7.9,27h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,39.2,51.6,42.8,47.2,42.8z"/>
                  <circle id="XMLID_23_" class="white" cx="17.4" cy="25.5" r="9.3"/>
                  <circle id="XMLID_22_" class="white" cx="34.5" cy="23.9" r="15.6"/>
                  <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;5;0"
                                    calcMode="linear">
                </animateTransform>
      \t      </g>
                <g id="Sun_3">
      \t\t      <circle id="XMLID_30_" class="yellow" cx="31.4" cy="18.5" r="9"/>
                    <g>
      \t\t        <path id="XMLID_31_" class="yellow" d="M31.4,6.6L31.4,6.6c-0.4,0-0.6-0.3-0.6-0.6V0.6C30.8,0.3,31,0,31.3,0l0.1,0 C31.7,0,32,0.3,32,0.6v5.5C32,6.4,31.7,6.6,31.4,6.6z"/>
                        <path id="XMLID_34_" class="yellow" d="M31.4,30.1L31.4,30.1c-0.4,0-0.6,0.3-0.6,0.6v5.5c0,0.3,0.3,0.6,0.6,0.6h0.1 c0.3,0,0.6-0.3,0.6-0.6v-5.5C32,30.4,31.7,30.1,31.4,30.1z"/>
                        <path id="XMLID_35_" class="yellow" d="M19.6,18.3L19.6,18.3c0,0.4-0.3,0.6-0.6,0.6h-5.5c-0.3,0-0.6-0.3-0.6-0.6v-0.1 c0-0.3,0.3-0.6,0.6-0.6H19C19.3,17.8,19.6,18,19.6,18.3z"/>
                        <path id="XMLID_33_" class="yellow" d="M43.1,18.3L43.1,18.3c0,0.4,0.3,0.6,0.6,0.6h5.5c0.3,0,0.6-0.3,0.6-0.6v-0.1 c0-0.3-0.3-0.6-0.6-0.6h-5.5C43.4,17.8,43.1,18,43.1,18.3z"/>
                        <path id="XMLID_37_" class="yellow" d="M22.4,26L22.4,26c0.3,0.3,0.2,0.7,0,0.9l-4.2,3.6c-0.2,0.2-0.6,0.2-0.8-0.1l-0.1-0.1 c-0.2-0.2-0.2-0.6,0.1-0.8l4.2-3.6C21.9,25.8,22.2,25.8,22.4,26z"/>
                        <path id="XMLID_36_" class="yellow" d="M40.3,10.7L40.3,10.7c0.3,0.3,0.6,0.3,0.8,0.1l4.2-3.6c0.2-0.2,0.3-0.6,0.1-0.8l-0.1-0.1 c-0.2-0.2-0.6-0.3-0.8-0.1l-4.2,3.6C40.1,10.1,40,10.5,40.3,10.7z"/>
                        <path id="XMLID_39_" class="yellow" d="M22.4,10.8L22.4,10.8c0.3-0.3,0.2-0.7,0-0.9l-4.2-3.6c-0.2-0.2-0.6-0.2-0.8,0.1l-0.1,0.1 c-0.2,0.2-0.2,0.6,0.1,0.8l4.2,3.6C21.9,11,22.2,11,22.4,10.8z"/>
                        <path id="XMLID_38_" class="yellow" d="M40.3,26.1L40.3,26.1c0.3-0.3,0.6-0.3,0.8-0.1l4.2,3.6c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1 c-0.2,0.2-0.6,0.3-0.8,0.1l-4.2-3.6C40.1,26.7,40,26.3,40.3,26.1z"/>
                        <animate attributeType="CSS"
                                 attributeName="opacity"

                                 dur="0.5s"
                                 keyTimes="0;0.5;1"
                                 repeatCount="indefinite"
                                 values="1;0.6;1"
                                 calcMode="linear"/>
                        <!--attributeType="XML"-->
      \t        </g>
              </g>
                <animateTransform attributeName="transform"
                                  attributeType="XML"
                                  dur="2s"
                                  keyTimes="0;1"
                                  repeatCount="indefinite"
                                  type="scale"
                                  values="1;1"
                                  calcMode="linear">
              </animateTransform>
      \t     </g>
                                    <g id="Gray_cloud_3">
      \t\t    <path id="XMLID_20_" class="gray" d="M55.7,25.1H34.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C61.7,22.4,59,25.1,55.7,25.1z"/>
                                        <circle id="XMLID_19_" class="gray" cx="46.7" cy="13.4" r="10.7"/>
                                        <animateTransform attributeName="transform"
                                                          attributeType="XML"
                                                          dur="6s"
                                                          keyTimes="0;0.5;1"
                                                          repeatCount="indefinite"
                                                          type="translate"
                                                          values="0;-3;0"
                                                          calcMode="linear">
              </animateTransform>
      \t     </g>
                                    </g>
          </svg>
                            </div>

                            <!-- Cloudy with lightning -->
                            <div class="element cloudyWithLightning" id="cloudyWithLightning">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 48.7" style="enable-background:new 0 0 60.7 48.7;" xml:space="preserve">
            <g id="Cloud_4">
      \t      <g id="White_cloud_4">
      \t\t      <path id="XMLID_69_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                  <circle id="XMLID_68_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                  <circle id="XMLID_67_" class="white" cx="34.5" cy="21.1" r="15.6"/>
                  <animateTransform attributeName="transform"
                                    attributeType="XML"
                                    dur="6s"
                                    keyTimes="0;0.5;1"
                                    repeatCount="indefinite"
                                    type="translate"
                                    values="0;5;0"
                                    calcMode="linear">
                </animateTransform>
      \t      </g>
                <g id="Gray_cloud_4">
      \t\t      <path id="XMLID_65_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle id="XMLID_64_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="6s"
                                      keyTimes="0;0.5;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0;-3;0"
                                      calcMode="linear">
                </animateTransform>
      \t      </g>
                <g id="Lightning_4">
      \t\t      <path id="XMLID_79_" class="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
      \t\t\tc-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
      \t\t\tc-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
      \t\t\tl-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                    <animate attributeType="CSS"
                             attributeName="opacity"

                             dur="1.5s"
                             keyTimes="0;0.5;1"
                             repeatCount="indefinite"
                             values="1;0;1"
                             calcMode="linear"/>
                    attributeType="XML"
      \t      </g>
            </g>
          </svg>
                            </div>

                            <!-- Cloudy with moon -->
                            <div class="element cloudyWithMoon" id="cloudyWithMoon">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 44.4" style="enable-background:new 0 0 60.7 44.4;" xml:space="preserve">
            <g id="Cloud_5">
    \t        <g id="White_cloud_5">
    \t\t        <path id="XMLID_49_" class="white" d="M47.2,44.4H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,40.9,51.6,44.4,47.2,44.4z"/>
                    <circle id="XMLID_48_" class="white" cx="17.4" cy="27.2" r="9.3"/>
                    <circle id="XMLID_47_" class="white" cx="34.5" cy="25.5" r="15.6"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="6s"
                                      keyTimes="0;0.5;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0;5;0"
                                      calcMode="linear">
                </animateTransform>
    \t        </g>
                <path id="Moon_5" class="yellow" d="M33.6,17.9c-0.2-7.7,4.9-14.4,12-16.4c-2.3-1-4.9-1.5-7.6-1.5c-9.8,0.3-17.5,8.5-17.2,18.3 c0.3,9.8,8.5,17.5,18.3,17.2c2.7-0.1,5.2-0.8,7.5-1.9C39.3,32,33.8,25.6,33.6,17.9z"/>
                <g id="Gray_cloud_5">
    \t\t        <path id="XMLID_45_" class="gray" d="M54.7,26.8H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,24.1,58,26.8,54.7,26.8z"/>
                    <circle id="XMLID_43_" class="gray" cx="45.7" cy="15.1" r="10.7"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="6s"
                                      keyTimes="0;0.5;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0;-3;0"
                                      calcMode="linear">
                </animateTransform>
    \t        </g>
            </g>
          </svg>
                            </div>

                            <!-- Cloudy with rain and lightning -->
                            <div class="element cloudyWithRainAndLightning" id="cloudyWithRainAndLightning ">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 80" style="enable-background:new 0 0 60.7 55;" xml:space="preserve">
            <g id="Cloud_6">
    \t        <g id="White_cloud_6">
    \t\t        <path id="XMLID_81_" class="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"/>
                    <circle id="XMLID_80_" class="white" cx="17.4" cy="22.8" r="9.3"/>
                    <circle id="XMLID_77_" class="white" cx="34.5" cy="21.1" r="15.6"/>
    \t        </g>
                <g id="Gray_cloud_6">
    \t\t        <path id="XMLID_75_" class="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle id="XMLID_74_" class="gray" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="6s"
                                      keyTimes="0;0.5;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0;-3;0"
                                      calcMode="linear">
                </animateTransform>
              </g>
                <g id="Lightning_6">
    \t\t        <path id="XMLID_94_" class="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
    \t\t\tc-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
    \t\t\tc-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
    \t\t\tl-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"/>
                    <animate attributeType="CSS"
                             attributeName="opacity"

                             dur="1.5s"
                             keyTimes="0;0.5;1"
                             repeatCount="indefinite"
                             values="1;0;1"
                             calcMode="linear"/>
                    attributeType="XML"
    \t        </g>
                <g id="Rain_6">
            \t\t<path id="Rain_6_right" class="white" d="M36.3,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S36.3,50.2,36.3,51.9z"/>
                    <path id="Rain_6_mid" class="white" d="M26.4,51.9c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S26.4,50.2,26.4,51.9z"/>
                    <path id="Rain_6_left" class="white" d="M15.7,51.9c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8 S15.7,50.2,15.7,51.9z"/>
                    <animateTransform attributeName="transform"
                                      attributeType="XML"
                                      dur="1s"
                                      keyTimes="0;1"
                                      repeatCount="indefinite"
                                      type="translate"
                                      values="0 0;0 10"
                                      calcMode="linear">
                </animateTransform>
                    <animate attributeType="CSS"
                             attributeName="opacity"

                             dur="1s"
                             keyTimes="0;1"
                             repeatCount="indefinite"
                             values="1;0"
                             calcMode="linear"/>
                    attributeType="XML"
    \t        </g>
            </g>
          </svg>
                            </div>

                            <!-- Sunny -->
                            <div class="element sunny" id="sunny">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 44.9 44.9" style="enable-background:new 0 0 44.9 44.9;" xml:space="preserve" height="100px" width="100px">
            <g id="Sun">
    \t        <circle id="XMLID_61_" class="yellow" cx="22.4" cy="22.6" r="11"/>
                <g>
              \t<path id="XMLID_60_" class="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6 v7C23.2,7.8,22.9,8.1,22.6,8.1z"/>
                    <path id="XMLID_59_" class="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7 C23.2,37,22.9,36.8,22.6,36.8z"/>
                    <path id="XMLID_58_" class="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7 C7.8,21.7,8.1,21.9,8.1,22.3z"/>
                    <path id="XMLID_57_" class="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7 C37,21.7,36.8,21.9,36.8,22.3z"/>
                    <path id="XMLID_56_" class="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3 c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z"/>
                    <path id="XMLID_55_" class="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3 c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z"/>
                    <path id="XMLID_54_" class="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9 C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z"/>
                    <path id="XMLID_53_" class="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3 c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z"/>
                    <animate attributeType="CSS"
                             attributeName="opacity"

                             dur="0.5s"
                             keyTimes="0;0.5;1"
                             repeatCount="indefinite"
                             values="1;0.6;1"
                             calcMode="linear"/>
                    attributeType="XML"
              </g>
            </g>
          </svg>
                            </div>

                            <!-- Clear night -->
                            <div class="element clearNight" id="clearNight">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.8 42.5" style="enable-background:new 0 0 30.8 42.5;" xml:space="preserve" height="40px" width="40px">
            <path id="Moon" class="yellow" d="M15.3,21.4C15,12.1,21.1,4.2,29.7,1.7c-2.8-1.2-5.8-1.8-9.1-1.7C8.9,0.4-0.3,10.1,0,21.9 c0.3,11.7,10.1,20.9,21.9,20.6c3.2-0.1,6.3-0.9,8.9-2.3C22.2,38.3,15.6,30.7,15.3,21.4z"/>
          </svg>
                            </div>

                            <!-- Sunny with wind -->
                            <div class="element sunnyWithWind" id="sunnyWithWind">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.1 47.6" style="enable-background:new 0 0 45.1 47.6;" xml:space="preserve" height="100px" width="100px" margin-bottom="45px" margin-left ="50px">
            <style type="text/css">
    \t        .st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
            </style>

                                        <g id="Wind">
            \t\t<path id="XMLID_27_" class="st1" d="M1.3,33.1h19.3c2.1,0,3.8-1.3,3.8-3v0v0c0-1.7-1.7-3-3.8-3h-2.1"/>
                                            <path id="XMLID_40_" class="st1" d="M2.4,42.4h18.2c2,0,3.6,0.9,3.6,2.1l0,0v0c0,1.2-1.6,2.1-3.6,2.1h-2"/>
                                            <line id="XMLID_28_" class="st1" x1="5.3" y1="36.3" x2="25.5" y2="36.3"/>
                                            <line id="XMLID_29_" class="st1" x1="0" y1="39.3" x2="27" y2="39.3"/>
                                            <animateTransform attributeName="transform"
                                                              attributeType="XML"
                                                              dur="1.5s"
                                                              keyTimes="0;1"
                                                              repeatCount="indefinite"
                                                              type="translate"
                                                              values="0;3"
                                                              calcMode="linear">
                </animateTransform>
                                            <animate attributeType="CSS"
                                                     attributeName="opacity"

                                                     dur="1.5s"
                                                     keyTimes="0;1"
                                                     repeatCount="indefinite"
                                                     values="0.3;0.9"
                                                     calcMode="linear"/>
                                            attributeType="XML"
            \t</g>
            </g>
          </svg>
                            </div>

                            <!-- Snowy -->
                            <div class="element snowy" id="snowy">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.1 52.5" style="enable-background:new 0 0 55.1 52.5;" xml:space="preserve">
            <g id="Cloud_7">
  \t          <g id="White_cloud_7">
  \t\t          <path id="XMLID_8_" class="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                  <circle id="XMLID_5_" class="white" cx="17.4" cy="17.3" r="9.3"/>
                  <circle id="XMLID_1_" class="white" cx="34.5" cy="15.6" r="15.6"/>
  \t          </g>
                <circle class="white" cx="37" cy="43.5" r="3">
                <animateTransform attributeName="transform"
                                  attributeType="XML"
                                  dur="1.5s"
                                  keyTimes="0;0.33;0.66;1"
                                  repeatCount="indefinite"
                                  type="translate"
                                  values="1 -2;3 2; 1 4; 2 6"
                                  calcMode="linear">
                </animateTransform>
              </circle>
                <circle class="white" cx="27" cy="43.5" r="3">
                <animateTransform attributeName="transform"
                                  attributeType="XML"
                                  dur="1.5s"
                                  keyTimes="0;0.33;0.66;1"
                                  repeatCount="indefinite"
                                  type="translate"
                                  values="1 -2;3 2; 1 4; 2 6"
                                  calcMode="linear">
                </animateTransform>
              </circle>
                <circle class="white" cx="17" cy="43.5" r="3">
                <animateTransform attributeName="transform"
                                  attributeType="XML"
                                  dur="1.5s"
                                  keyTimes="0;0.33;0.66;1"
                                  repeatCount="indefinite"
                                  type="translate"
                                  values="1 -2;3 2; 1 4; 2 6"
                                  calcMode="linear">
                </animateTransform>
              </circle>
            </g>
          </svg>
                            </div>
                        </div>
                    </div>
<!--Анимация погоды--------------------------------------------------------------------------->
                    <div class="data-time" id="data-time"></div>
                    <div class="temperature" id="temperature"></div>
                    <div class="forecast-text" id="forecast-text"></div>
                    <div class="win-temp-info">
                        <div class="wind" ><img src="img/weather/wind.png"><p id="wind"></p></div>
                        <div class="prep" ><img src="img/weather/prep.png"><p id="prep"></p></div>
                        <div class="pressure" ><img src="img/weather/pressure.png"><p id="pressure"></p></div>
                    </div>
                    <div class="weather-btn" id="btn">прогноз на 3 дня</div>
                </div>
            </div>
        </div>`;

        weatherWrapper.insertAdjacentHTML('afterbegin', weather);
        weatherElementsIco = document.querySelector('.elements');
        closeWeather = document.querySelector('.close-weather');
        let btnWeather = document.querySelector('.weather-btn');
        btnWeather.addEventListener('click', () => {
            forecast();
            // getGeo()
        })
        listenSearch()
        let weatherBlock = document.getElementById('weather');
        weatherBlock.addEventListener('mouseover', () => {
            closeWeather.style.display = 'flex';
            closeWeather.classList.add('animate__flipInY')
        })
        weatherBlock.addEventListener('mouseout', () => {
            closeWeather.style.display = 'none';
        })
        weatherBlock.classList.add('animate__fadeInRight');
        closeWeather.addEventListener('click', () => {
            if (!forecastBlock) {
                forecastWrapper.classList.remove('animate__fadeInRight');
                forecastWrapper.classList.add('animate__fadeOutRight');
                forecastBlock = true;
                setTimeout(function () {
                    forecastWrapper.style = 'opacity: 0;'
                    weatherBlock.classList.remove('animate__fadeInRight');
                    weatherBlock.classList.add('animate__fadeOutRight');
                    weatherBlock.style = 'animation-duration: 2s;'
                }, 1000)
                setTimeout(function () {
                    while (weatherWrapper.firstChild) {
                        weatherWrapper.removeChild(weatherWrapper.firstChild);
                    }
                }, 2000)
            } else {
                weatherBlock.classList.remove('animate__fadeInRight');
                weatherBlock.classList.add('animate__fadeOutRight');
                setTimeout(function () {
                    while (weatherWrapper.firstChild) {
                        weatherWrapper.removeChild(weatherWrapper.firstChild);
                    }
                }, 1000)
            }
            blockAddNewWeather = true;
        })
    }
    addCity();
})

/**
 *  Функция для вывода анимированной картинки погодных условий
 * @param weatherStatus - погодные условия
 * @returns {string} смещение по Y для корректного отобращение анимации погоды
 */
function weatherIco(weatherStatus) {
    switch (weatherStatus) {
        case 'Clouds':
            if (weatherForecast === 'few clouds') {
                return weatherElementsIco.style = 'top: -195%;'
            } else {
                return weatherElementsIco.style = 'top: 0;'
            }
        case 'Clear':
            return weatherElementsIco.style = 'top: -579%;'
        case 'Atmosphere':
            return weatherElementsIco.style = 'top: -95%;'
        case 'Snow':
            return weatherElementsIco.style = 'top: -95%;'
        case 'Rain':
            if (weatherForecast === "freezing rain") {
                return weatherElementsIco.style = 'top: -861%;'
            } else {
                return weatherElementsIco.style = 'top: -95%;'
            }
        case 'Drizzle':
            return weatherElementsIco.style = 'top: -95%;'
        case 'Thunderstorm':
            if (weatherForecast === 'ragged thunderstorm' || weatherForecast === 'heavy thunderstorm' || weatherForecast === 'thunderstorm' || weatherForecast === 'light thunderstorm') {
                return weatherElementsIco.style = 'top: -285%;'
            }
            return weatherElementsIco.style = 'top: -480%;'
    }
}

/**
 * Функия отпределения даты
 */
function data(timeCity) {
    let monthName = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ms = new Date(timeCity);
    let day = ms.getUTCDate();
    currentDate = (ms.getUTCDate() + " " + monthName[ms.getMonth()]);
    currenDay = days[ms.getDay()]
    return [(day + " " + monthName[ms.getMonth()]) + " " + ms.getUTCFullYear()];
}

/**
 * Функция для отображения данных о погодных условиях
 */
function dataWeather() {
    if (!forecastBlock) {
        forecast()
    }
    let cityNameDiv = document.getElementById('city-name');
    let countryIdDiv = document.getElementById('country-id')
    let temperatureDiv = document.getElementById('temperature')
    let dataTimeDiv = document.getElementById('data-time');
    let forecastTextDiv = document.getElementById('forecast-text');
    let windDiv = document.getElementById('wind');
    let prepDiv = document.getElementById('prep');
    let pressureDiv = document.getElementById('pressure');

    windDiv.innerText = `ветер: ${windSpeed} m/s`;
    prepDiv.innerHTML = `влажность: ${humidity}&#37;`;
    pressureDiv.innerText = `давление: ${pressure} hPa`;
    forecastTextDiv.textContent = `${weatherForecast}`
    dataTimeDiv.innerHTML = `${currenDay}: ${currentDate}`;
    temperatureDiv.innerHTML = `${temperature}&#176;`;
    countryIdDiv.textContent = `${countryID}`
    cityNameDiv.textContent = `${locCity}`;


}

/**
 * Функия ввода города ( работает от нажания кнопки Enter , так и по клику картинки "поиска"
 */
function listenSearch() {
    document.addEventListener('keydown', keyCodeIn, false);

    function keyCodeIn(e) {
        let keyCode = e.key;
        if (keyCode === 'Enter' && document.getElementById('searchLocation').value !== '') {
            search = document.getElementById('searchLocation').value;
            locCity = search;
            addCity(locCity)
            document.getElementById('searchLocation').value = '';
        }
    }


    searchIco = document.getElementById('search');
    searchIco.addEventListener('click', (e) => {
        search = document.getElementById('searchLocation').value;
        locCity = search;
        addCity(locCity)
        document.getElementById('searchLocation').value = '';

    });
}



