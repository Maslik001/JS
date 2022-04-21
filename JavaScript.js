'use strict';


/**
 * Функция для подсчёта результатов операции
 * @param param1 - первое ввреденное число
 * @param simbol - оператор
 * @param param2 - второе введенное число
 */
function calc(firstNumber, simbol, secondNumber) {
    let sum;
    switch (simbol) {
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
    }
    console.log(sum)
}

calc(100, "/", 3);

const closeCalc = document.getElementById('close')
const calnOn = document.getElementById('calc-img');
const calcWrapper = document.getElementById('calc-wrapper')
calnOn.addEventListener('click',()=>{
    calcWrapper.classList.add('animate__fadeInBottomLeft')
    calcWrapper.style.display = 'flex';
    setTimeout(function () {
        calcWrapper.classList.remove('animate__fadeInBottomLeft')
        calcWrapper.classList.add('animate__fadeOutBottomLeft')
    },1000)


})

closeCalc.addEventListener('click',()=>{

    calcWrapper.style.display = 'none';
    calcWrapper.classList.add('animate__fadeInBottomLeft')
})






