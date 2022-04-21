'use strict';

const closeCalc = document.getElementById('close');
const calnOn = document.getElementById('calc-img');
const calcWrapper = document.getElementById('calc-wrapper');
const nine = document.getElementById('nine');
const three = document.getElementById('three');
const plus = document.getElementById('plus');


/**
 * Функция для подсчёта результатов операции
 * @param param1 - первое ввреденное число
 * @param simbol - оператор
 * @param param2 - второе введенное число
 */
function calc(firstNumber, symbol, secondNumber) {
    let sum;
    while (symbol!=='='|| symbol!=='C'){
    switch (symbol) {
        case '+':
            sum = firstNumber + secondNumber;
            break;
        case '-':
            sum = firstNumber - secondNumber;
            break;
        case '/':
            sum = (firstNumber / secondNumber).toFixed(3);
            break;
        case '*':
            sum = firstNumber * secondNumber;
            break;
        case '%':
            sum= (firstNumber/(secondNumber*100)).toFixed(3);
            break;
    }}
    console.log(sum)
}

calc(100, "/", 3);


calnOn.addEventListener('click',()=>{
    calcWrapper.classList.add('animate__fadeInBottomLeft')
    calcWrapper.style.display = 'flex';
    // calcWrapper.classList.remove('animate__fadeInBottomLeft')
})

closeCalc.addEventListener('click',()=>{
    // calcWrapper.classList.add('animate__fadeOutBottomLeft')
    calcWrapper.style.display = 'none';
    // calcWrapper.classList.remove('aanimate__fadeOutBottomLeft')
})






