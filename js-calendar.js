'use strict';


const option = {
    // timeZone: `Etc/GMT${'-7'}`,
    month: '2-digit',
    year: '2-digit',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
}

const now = new Date();

let [day, myDate, myTime,myYear] = now.toLocaleString('ru-RU', option).split(',');
// console.log([myTime.trim(), day.trim(), myDate.trim()].join(', '));
let myMonth = now.getMonth()
console.log(myMonth)
let calendarWrapper = document.querySelector('.calendar-wrapper');

function pushData() {
    let daysInMonth = [];


    for (let i = 25; i >= 1; i--) {
        let dayMonth;
        dayMonth = i;
        let a =  `<div class="b1">${i}</div>`;
        calendarWrapper.insertAdjacentHTML("afterbegin", a);

    }
}

pushData()

let getDaysArray = function(year, month) {
    // let names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    let date = new Date(year, month - 1, 1);
    let result = [];
    while (date.getMonth() === month - 1) {
        result.push(date.getDate() );
        date.setDate(date.getDate() + 1);
    }
    return result;
}
console.log(getDaysArray(now.year, now.month));