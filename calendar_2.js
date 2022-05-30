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

console.log(getMonthDays())

function getDateAlter(myDate, day) {
    myDate.setDate(myDate.getDate() - day);
    return myDate;
}


/**
 * Добаление дней на страницу
 */
function getNowDay() {
    let date = new Date(year, month);
    let day = date.getUTCDay();
    let startDate = getDateAlter(date, day);
    currentDay(day)
    dayMonthInCalendar(date)
    let arr = [];
    console.log(arr)
    console.log(arr.length)
    console.log(getMonthDays().length);
    days.forEach((daysAdd, index) => {

        arr.push(index)

        daysAdd.innerText = startDate.getDate();
        startDate.setDate(startDate.getDate() + 1);
        
        if (index < day || getMonthDays().length > arr) {
            days[index].classList.add('data-now');
        }
    })
}

/**
 * Цвет текущей даты
 */
function currentDay(dayA) {
    let nowDate = new Date();
    let nowMonth = nowDate.getMonth();
    let b = nowData + dayA - 1
    if (month === nowMonth) {
        getMonthDays().forEach((day, index) => {
            if (index === nowData) {
                days[b].classList.add('data-now');
            }
        })
    } else {
        days.forEach((classL, index) => {
            days[index].classList.remove('data-now');
        })
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

