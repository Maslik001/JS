'use strict';

// *** Task 1 *** //
/*
let userNumber = +prompt("Введите год");

if (userNumber % 400 === 0 || userNumber % 4 === 0 && userNumber % 100 !== 0) {

    console.log("год високоcный")

}
else
{
    console.log("год не високоcный")
}
*/


// *** Task 2 *** //
/*

let userCash = +prompt("Введите сумму покупки");

if (userCash >0 && userCash< 199.99){
    console.log(`${userCash}р = сумма к оплате без скидки`);
}
else if (userCash >= 200 && userCash<=299.99){
    let discountPrice3 = (userCash - (userCash*3/100));
    let discount = (userCash*3/100);
    console.log(`${discountPrice3}р = сумма к оплате со скидкой 3% (размер составил ${discount}р.)`);
}
else if (userCash >= 300 && userCash<=499.99){
    let discountPrice5 = (userCash - (userCash*5/100));
    let discount = (userCash*3/100);
    console.log(`${discountPrice5}р = сумма к оплате со скидкой 5% (размер составил ${discount}р.)`);
}
else if (userCash >= 500) {
    let discountPrice7 = (userCash - (userCash * 7 / 100));
    let discount = (userCash*3/100);
    console.log(`${discountPrice7}р = сумма к оплате со скидкой 7% (размер составил ${discount}р.)`);
}
else if (userCash <= 0){
    console.log(`${userCash}р = У Вас отрицательный баланс!!!`);
}*/


// *** Task 3 *** //
/*

let quastion1 = prompt(`Какого цвета апельсин? 
Варианты ответа: 
1. оранжевый  
2. фиолетовый 
3. красный`);
const orange = "оранжевый";
if (quastion1 === orange || quastion1 == 1) {  // создал возможность ввода ответа и текстом и выбрать цифрой вариант ответа
    var userMark1 = 2;
}
else {
    var userMark1 = 0;
}
let quastion2 = prompt(`Какого цвета океан? 
Варианты ответа: 
1. розовый 
2. синий 
3. красный`);
const blue = "синий";
if (quastion2 === blue || quastion2 == 2) {
    var userMark2 = 2;
}
else {
    var userMark2 = 0;
}
let quastion3 = prompt(`Сколько континентов на планете Земля?  
Варианты ответа: 
1. один 
2. пять 
3. семь`);
const seven = "семь"
if (quastion3 === seven || quastion3 == 3) {
    var userMark3 = 2;

}
else {
    var userMark3 = 0;
    }
let result = userMark1 + userMark2 + userMark3;
console.log(`Количество набранных Вами баллов ${result}`)*/


// *** Task 4 *** //

/*
let userDay = prompt("Введите день месяца");
let userMonth = prompt("Введите месяц года");
let userYear = prompt("Введите год");

/!**
 * Функция для определения високосного года
 * @param userYearLeap
 * @returns {boolean}
 *!/
let leapYear = function (leapYear) {

    leapYear = ((userYear % 400 === 0) || (userYear % 4 === 0 && userYear % 100 !== 0));

    return leapYear;
}

switch (userMonth) {
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
        if (userDay<10){
            newUserDay = (`0${++userDay}`);
        }
        else if(userDay > 31){
            console.log("Введен не существующий день месяца")
            break;
        }
        else if (userDay == 31){
            var newUserDay = "01";
            userMonth = ++userMonth;
        }
        else {
            var newUserDay = ++userDay;
        }
        console.log(`${newUserDay}.${userMonth}.${userYear}`);
        break;
    case "04":
    case "06":
    case "09":
    case "11":
        if (userDay<10){
            newUserDay = (`0${++userDay}`);
        }
        else if (userDay > 30){
            console.log("Введен не существующий день месяца");
            break;
        }
        else if (userDay == 30){
            var newUserDay = "01";
            userMonth =userMonth +1;
    }
        else {
            var newUserDay = ++userDay;
        }
        console.log(`${newUserDay}.${userMonth}.${userYear}`);
        break;
    case "02":
        if (userDay<10){
            newUserDay = (`0${++userDay}`);
        }
        else if(userDay > 29){
            console.log("Введен не существующий день месяца");
            break;
        }
        else if(userDay > 28 && leapYear() === false){
            console.log("Не было такой даты т.к. год был не високосный");
            break;
        }
        else if (userDay == 29 && leapYear() === true){
            var newUserDay  = "01";
            userMonth = ++userMonth;
        }
        else if (userDay == 28 && leapYear() === false){
            var newUserDay = "01";
            userMonth = ++userMonth;
        }
        else {
            var newUserDay = ++userDay;

        }
        console.log(`${newUserDay}.${userMonth}.${userYear}`);
        break;
    case "12":
        if (userDay<10){
            newUserDay = (`0${++userDay}`);
        }
        else if (userDay>31){
            console.log("Введен не существующий день месяца");
            break;
        }
        else if (userDay == 31){
            var newUserDay = "01";
            var newMonth = "01";
            userYear = ++userYear;
            console.log(`${newUserDay}.${newMonth}.${userYear} -- Happy New Year !!!`);
            break;
        }
        else {
            var newUserDay = ++userDay;
        }
        console.log(`${newUserDay}.${newMonth}.${userYear}`);
        break;

    default:
        console.log("Нет такого месяца!!!");

}

*/

//** Task 5 ** ///
/*

function math(parm1,parm2){
    if (parm1>=0 && parm2>=0){
    return parm1 - parm2;
    }
    else if(parm1<=0 && parm2<=0 ){
        return parm1 * parm2;
    }
    else if (parm1<0 && parm2>0 || parm1>0 && parm2<0){
        return parm1 + parm2;
    }
}

console.log(math(1,2));
console.log(math(-2, -5));
console.log(math(-2, 5));
*/


//** Task 6 ** //

// // let param1 = prompt("Введите число");
// // let operation = prompt("Введите желаемую операцию");
// // let param2 = prompt("Введите число");
// let param1 = 10;
// let operation = "/";
// let param2 = 5;
// function sum(param1,param2) {
//     return Number(param1) + Number(param2);
// }
// console.log(sum());
//
// function calc() {
//
//     switch (operation) {
//         case "+":
//             function sum() {
//                 return param1 + param2;
//             }
//             break;
//         case "-":
//
//         function difference() {
//             return param1 - param2;
//         }
//
//             break;
//         case "*":
//
//         function multiplication() {
//             return param1 * param2;
//         }
//             break;
//         case "/":
//
//         function division() {
//             return param1 * param2;
//         }
//             break;
//     }
// }

// console.log(calc());

//** Task 7 **//

//*** Решение через массив результатов матчей **///
/*

const dolphinsResult = [96,108,89,97,112,101,97,112,101];
const koalasResult = [88,91,110,109,95,123,109,95,106];

function victory(num1,num2,num3,num4,num5,num6){
    let result1= Math.round((num1+num2+num3)/3);
    let result2= Math.round((num4+num5+num6)/3);
    console.log(result1);
    console.log(result2);
    if (result1 > result2 && result1>=100){
        var result = "Dolphins is WIN "
    }
    else if (result1 < result2 && result2>=100){
        var result = "Koalas is WIN "
    }
    else if (result1 === result2 && result1>=100 && result2>=100){
        var result = "Dead heat "
    }
    else {
        var result = "Not enough points scored "
    }
    return result;

}

console.log('First match result: ', victory(dolphinsResult[0],dolphinsResult[1],dolphinsResult[2],koalasResult[0],koalasResult[1],koalasResult[2]));
console.log('Result of the second match: ', victory(dolphinsResult[3],dolphinsResult[4],dolphinsResult[5],koalasResult[3],koalasResult[4],koalasResult[5]));
console.log('Third match result: ', victory(dolphinsResult[dolphinsResult.length-3],dolphinsResult[dolphinsResult.length-2],dolphinsResult[dolphinsResult.length-1],koalasResult[koalasResult.length-3],koalasResult[koalasResult.length-2],koalasResult[koalasResult.length-1]));

*/


//* Доп решение с вводом набранных очков по результатам матчей*/

/*
let dolphinsFirstMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')
let koalasFirstMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')
let dolphinsSecondMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')
let koalasSecondMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')
let dolphinsThirdMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')
let koalasThirdMatch = +prompt('Введите кол-во набранных очков командой "dolphins" в первом матче')

const dolphinsResult = [dolphinsFirstMatch,dolphinsSecondMatch,dolphinsThirdMatch];
const koalasResult = [koalasFirstMatch,koalasSecondMatch,koalasThirdMatch];

function victory(num1,num2,num3,num4,num5,num6){
    let result1= Math.round((num1+num2+num3)/3);
    let result2= Math.round((num4+num5+num6)/3);
    console.log(result1);
    console.log(result2);
    if (result1 > result2 && result1>=100){
        var result = "Dolphins is WIN "
    }
    else if (result1 < result2 && result2>=100){
        var result = "Koalas is WIN "
    }
    else if (result1 === result2 && result1>=100 && result2>=100){
        var result = "Dead heat "
    }
    else {
        var result = "Not enough points scored "
    }
    return result;

}

console.log(victory(dolphinsResult[0],dolphinsResult[1],dolphinsResult[2],koalasResult[0],koalasResult[1],koalasResult[2]));
*/


//*** Task 8  **//

/*
let check = 275;

let tip = check >= 50 && check <= 300?  (`Счет составил: ${check}
Сумма чаевых: ${check*15/100}
Общая стоимость: ${(check*15/100)+check}`)
    : (`Счет составил:: ${check}
Сумма чаевых: ${check*20/100}
Общая стоимость: ${(check*20/100)+check}`);

let res = check < 0 ? ('Введена некорректная сумма чека') : tip ;

console.log(res);
*/


//-------------------------------------  HW 4 -----------------------------------------------------------------//


//* Task 1

/*

function describeCountry(country, population, capital) {

    let res = `В ${country} проживает  ${population} миллионов человек, а ее столицей является ${capital}`;
    return res;
}


let fin = describeCountry("Finland", 6, "Helsinki");
let bel = describeCountry("Belarus", 9, "Minsk");
let germ = describeCountry("Germany", 83, "Berlin");


console.log(`${fin}
${bel}
${germ}`);
*/


//** Task 2

/*
const worldPopulation = 7900;
const coutryChina = "China";
const populationChina = 1441;
const coutryBelarus = "Belarus";
const populationBelarus = 9;
const coutryGermany = "Germany";
const populationGermany = 83;
*/
///// Function declaration  //////
/*
 function percentageOfWorld1(population, world) {
    let res = population / world * 100;
    return res.toFixed(1);
}

let viewPopulationChina = percentageOfWorld1(populationChina,worldPopulation);
let viewPopulationBelarus = percentageOfWorld1(populationBelarus,worldPopulation);
let viewPopulationGermany = percentageOfWorld1(populationGermany,worldPopulation);
*/
/*
//****** Проверка вывода данных в консоль*******
console.log(`В ${coutryChina} проживает ${populationChina} миллион человек, то есть это около ${viewPopulationChina}% мирового населения`);
console.log(`В ${coutryBelarus} проживает ${populationBelarus} миллионов человек, то есть это около ${viewPopulationBelarus}% мирового населения`);
console.log(`В ${coutryGermany} проживает ${populationGermany} миллион человек, то есть это около ${viewPopulationGermany}% мирового населения`);
*/


//// Function expression  //////

/*  ---  скобка для Task 4
let percentageOfWorld2 = function (population, world) {
    let res = population / world * 100;
    return res.toFixed(1);
}
*/
/*
let viewPopulationChina = percentageOfWorld2(populationChina,worldPopulation);
let viewPopulationBelarus = percentageOfWorld2(populationBelarus,worldPopulation);
let viewPopulationGermany = percentageOfWorld2(populationGermany,worldPopulation);

/*
//****** Проверка вывода данных в консоль*******
console.log(`В ${coutryChina} проживает ${populationChina} миллион человек, то есть это около ${viewPopulationChina}% мирового населения`);

console.log(`В ${coutryBelarus} проживает ${populationBelarus} миллионов человек, то есть это около ${viewPopulationBelarus}% мирового населения`);
console.log(`В ${coutryGermany} проживает ${populationGermany} миллион человек, то есть это около ${viewPopulationGermany}% мирового населения`);
*/

//** Task 3
//// Arrow function /////

/*
let percentageOfWorld3 = (population, world) => (population / world * 100).toFixed(1);
let viewPopulationChina = percentageOfWorld3(populationChina,worldPopulation);
let viewPopulationBelarus = percentageOfWorld3(populationBelarus,worldPopulation);
let viewPopulationGermany = percentageOfWorld3(populationGermany,worldPopulation);*/
//****** Проверка вывода данных в консоль*******
/*
console.log(`В ${coutryChina} проживает ${populationChina} миллион человек, то есть это около ${viewPopulationChina}% мирового населения`);
console.log(`В ${coutryBelarus} проживает ${populationBelarus} миллионов человек, то есть это около ${viewPopulationBelarus}% мирового населения`);
console.log(`В ${coutryGermany} проживает ${populationGermany} миллион человек, то есть это около ${viewPopulationGermany}% мирового населения`);
*/


//** Task 4   --- работает со вложенной функцией Function expression / для проверки нужно раскомментировать
/*
function describePopulation(country,population, world){

    console.log(`В ${country} проживает ${population} миллион человек, то есть это около ${percentageOfWorld2(population,world)}% мирового населения`);
}

describePopulation(coutryChina,populationChina,worldPopulation);
*/


//** Task 5

/*
let populations = [1441, 83, 9, 67];

if (populations.length === 4){
    console.log(true);
}
else {
    console.log(false);
}
// для проверки нужно раскомментировать Function declaration
let percentages =[(percentageOfWorld1(populations[0],worldPopulation)),(percentageOfWorld1(populations[1],worldPopulation)),(percentageOfWorld1(populations[2],worldPopulation)),(percentageOfWorld1(populations[3],worldPopulation)),]

console.log(percentages);

 */


// ** Task 6
/*

const team1= 'Dolphins';
const team2 = 'Koalas';
let avgDolphins;
let avgKoalas;

let calcAverage = (a,b,c) =>  Math.round((a+b+c)/3);
function checkWinner(res1,res2){
    var result;
    if (res1 >= res2*2){
        result = `${team1} is WIN (${res1} vs ${res2})`;
    }
    else if ( res2 >= res1*2){
        result = `${team2} WIN (${res2} vs ${res1}) `;
    }
    else {
        result = "Not enough points scored "
    }
    return result;

}
// ------ Data 1

avgDolphins = calcAverage(44, 23,71);
avgKoalas = calcAverage(65,54,49);

// ------ Data 2
//
// avgDolphins = calcAverage(85, 54,41);
// avgKoalas = calcAverage(23,34,27);


console.log(checkWinner(avgDolphins,avgKoalas));*/
