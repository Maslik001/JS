'use strict';


//**** Task 1

// const empty = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];  /// 1) 2)
// console.log(empty.length);  /// 3)
//
// let lastIndex = empty.length-1;
// console.log(empty[0],empty[3],empty[lastIndex]); /// 4)
//
// const mixedDataTypes = ["HTML", "CSS", "JavaScript", true, 2500, 5000]; /// 5)
// console.log(mixedDataTypes.length);

// const itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'oracle', 'amazon']; /// 6)
// console.log(itCompanies);   /// 7)
// console.log('Кол-во компаний: '+itCompanies.length);   /// 8)

/*let lastCompany = itCompanies.length-1;
let mediumCompany = Math.round(itCompanies.length / 2);
console.log(mediumCompany);

console.log(`Первая компания: ${itCompanies[0]}
Средняя компания: ${itCompanies[mediumCompany]}
Последняя компания: ${itCompanies[lastCompany]}`);   ///  9)*/

/*itCompanies.forEach(function (element){
    console.log(element);
});      */                                        //// 10)

/// ---- Замена только перных букв у значений на верхний регистр --- как доп задание ))) ///
/*itCompanies.forEach(function (element){
    let uperCas = element.substring(0,1).toUpperCase();
    let newWords = uperCas + element.substring(1,element.length);
    console.log(newWords);
    return newWords;

});  */                                              /// 11)

////------ новый массив для выполнения след пунктов HomeWork

// const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/*itCompanies2.forEach(function (element) {
    let uperCas = element.toUpperCase();
    console.log(uperCas);
});            */               //// 11)

// console.log(itCompanies2.join(', ') + " являются крупными ИТ-компаниями");  ///// 12)

/*let index = itCompanies2.indexOf("IB-M")
if (index !== -1) {
    console.log(`${itCompanies2[index]} существует в массиве`);
} else {
    console.log(`Значение не существует в массиве`);                    /// 13)
}*/

/*let newMas = [];
let mim = 'o';
for (let i = 0; i < itCompanies2.length; i++) {

    let res1 = itCompanies2[i].toLowerCase().indexOf(mim.toLowerCase());
    let res2 = itCompanies2[i].toLowerCase().lastIndexOf(mim.toLowerCase());
    if (res1 !== res2) {
        newMas.push(itCompanies2[i][0].toUpperCase()+itCompanies2[i].slice(1));
    }
}
console.log(newMas);    */                                  /// 14)

// console.log(itCompanies2.sort());     /// 15)
//
// console.log(itCompanies2.reverse());  /// 16)

// console.log(itCompanies2.splice(3,itCompanies2.length));   /// 17)
// console.log(itCompanies2.splice(0,itCompanies2.length-3));   //// 18)

/*let mediumCompany = Math.round(itCompanies2.length / 2);
delete itCompanies2.pop[mediumCompany];
console.log(itCompanies2);   */                               /// 19)  && 21)

/*itCompanies2.pop();
console.log(itCompanies2);   /// 20)
itCompanies2.shift();
console.log(itCompanies2);   /// 22) */

/*
itCompanies2.splice(0,itCompanies2.length);
console.log(itCompanies2);                        /// 23)

*/


////------     Task 2  ------ ////

/*let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words2 = text.split(" ");

console.log(words2);
console.log(words2.length); */  // 2)


// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// shoppingCart.unshift("Meat");
// console.log(shoppingCart);   //// 3)
// shoppingCart.push("Sugar");
// console.log(shoppingCart);   /// 3.1)

/*let a = shoppingCart.indexOf('Honey');
shoppingCart.splice(a,1);
console.log(shoppingCart);  */          //// 3.2)

/*let a = shoppingCart.indexOf('Tea');
shoppingCart.splice(a,1,'Green Tea');
console.log(shoppingCart);  */                           //// 3.3)


/*const countries = [ "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya" ];

let a = countries.indexOf('Ethiopia');
if (a !== -1){
    console.log(countries[a]);
} else {
    countries.push('Ethiopia');
}
console.log(countries); */    //// 4)

/*const webTechs = [ "HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB" ];
let a = webTechs.indexOf('Sass');
if (a !== -1){
    console.log(webTechs[a]+' - это препроцесс CSS');
} else {
    webTechs.push('Sass');
    console.log(webTechs);                                     /// 5)
}*/

/*const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);    */                                   //// 6 )


/////   Task 3  /////

/*const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages)
let minAge = ages[0]
console.log(`Мин возвратаст: ${minAge}`);
let maxAge = ages[ages.length-1];
console.log(`Макс возвратаст: ${maxAge}`);

let midleAge = Math.round((minAge+maxAge)/ 2) ;
console.log(`Средний возраст: ${midleAge}`);

let userUp = maxAge- minAge;
console.log(`Разница в возрасте от меньшего к большему: ${userUp}`);


let minMidleAge = Math.abs(minAge - midleAge);
let midleMaxAge = Math.abs(minAge - midleAge);
function comparison(a,b){
 b > a ? console.log("Возраст от среднего к максимальному больше") : console.log("Возраст от минимального к средниму больше");
}
comparison(minMidleAge,midleMaxAge);*/


//////////////////// ----------------  HM  -- ЦИКЛЫ  --------- //////////////////////////////////////////

//// ------ Task 1 --------


const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

//// ------ 01 -----
/*
for (let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 0;
while (i <= 10){
    console.log(i);
    i++;
}
*/
/// ------- 02 ---------
/*
for (let i = 10; i >= 0; i--){
    console.log(i);
}

let i = 10;
while (i >= 0){
    console.log(i);
    i--;
}
*/


///  ------- 03 -------

/*let n = 10;
for (let i = 0; i <= n; i++){
    console.log(i);
}*/


/// ----- 04 -----
/*let a = '';
for (let i = 0; i <= 7; i++) {
    a += "#";
    console.log(a);
}*/

/// --- 05  ---
/*
for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${i} = ${i*i}`)
}
*/

/// ------ 06  - ------

/*for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i**2}    ${i**3}` )
}*/

//// ----- 07 -----

/*
for (let i = 0; i <= 100; i++) {
    /// Вариант 1
    /!*if (i % 2 === 0) {
        console.log(i)
    }*!/
    /// Вариант 2
    //i % 2 === 0 ? console.log(i) : false;
}
*/


//// ----- 08 -----
/*for (let i = 0; i <= 100; i++) {
    i % 2 !== 0 ? console.log(i) : false;
}*/

//// ----- 09 -----

for (let i = 0; i <= 100; i++) {
    i > 0 &&  i%i === 0 && i/i !==0 ? console.log(i) : false;
}
