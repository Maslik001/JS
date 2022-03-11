'use strict';
//*********************************  HW-5 *********************************/////


//*****  Task 1
/*const neighbours = ['Russia', 'Poland', 'Ukraine', 'Lithuania'];
console.log(neighbours);

neighbours.push('Utopia');   /// push - добавлет элемент в конец массива
console.log(neighbours);

neighbours.pop();   /// pop - уберает последнее значение из массива
console.log(neighbours);

if (neighbours.indexOf('Germany')){
    console.log('Вероятно, это не центральноевропейская страна');
}

const a = [0];
neighbours[a]= 'Russian Federation';
console.log(neighbours)*/

//******* Task 2

/*let myCountry = {
    country: "Беларусь",
    capital: "Минск",
    language: "Беларусский",
    population: 9,
    neighbours: ['Россия', 'Польша', 'Украина', 'Литва']
}*/


//********** Task 3
/*

let myCountry = {
    country: "Беларусь",
    capital: "Минск",
    language: "Беларусский",
    population: 9,
    neighbours: ['Россия', 'Польша', 'Украина', 'Литва']
}
console.log(`В Республике ${myCountry.country} проживает: ${myCountry.population} миллионов человек.
Государственный язык: "${myCountry.language}". 
С ней граничат: ${myCountry.neighbours[0]}, ${myCountry.neighbours[2]}, ${myCountry.neighbours[1]}
Столица: ${myCountry.capital}.`)

console.log(myCountry.population+2);
console.log(myCountry['population']-2);
*/


/// ********** Task 4
/*

const myCountry = {
    country: "Республика Беларусь",
    capital: "Минск",
    language: "Беларусский",
    population: 9,
    neighbours: ['Россия', 'Польша', 'Украина', 'Литва'],
    describe: function () {
        return `В ${this.country} проживает: ${this.population} миллионов человек.
Государственный язык: ${this.language}. 
С ней граничат: ${this.neighbours}.
Столица: ${this.capital}`;
    },
    heckIsland: function (){
      return this.isIsland = this.neighbours.length < 0 ;
    }
}

myCountry.heckIsland();
// console.log(myCountry.describe());  // раскоментить для первой части задания
console.log(myCountry);
console.log(myCountry.isIsland) /// вопрос почему не видит переменную через log ????? 

*/


