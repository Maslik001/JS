'use strict';

let closeCalc;
const calnOn = document.getElementById('calc-img');
let calcWrapper;
const trash = document.getElementById('trash');
const trashCleaner = document.getElementById('trashiconCleaner');
const cleaner = document.getElementById('cleaner');
const folder = document.getElementById('cleanerfolder');
const delFolder = document.getElementById('delFolder');
const body = document.getElementById('body');
const effectPromt = document.getElementById('effect-prompt');
let calc;
let resBlock;
let memoryBtn;
let memSymbol;
let isOperation;
let result = '';
let num2 = '';
let num1 = '';
let memory = '';


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


/**
 * Функция для подсчёта результатов операции
 * @param param1 - ввреденное число
 * @param simbol - оператор
 */
function calcOper(num1, operation, num2) {
    if (num2 === "") {
        return initialization();
    } else {

        num1 = num1 * 1;
        num2 = num2 * 1;
        switch (operation) {
            case '+':
                return num1 += num2;
            case '-':
                return num1 -= num2;
            case '/':
                if (num1 === 0 || num2 === 0) {
                    return resBlock.textContent = `Ошибка`;
                } else {
                    // return num1 = Math.floor((num1 / num2) * 100) / 100;
                    return num1 /= num2;
                }
            case '*':
                return num1 *= num2;
        }
        isOperation = "";
    }
}


/**
 * добавление калькулятора на страницу
 */
let blockAddNewCalc = true;
calnOn.addEventListener('click', () => {
    if (blockAddNewCalc === true) {
        blockAddNewCalc = false;
        calcWrapper = document.getElementById('calc-wrapper');
        let newCalc = `<div class="res" id="resBlock"></div>
        <div class="close" id="close">close</div>
        <div class="mem" id="mem">M</div>
        <div class="calc" id="calc">
            <div class="calc-btn" data-symbol="del">C</div>
            <div class="calc-btn memory" id="memory" data-symbol="M">M</div>
            <div class="calc-btn" data-symbol="MC">MС</div>
            <div class="calc-btn" data-symbol="/">&divide;</div>
            <div class="calc-btn" data-symbol="7">7</div>
            <div class="calc-btn" data-symbol="8">8</div>
            <div class="calc-btn" data-symbol="9">9</div>
            <div class="calc-btn" data-symbol="*">&times;</div>
            <div class="calc-btn" data-symbol="4">4</div>
            <div class="calc-btn" data-symbol="5">5</div>
            <div class="calc-btn" data-symbol="6">6</div>
            <div class="calc-btn" data-symbol="-">-</div>
            <div class="calc-btn" data-symbol="1">1</div>
            <div class="calc-btn" data-symbol="2">2</div>
            <div class="calc-btn" data-symbol="3">3</div>
            <div class="calc-btn" data-symbol="+">+</div>
            <div class="calc-btn grid" data-symbol="0">0</div>
            <div class="calc-btn" data-symbol="=">=</div></div>`
        calcWrapper.insertAdjacentHTML("afterbegin", newCalc);
        calc = document.getElementById('calc');
        resBlock = document.getElementById('resBlock');
        closeCalc = document.getElementById('close');
        calcWrapper.classList.add('animate__fadeInBottomLeft')
        calcWrapper.style.display = 'flex';
        setTimeout(function () {
            calcWrapper.classList.remove('animate__fadeInBottomLeft')
        }, 1200)
        closeCalc.addEventListener('click', () => {
            blockAddNewCalc = true;
            calcWrapper.classList.add('animate__fadeOutBottomLeft')
            setTimeout(function () {
                calcWrapper.style.display = 'none';
                calcWrapper.classList.remove('animate__fadeOutBottomLeft')
                while (calcWrapper.firstChild) {
                    calcWrapper.removeChild(calcWrapper.firstChild);
                }
            }, 1000)
        })
        initialization();
    }
});


function initialization() {
    calc.addEventListener('click', (e) => {
        let elem = e.target;
        while (!elem.classList.contains('calc-btn')) {
            elem = elem.parentNode;
        }
        const dataNum = elem.dataset.symbol;
        let a = dataNum;

        resBlock.insertAdjacentText('beforeend', `${dataNum}`);
        if (Number(dataNum) || dataNum === '0') {
            if (isOperation === undefined) {
                num1 += dataNum * 1;
            } else if (isOperation) {
                num2 += dataNum * 1;
                if (Number.isInteger(num1*1) && Number.isInteger(num2*1)) {
                    resBlock.textContent = `${num1}${isOperation}${num2}`;
                } else {
                    resBlock.textContent = `${num1.toFixed(2)}${isOperation}${num2}`;
                }
                // resBlock.textContent = `${num1}${isOperation}${num2}`;
            }
        } else if (dataNum === '=') {
            if (num2 === '') {
                resBlock.textContent = `${num1}`;
            } else {
                resBlock.textContent = ``;
                num1 = calcOper(num1, isOperation, num2);
                num2 = ''
                isOperation = undefined;
                if (Number.isInteger(num1)) {
                    resBlock.textContent = `${num1}`;
                } else if (isOperation) {
                    // isOperation = dataNum;
                    if (Number.isInteger(num1)) {
                        resBlock.textContent = `${num1}`;
                    } else {
                        num2 *= 1;
                        resBlock.textContent = `${num1.toFixed(2)}`;
                    }
                } else {
                    num2 *= 1;
                    resBlock.textContent = `${num1.toFixed(2)}`;
                }
            }
        } else if (dataNum === 'del') {
            num1 = '';
            num2 = '';
            isOperation = undefined;
            resBlock.textContent = '';

        } else if (dataNum === 'M') {
            memoryFunc();
        } else if (dataNum === 'MC') {
            resBlock.textContent = ``;
            memory = '';
            memSymbol.style.display = 'none';
        } else if (isOperation) {
            if (num2 !== "") {
                num1 = calcOper(num1, isOperation, num2);
                num2 = ''
                num1 *= 1;
                isOperation = dataNum;
                if (Number.isInteger(num1)) {
                    resBlock.textContent = `${num1}${isOperation}`;
                } else {
                    resBlock.textContent = `${num1.toFixed(2)}${isOperation}`;
                }
            } else {
                if (Number.isInteger(num1)) {
                    resBlock.textContent = `${num1}${isOperation}`;
                } else if (isOperation) {
                    isOperation = dataNum;
                } else {
                    num2 *= 1;
                    resBlock.textContent = `${num1}${isOperation}`;
                }
            }
        } else {
            isOperation = dataNum;
        }
    });
}

/**
 * Работа с памятью
 * @returns {string}
 * **/
function memoryFunc() {
    memSymbol = document.getElementById('mem');
    memoryBtn = document.getElementById('memory');
    memSymbol.style.display = 'flex';
    let res = resBlock.textContent.split('M', 1);
    if (memory === '') {
        if (Number(res)) {
            memory = res * 1;
            num1 = memory;
            resBlock.textContent = `${memory}`;
        } else {
            memSymbol.style.display = 'none';
            resBlock.textContent = `Ошибка`;
        }
    } else if (num1 !== ''&& isOperation !== undefined){
        num2 = memory;
        resBlock.textContent = `${num1}${isOperation}${memory}`;
    }
    else {
        num1 = memory;
        resBlock.textContent = `${num1}`;
    }
}
