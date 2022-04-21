'use strict';

const closeCalc = document.getElementById('close');
const calnOn = document.getElementById('calc-img');
const calcWrapper = document.getElementById('calc-wrapper');
let nine = document.getElementById('nine');
let three = document.getElementById('three');
let plus = document.getElementById('plus');
const trash = document.getElementById('trash');
const trashCleaner = document.getElementById('trashiconCleaner');
const cleaner = document.getElementById('cleaner');
const folder = document.getElementById('folder');
const delFolder = document.getElementById('delFolder');
/**
 * Функция для подсчёта результатов операции
 * @param param1 - первое ввреденное число
 * @param simbol - оператор
 * @param param2 - второе введенное число
 */
function calc(firstNumber, symbol, secondNumber) {
    let sum;
    if (symbol!=='='|| symbol!=='C'){
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
    }
    console.log(sum)
}}
let firstNum = [];
let secondNum = [];
calc(...firstNum, plus.innerText, secondNum[0]);

nine.addEventListener('click',()=>{
    firstNum.push(9)
})
three.addEventListener('click',()=>{
    secondNum.push(2)
})
plus.addEventListener('click',()=>{
    return plus = "+";
})



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

trash.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    cleaner.style.display = 'flex';
})
cleaner.addEventListener('click',()=>{
    trashCleaner.style.display = 'flex';
    trash.style.display = 'none';
    cleaner.style.display = 'none';
})
trashCleaner.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})

folder.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    delFolder.style.display = 'flex';

})

delFolder.addEventListener('click',()=>{
    delFolder.style.display = 'none';
    trash.style.display = 'flex';
    trashCleaner.style.display = 'none';
})