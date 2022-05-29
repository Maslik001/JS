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

// Добаление
function getNowDay() {
    let daysInMonth = getMonthDays();
    let date = new Date(year, month);
    let day = date.getUTCDay();

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

getNowDay()

let arrow = document.getElementById('daysWrap');
arrow.addEventListener('click',(e)=>{
    let target = e.target;
    let left = document.querySelector('.arrow-left');
    let right = document.querySelector('.arrow-right');
    if (target === left){
        month--
        days.forEach((days) => {
            days.innerText = ''
        })

        getMonthDays()
        getNowDay()

    } else if(target === right){
        days.forEach((days) => {
            days.innerText = ''
        })
        month++
        getMonthDays()
        getNowDay()
    }
})

