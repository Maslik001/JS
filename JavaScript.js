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
const memoryBtn = document.getElementById('memory')
let isOperation;
let result = '';
let num2 = '';
let memory = '';

/**
 * Функция для подсчёта результатов операции
 * @param param1 - ввреденное число
 * @param simbol - оператор
 */
function calcOper(number, operation) {
    num2 = '';
    result = result * 1;
    number = number * 1;
    switch (operation) {
        case '+':
            return result =  result + number;
        case '-':
            return result = result - number;
        case '/':
            return result = result / number;
        case '*':
            return result = result * number;
    }

}

function memoryF(){
    if (memory === '') {
        memory = result*1;
      return   resBlock.textContent = `${memory}`;

    } else if(memory !== '' && isOperation){
        num2 = memory
        calcOper(num2, isOperation);
        return  resBlock.textContent = `${memory}`;
    }
    else {
        result = Number(result);
         result = memory
        calcOper(result, isOperation)
       return  resBlock.textContent = `${memory}`;
    }

}


// console.log(number.lastIndexOf('0'),number.length);

calc.addEventListener('click', (e) => {
    let elem = e.target;
    while (!elem.classList.contains('calc-btn')) {
        elem = elem.parentNode;
    }
    const dataNum = elem.dataset.symbol;
    resBlock.insertAdjacentText('beforeend', `${dataNum}`);
    metka:
    if (Number(dataNum) || dataNum === 'M+') {
        // resBlock.textContent = "";


        if (isOperation || dataNum === 'M+') {
            if (dataNum === 'M+') {
                memoryF();
                memoryBtn.style.backgroundColor = 'aqua';
                // num2 = memory;
            } else {
                num2 += dataNum;
            }
        } else {
            result += dataNum;
        }
    } else if (dataNum === '=') {
        calcOper(num2, isOperation);
        resBlock.textContent = "";
        resBlock.insertAdjacentText('beforeend', `${result}`);
        isOperation = '';
        result = '';
        break metka;

    } else if (dataNum === 'del') {
        result = '';
        num2 = '';
        isOperation = '';
        resBlock.textContent = "";

    }
    // else if (dataNum === 'M+') {
    //     resBlock.textContent = `${memory}`;
    //     if (memory === "") {
    //         memory = result;
    //         resBlock.textContent = `${memory}`;
    //     } else {
    //         result = memory
    //          calcOper(result, isOperation);
    //         resBlock.textContent = `${memory}`;
    //     }
    //     memoryBtn.style.backgroundColor = 'aqua'
    // }
    else if (dataNum === 'M-') {
        memory = '';
        resBlock.textContent = "";
        memoryBtn.style.backgroundColor = 'white';
    } else {
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
