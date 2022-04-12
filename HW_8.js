'use strict';

/// TASK 1

/*
class Marker {
    constructor(ink,col) {
        this.inkQuantity = ink;
        this.color = col;
    }
    print() {
        if (this.inkQuantity >= 75) {
            console.log(`Маркер заправлен на ${this.inkQuantity}% : цвет маркера "${this.color}"`)
        } else if (this.inkQuantity >= 25 && this.inkQuantity < 75) {
            console.log(`Маркер заправлен на ${this.inkQuantity}% : цвет маркера "${this.color}"`)
        } else {
            console.log(`Маркер заправлен на ${this.inkQuantity}% : цвет маркера "${this.color}"`)
        }
    }
}

const marker = new Marker(23,"blue");
marker.print();
*/


/// TASK 2

// const data = new Date();
//
// class ExtendedDate {
//     constructor(day, month) {
//
//         this.day = day;
//         this.month = this.arr[month];
//     }
//
//     arr = [
//         'Январь',
//         'Февраль',
//         'Март',
//         'Апрель',
//         'Май',
//         'Июнь',
//         'Июль',
//         'Август',
//         'Сентябрь',
//         'Октябрь',
//         'Ноябрь',
//         'Декабрь',
//     ];
//
//     nextDay() {
//         this.day += 1;
//         console.log(this.month, String(this.day));
//     }
//
//     currentDate() {
//         let data1 = data.getDate() - 1;
//         if (data1 === this.day) {
//             console.log("false: актульный или будующий день недели")
//             return true;
//         } else {
//             console.log("true: это предыдущий день")
//             return false;
//         }
//
//     }
//
// }
//
// var d = new Date(2017, 1, 1); //1 февраля 2017
// d.setDate(d.getDate() - 1); //d изменится на 31 января 2017
//
// let exp = new ExtendedDate(data.getDate(), data.getMonth());
// console.log(exp.month, String(exp.day));
// exp.nextDay();
// exp.currentDate();
