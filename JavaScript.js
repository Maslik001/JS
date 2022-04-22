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
const folder = document.getElementById('cleanerfolder');
const delFolder = document.getElementById('delFolder');
const body = document.getElementById('body');
/**
 * Функция для подсчёта результатов операции
 * @param param1 - ввреденное число
 * @param simbol - оператор
 */
function calc(number,operation) {
    switch (operation) {
        case '+': return  result + number;
        case '-': return  result - number;
        case '/': return  result / number;
        case '*': return  result * number;
        case '%': return  result % number;
    }
}

// nine.addEventListener('click',()=>{
//     firstNum.push(9)
// })
// three.addEventListener('click',()=>{
//     secondNum.push(2)
// })
// plus.addEventListener('click',()=>{
//     return plus = "+";
// })



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
    folder.classList.add('animate__hinge');
    setInterval(function (){
        delFolder.style.display = 'none';
        trash.style.display = 'flex';
        trashCleaner.style.display = 'none';
        folder.style.display = 'none';
    },1500)

})
body.addEventListener('click',()=>{
    delFolder.style.display = 'none';
    cleaner.style.display = 'none';
})