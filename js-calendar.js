'use strict';


const option = {
    // timeZone: `Etc/GMT${'-7'}`,
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
}

const now = new Date();

let [weekday, year, month, day, hour, minute, second] = now.toLocaleString('ru-RU', option).split(',');
// console.log([myTime.trim(), day.trim(), myDate.trim()].join(', '));
// let myMonth = now.getMonth()
// let myYear = now.getFullYear()
// console.log(now)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)

let numDay = document.querySelector('.numDay');
let daysWrap = document.querySelector('.days-wrap');
let dataShort = document.querySelector('.data-short');

function pushData(result,days,date,month) {
    let m = option.month
    let dataDay = `
    <div class="data-day">${m}</div>
    `
    dataShort.insertAdjacentHTML("afterbegin", dataDay);
    let day = days[date.getDay()]
    let daysInMonth = [];

    for (let j = days.length-1; j >= 0; j-- ){
        let d =  `
        <div class="days">${days[j]}</div>`;
        daysWrap.insertAdjacentHTML("afterbegin", d);
    }



    for (let i = 1; i <= result.length; i++) {
        let dayMonth;
        dayMonth = i;
        let a =  `
<div class="b1">${i}</div>`;
        numDay.insertAdjacentHTML("beforeend", a);

    }
}



let getDaysArray = function(year, month) {
    let days = [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб","Вс"];

    let date = new Date(year, month - 1, 1);
    let result = [];

    while (date.getMonth() === month - 1) {
        result.push(date.getDate() );
        date.setDate(date.getDate() + 1);
    }
    pushData(result,days,date,month)
    console.log(...result)
    console.log(month)
    return result;
}
getDaysArray(year, month+1)