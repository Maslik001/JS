'use strict';

let days = document.querySelectorAll('.day-text');
let arrow = document.getElementById('daysWrap');
let calendar;
let calendarIco = document.getElementById('weatherCalendarImg');
const now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
let nowData = now.getDate();
let forecastDataArray = [];
let check = false;
let indexForecast;

calendarIco.addEventListener('click',()=>{
    calendar = document.querySelector('.calendar-wrapper');
    let addCalendar = `
<div class="calendar-table">
    <div class="weather-for-calendar">
        </div>
        <div class="days-wrap" id="daysWrap">
            <div class="arrow-left">&#129092;</div>
            <div class="data-info"></div>
            <div class="arrow-right">&#129094;</div>
        </div>

        <div class="month-days">
            <div class="week-days-wrapper">
                <div class="day-week">ПН</div>
                <div class="day-week">ВТ</div>
                <div class="day-week">СР</div>
                <div class="day-week">ЧТ</div>
                <div class="day-week">ПТ</div>
                <div class="day-week day_weekend">СБ</div>
                <div class="day-week day_weekend">ВС</div>
            </div>
            <div class="week-days-block">
                <div class="day-text" id="day-test"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
            <div class="week-days-block">
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
            <div class="week-days-block">
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
            <div class="week-days-block">
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
            <div class="week-days-block">
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
            <div class="week-days-block">
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text"></div>
                <div class="day-text day_weekend"></div>
                <div class="day-text day_weekend"></div>
            </div>
        </div>
        </div>
    `
    calendar.insertAdjacentHTML('afterbegin',addCalendar);
    getNowDay();
    switchMounth();
    getGeo();

})



/**
 * функция получения кол-ва дней в месяце
 * @returns {*[]}
 */
function getMonthDays() {
    let date = new Date(year, month);
    let result = [];
    while (date.getMonth() === month) {
        result.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return result;
}

/**
 * выборка последних дней предыдущего месяца для вывода в календарь
 * @param myDate - дни не вошедшие в вывод на календарь
 * @param day - кол-во необходимых отнять от последних чисел предыдущего месяца
 * @returns {*}
 */
function getDateAlter(myDate, day) {
    myDate.setDate(myDate.getDate() - day);
    return myDate;
}


/**
 * Добаление дней на страницу
 * добавление цвета на сл и предыдущие даты мес.
 */
function getNowDay() {
    let date = new Date(year, month);
    let day = date.getUTCDay();
    let startDate = getDateAlter(date, day);
    dayMonthInCalendar(date)
    days.forEach((daysAdd, index) => {
        daysAdd.innerText = startDate.getDate();
        startDate.setDate(startDate.getDate() + 1);
        if (index < day || index >= getMonthDays().length + day) {
            days[index].classList.add('others-month');
        } else {
            days[index].classList.remove('others-month');
        }
    })
    currentDay(day);
}


/**
 * Добавление ID для прогноза / добавление цвета на текущий день
 */
function currentDay(dayA) {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth();
    let b = nowData + dayA - 1; /// корректировка недели (начинается с понедельника)
    if (month === nowMonth && year === nowYear) {
        // check = true;
        getMonthDays().forEach((day) => {
            if (day === nowData) {
                days[b].classList.add('data-now');
                let arg = 1;
                while (day <= nowDate && arg <= 7) {
                    let value = "forecastCalendar" + arg
                    days[day + arg].setAttribute('id', `${value}`);
                    arg++;
                    let forecastCalendarWeather = document.getElementById(`${value}`);
                    forecastDataArray.push(forecastCalendarWeather);
                    forecastCalendar(forecastCalendarWeather);
                }
            }
        })
    } else {
        // check = false;
        days.forEach((elem, index) => {
            days[index].classList.remove('data-now');
            days[index].removeAttribute('id', 'forecastCalendar');

        })
        if (forecastDataArray.length) {
            forecastDataArray.forEach(fc => forecastCalendar(fc, true));
            forecastDataArray = [];
        }
    }
}


/**
 * Получение позиции курсора  - и вовод блока прогноза относительно курсора
 * @param e
 */
function targetForecast(e) {
    check = true;
    let event = e.target;
    indexForecast = event.id.slice(event.id.length - 1);
    let x = event.getBoundingClientRect().x;
    let y = event.getBoundingClientRect().y;
    let weatherInfoCal = document.querySelector('.forecastCalendarWeather');
    weatherInfoCal.style.display = 'flex';
    weatherInfoCal.classList.add('animate__zoomIn');
    weatherInfoCal.style.left = x - 80 + 'px';
    weatherInfoCal.style.top = y + 20 + 'px';
    weatherInfoCal.addEventListener('mouseleave', remAdd);
    getGeo();
}

/**
 * Отображение прогноза погоды на днях календаря
 * @param icoCalendarWeatherForecast
 * @param descriptionForecast
 * @param tempForecast
 * @param timeSecForecast
 */
function forecastWeatherCalendarRender(icoCalendarWeatherForecast, descriptionForecast, tempForecast,timeSecForecast) {
    let weatherInfoCal = document.querySelector('.forecastCalendarWeather');
    weatherInfoCal.innerHTML = `
<div class="time-forecast">${timeSecForecast}</div>
<div class="calendar-weather-forecast-wrapper">
<img src="http://openweathermap.org/img/wn/${icoCalendarWeatherForecast}@2x.png"  class="ico-Calendar-Weather-Forecast" alt="icoCalendarWeather">
<div class="temp-calendar-forecast">${tempForecast}&#176;C</div>
</div>
<div class="description-calendar-forecast">${descriptionForecast}</div>
    `
}

/**
 * Закрытие прогноза погоды на днях календаря
 */
function remAdd() {
    check = false;
    let weatherInfoCal = document.querySelector('.forecastCalendarWeather');
    weatherInfoCal.style.display = 'none';
}

/**
 * Обработчик наведение мыши на определенный день
 * @param fCalendarWeather
 * @param clearHundlers
 */
function forecastCalendar(fCalendarWeather, clearHundlers = false) {
    if (!clearHundlers) {
        fCalendarWeather.addEventListener('mouseover', targetForecast);
        // fCalendarWeather.addEventListener('mouseleave', remAdd);
    }
    if (clearHundlers) {
        fCalendarWeather.removeEventListener('mouseover', targetForecast);
        fCalendarWeather.removeEventListener('mouseleave', remAdd);
    }
}


/**
 * Вывод месяц и года на экран
 */
function dayMonthInCalendar(date) {
    let dataInfo = document.querySelector('.data-info');
    let monthName = ["Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь"];
    let currentData = date.getUTCMonth();
    let yearD = date.getFullYear();
    dataInfo.innerText = `${monthName[currentData]} ${yearD}`

}

/**
 * переключение месяца
 * @type {HTMLElement}
 */
function switchMounth(){
    arrow.addEventListener('click', (e) => {
        let target = e.target;
        let left = document.querySelector('.arrow-left');
        let right = document.querySelector('.arrow-right');
        if (target === left) {
            if (month === 0) {
                month = 11;
                year--;
            } else {
                month--;
            }

            days.forEach((days) => {
                days.innerText = ''
            })
            getMonthDays();
            getNowDay();
        } else if (target === right) {
            if (month === 11) {
                month = 0;
                year++;
            } else {
                month++;
            }
            days.forEach((days) => {
                days.innerText = ''
            })
            getMonthDays();
            getNowDay();
        }
    })
}


/**
 * Получение данных о погоде
 * @param latWeatherCalendar - широта
 * @param lonWeatherCalendar - долгота
 * @returns {Promise<void>}
 */
async function weatherApiCalendar(latWeatherCalendar, lonWeatherCalendar) {
    let responseC = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latWeatherCalendar}&lon=${lonWeatherCalendar}&exclude=alerts&appid=1fe8ce000106a64976dd6ee0b0c1299a&units=metric&units=imperial&lang=ru`)
    if (!responseC.ok) {
        throw new Error(`${responseC.status}. Page is not found`);
    }
    let city = await responseC.json();
    let tempCal = Math.round(city.current.temp);
    let icoCalendarWeather = city.current.weather[0].icon;
    let cityNameC = city.timezone.split('/')[1];
    let descriptionC = city.current.weather[0].description;
    let windSpeedC = city.current.wind_speed;
    let pressureC = city.current.pressure;
    if (check) {
        let icoCalendarWeatherForecast = city.daily[indexForecast].weather[0].icon;
        let descriptionForecast = city.daily[indexForecast].weather[0].description;
        let tempForecast = Math.round(city.daily[indexForecast].temp.day);
        let timeSecForecast = data(city.daily[indexForecast-1].dt * 1000);
        forecastWeatherCalendarRender(icoCalendarWeatherForecast, descriptionForecast, tempForecast,timeSecForecast)
    }
    console.log(city);
    weatherCalendar(tempCal, icoCalendarWeather, cityNameC, descriptionC, windSpeedC, pressureC);


}

/**
 * Определение геолокации пользователя
 */
function getGeo() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            let lan = position.coords.latitude
            let lot = position.coords.longitude
            weatherApiCalendar(lan, lot);
            // if (!forecastBlock) {forecast(lan, lot)};  /// привязка к geo погоде
        }
    );
}

/**
 * Отображение текущей погоды на календаре
 * @param tempCal
 * @param icoCalendarWeather
 * @param cityNameC
 * @param descriptionC
 * @param windSpeedC
 * @param pressureC
 */
function weatherCalendar(tempCal, icoCalendarWeather, cityNameC, descriptionC, windSpeedC, pressureC) {
    const weather = document.querySelector('.weather-for-calendar');
    weather.innerHTML = `
<div class="inform-weather-left">
    <div class="wind-calendar-weather"><div><img class="wind-calendar" src="img/weather/wind.png"><p id="wind-calendar"></p></div> ${windSpeedC} m/s</div> 
    <div class="pressure-calendar-weather"><div ><img class="prep-calendar" src="img/weather/prep.png"><p id="prep-calendar"></p></div>   ${pressureC} hPa</div>
</div>
<div class="wrapper-weather-calendar">
        <div class="city-name-calendar">${cityNameC}</div>

        <div class="temp-calendar">${tempCal}&#176;C</div>
        <div class="description-calendar">${descriptionC}</div>
    </div>
<div class="inform-weather-right">
            <img src="http://openweathermap.org/img/wn/${icoCalendarWeather}@2x.png"  class="ico-Calendar-Weather" alt="icoCalendarWeather">
            
</div>
            
`


}


// function find_max(nums) {
// let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//         if (num > max_num) {
//         max_num = num;
//             }
//         }
//      return max_num;
//      }
//
// console.log(find_max([11,10,30,68,-15,29,4]));