'use strict';

const closeCalc = document.getElementById('close');
const calnOn = document.getElementById('calc-img');
const calcWrapper = document.getElementById('calc-wrapper');
const trash = document.getElementById('trash');
const trashCleaner = document.getElementById('trashiconCleaner');
const cleaner = document.getElementById('cleaner');
const folder = document.getElementById('cleanerfolder');
const delFolder = document.getElementById('delFolder');
const body = document.getElementById('body');
const effectPromt = document.getElementById('effect-prompt');
const calc = document.getElementById('calc');
const resBlock = document.getElementById('resBlock');
let isOperation;
let result = '';

/**
 * Функция для подсчёта результатов операции
 * @param param1 - ввреденное число
 * @param simbol - оператор
 */
function calcOper(number, operation) {
// if(number.length-1 === 0){
// number.reverse();
// }

    switch (operation) {
        case '+':
            return Number(result) + number;
        case '-':
            return Number(result) - number;
        case '/':
            return Number(result) / number;
        case '*':
            return Number(result) * number;
        case '%':
            return Number(result) % number;
    }

}

// console.log(number.lastIndexOf('0'),number.length);

calc.addEventListener('click', (e) => {
    let elem = e.target;
    resBlock.textContent = "";
    while (!elem.classList.contains('calc-btn')) {
        elem = elem.parentNode;
    }
    const dataNum = elem.dataset.symbol;
    let result1 = result + dataNum;
    resBlock.insertAdjacentText('beforeend', `${result1}`);
    if (Number(dataNum)) {

        if (isOperation) {
            result = calcOper(Number(dataNum), isOperation);
        } else {
            result += dataNum;
        }
    } else if (dataNum === '=') {
        console.log(result);
        resBlock.textContent = "";
        resBlock.insertAdjacentText('beforeend', `${result}`);
        isOperation = '';

    } else if (dataNum === 'del') {
        result = '';
        isOperation = '';
        resBlock.textContent = "";
    }
        // else if(dataNum === '%'){
        //
        //     isOperation = '';
        //     resBlock.textContent="";
    // }
    else {
        isOperation = dataNum;
    }
    console.log(elem.dataset.symbol);

});


calnOn.addEventListener('click', () => {
    calcWrapper.classList.add('animate__fadeInBottomLeft')
    calcWrapper.style.display = 'flex';
    setTimeout(function () {
        calcWrapper.classList.remove('animate__fadeInBottomLeft')
    }, 1200)

})

closeCalc.addEventListener('click', () => {
    calcWrapper.classList.add('animate__fadeOutBottomLeft')
    setTimeout(function () {
        calcWrapper.style.display = 'none';
        calcWrapper.classList.remove('animate__fadeOutBottomLeft')
    }, 1000)
})

trash.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    cleaner.style.display = 'flex';
})
cleaner.addEventListener('click', () => {
    trashCleaner.style.display = 'flex';
    trash.style.display = 'none';
    cleaner.style.display = 'none';
})
trashCleaner.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

folder.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    delFolder.style.display = 'flex';

})

delFolder.addEventListener('click', () => {
    folder.classList.add('animate__hinge');
    setInterval(function () {
        delFolder.style.display = 'none';
        folder.style.display = 'none';

    }, 1500);
    trash.style.display = 'flex';
    trashCleaner.style.display = 'none';

})
body.addEventListener('click', () => {
    delFolder.style.display = 'none';
    cleaner.style.display = 'none';
})

setTimeout(function () {
    effectPromt.style.display = 'flex';
    setTimeout(function () {
        effectPromt.classList.remove('animate__zoomInUp');
    }, 2500)
    setTimeout(function () {
        effectPromt.classList.add('animate__flash');
        effectPromt.style.display = 'none';
        effectPromt.style.display = 'flex';
    }, 1000)

}, 1000);

document.addEventListener('keydown', keyCodeF, false);

function keyCodeF(e) {
    let keyCode = e.key;
    if (keyCode === 'F11') {
        effectPromt.classList.remove('animate__flash');
        effectPromt.style.display = 'none';
    }
}
