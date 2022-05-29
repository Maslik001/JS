'use strict';

let days = document.querySelectorAll('.day');
const now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
// month++
// month++
// функция получения кол-ва дней в месяце
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
 * Добаление дней на страницу
 */
function getNowDay() {
    let daysInMonth = getMonthDays();
    let date = new Date(year, month);
    let day = date.getUTCDay();
    dayMonthInCalendar(date)

    for (let i = 1; i <= daysInMonth.length; i++) {
        days[day].innerText = `${i}`;
        day++
    }
/*let c = 0;
    for (let b = daysInMonth.length; b <= day; b++) {

        days[c].innerText = `${b}`;
        c++
    }*/
}

/**
 * Вывод месяц и года на экран
 */
function dayMonthInCalendar(date){
    let dataInfo = document.querySelector('.data-info');
    let monthName = [ "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь","Январь"];
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
arrow.addEventListener('click',(e)=>{
    let target = e.target;
    let left = document.querySelector('.arrow-left');
    let right = document.querySelector('.arrow-right');
    if (target === left){
        if (month === 0){
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
    } else if(target === right){
        if (month === 11){
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

