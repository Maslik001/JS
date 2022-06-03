'use strict';

let days = document.querySelectorAll('.day-text');
const now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
let nowData = now.getDate()



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
    currentDay(day)
}

/**
 * Цвет текущей даты
 */
function currentDay(dayA) {
    let nowDate = new Date();
    let nowMonth = nowDate.getMonth();
    let b = nowData + dayA - 1;
    if (month === nowMonth) {
        getMonthDays().forEach((day, index) => {
            if (index === nowData - 1) {
                days[b].classList.add('data-now');

            }
        })
        dayTest()
    } else {
        days.forEach((classL, index) => {
            days[index].classList.remove('data-now');
        })
    }

}
function dayTest(){
let dayTest1=document.getElementsByClassName('data-now')
dayTest1.addEventListener('click',()=>{
    console.log('Hello')
})
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

getNowDay()

/**
 * переключение месяца
 * @type {HTMLElement}
 */
let arrow = document.getElementById('daysWrap');
arrow.addEventListener('click', (e) => {
    let target = e.target;
    let left = document.querySelector('.arrow-left');
    let right = document.querySelector('.arrow-right');
    if (target === left) {
        if (month === 0) {
            month = 11;
            year--
        } else {
            month--
        }

        days.forEach((days) => {
            days.innerText = ''
        })
        getMonthDays()
        getNowDay()
    } else if (target === right) {
        if (month === 11) {
            month = 0;
            year++
        } else {
            month++
        }
        days.forEach((days) => {
            days.innerText = ''
        })
        getMonthDays()
        getNowDay()
    }
})


/**
 * Получение данных о погоде
 * @param latWeatherCalendar - широта
 * @param lonWeatherCalendar - долгота
 * @returns {Promise<void>}
 */
async function forecastCalendar(latWeatherCalendar, lonWeatherCalendar) {
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
            forecastCalendar(lan, lot);
            // if (!forecastBlock) {forecast(lan, lot)};  /// привязка к geo погоде

        }
    );
}

getGeo()


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