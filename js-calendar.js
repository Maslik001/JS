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

let [day, myDate, month] = now.toLocaleString('ru-RU', option).split(',');
// console.log([myTime.trim(), day.trim(), myDate.trim()].join(', '));
let myMonth = now.getMonth()
let myYear = now.getFullYear()
let myDayWeek = now.getDay();
let myDay = now.getDate();

console.log(myDay)


let numDay = document.querySelector('.numDay');
let daysWrap = document.querySelector('.days-wrap');
let dataShort = document.querySelector('.data-short');

function pushData(result, days, date, month, nowMonth, resultLast, resultNex) {
    console.log(myDayWeek)
    let dataDay = `
    <div class="data-day">${myDate}</div>
    `
    dataShort.insertAdjacentHTML("afterbegin", dataDay);

    for (let b = (resultLast.length + 1) - myDayWeek; b <= resultLast.length; b++) {
        let dayMonth;
        dayMonth = b;
        let a = `
<div class="b1 nextDay">${b}</div>`;
        numDay.insertAdjacentHTML("beforeend", a);

    }


    for (let j = days.length - 1; j >= 0; j--) {
        let a = `
        <div class="days ">${days[j]}</div>`;
        daysWrap.insertAdjacentHTML("afterbegin", a);

    }


    for (let i = 1; i <= result.length; i++) {
        let dayMonth;
        dayMonth = i;
        let a = `
<div class="b1">${i}</div>`;
        numDay.insertAdjacentHTML("beforeend", a);

    }
    for (let n = 1; n <= myDayWeek - 1; n++) {
        let dayMonth;
        dayMonth = n;
        let a = `
<div class="b1 nextDay">${n}</div>`;
        numDay.insertAdjacentHTML("beforeend", a);

    }
    result.indexOf(myDay+1);
    let styleNowDay = document.querySelector('.b1');
}






let getDaysArray = function (year, month) {
    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let monthName = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let nowMonth = monthName[month]

    let lastDate = new Date(year, month - 1, );
    let resultLast = [];
    while (lastDate.getMonth() === month - 1) {
        resultLast.push(lastDate.getDate());
        lastDate.setDate(lastDate.getDate() + 1);
    }
    let nexDate = new Date(year, month + 1, );
    let resultNex = [];
    while (nexDate.getMonth() === month + 1) {
        resultNex.push(nexDate.getDate());
        nexDate.setDate(nexDate.getDate() + 1);
    }

    let date = new Date(year, month, );
    let result = [];
    while (date.getMonth() === month) {
        result.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    pushData(result, days, date, month, nowMonth, resultLast, resultNex)

}
getDaysArray(myYear, myMonth)