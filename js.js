// Task 1
/*
let userMoney = prompt("Введите сумму доспупных денег");
let chocolateCost = prompt("Введите стоимость одной шоколадки");
let resultChocolate = Math.floor(userMoney / chocolateCost);
let resulMoney = (userMoney % chocolateCost);

alert('Доступно для покупки ' + resultChocolate);
alert('Остаток денег ' + resulMoney);
*/

// Task 2

// *** ver 1.0 *** (основное решение)
/*
let userNumber = prompt("Введите трехзначное число");
let result1 = userNumber % 10;
let result2 = ((userNumber % 100)-result1)/10;
let result3 = Math.round((userNumber/100) -((result1 + (result2*10))/100)); // округление понадобилось для пользовательского числа например 114

console.log(`${result1}${result2}${result3}`);
*/

//***  ver 2.0 **** (дополнительное решение)

/*
const zero = 0;
let theEnd;
let userNumber = prompt("Введите трехзначное число");
let result1 = userNumber % 10;
let result2 = String(userNumber % 100);
let result_2 = result2.slice(0,-1);
let result3 = String(userNumber % 1000);
let result_3 = result3.slice(0,-2);
if (result1 === 0){
    theEnd = `${zero}${result_2}${result_3}`;
}
else if (result_2 == 0){
    theEnd = `${result1}${zero}${result_3}`;
}
else if (result_3 == 0){
    theEnd = `${result1}${result_2}${zero}`;
}
else {
theEnd = `${result1}${result_2}${result_3}`;
}
console.log(theEnd);
*/




// Task 3
/*
let userNumber = prompt('ведите число');
if (userNumber <= 0) {
    alert('низя');
}
else if (userNumber%2===0) {
    alert('Четное');
}
else {
    alert('НЕ Четное');
}
*/


// Task 4
// BMI = mass / height ** 2 = mass / (height * height) (mass в kg и height в метрах)
/*
let massMark = prompt('ведите массу тела Марка в килограммах');
let heightMark = prompt('ведите длинну тела Марка в метрах'); /// именно длинну тела )))
let massJohn = prompt('ведите массу тела Джона в килограммах');
let heightJohn = prompt('ведите длинну тела Джона в метрах');

let result_BMI_Mark = Math.ceil(massMark / heightMark ** 2);
alert(`Mark BMI index =  ${result_BMI_Mark}`);
let result_BMI_John = Math.ceil(massJohn / heightJohn ** 2);
alert("John BMI index = " + result_BMI_John);


//*** var 1.0  *** (основное решение)
/*
let resultBMI;
let markHigherBMI = (result_BMI_Mark > result_BMI_John);
if (markHigherBMI === true) {

    resultBMI = `Марка BMI (${result_BMI_Mark}) выше, чем у Джона (${result_BMI_John})!`;
} else if (markHigherBMI === false) {
    if (result_BMI_Mark === result_BMI_John) {
        resultBMI = "BMI Марка и Джона одинаковые !!";
    } else if (result_BMI_Mark < result_BMI_John) {
        resultBMI = `Джона BMI (${result_BMI_John}) выше, чем у Марка (${result_BMI_Mark})!`;
    }
}
console.log(resultBMI);
*/


// *** Var 2.0  **** (дополнительное решение - без логич. переменной)
/*
if (result_BMI_Mark === result_BMI_John){
    markHigherBMI = "BMI одинаковые";
}
else if(result_BMI_Mark > result_BMI_John) {
    markHigherBMI =`Марка BMI (${result_BMI_Mark}) выше, чем у Джона (${result_BMI_John})!`;
}
else if (result_BMI_Mark < result_BMI_John) {
    markHigherBMI = `Джона BMI (${result_BMI_John}) выше, чем у Марка (${result_BMI_Mark})!`;
}
console.log(markHigherBMI);
*/
