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

const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/*itCompanies2.forEach(function (element) {
    let uperCas = element.toUpperCase();
    console.log(uperCas);
});            */               //// 11)

// console.log(itCompanies2.join(', ') + " являются крупными ИТ-компаниями");  ///// 12)

let index = itCompanies2.indexOf("IBM")
if (index !== -1) {
    console.log(`Этот ${index} существует в массиве`)  ///  --- ??? как вывости найденый массив ????
} else {
    console.log("Этого элемента не существует в массиве");
}









