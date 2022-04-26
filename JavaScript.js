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
const memoryBtn = document.getElementById('memory');
const memSymbol = document.getElementById('mem');
let isOperation;
let result = '';
let num2 = '';
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
function calcOper(number, operation) {
    num2 = '';
    result = result * 1;
    number = number * 1;
    switch (operation) {
        case '+':
            return result = result + number;
        case '-':
            return result = result - number;
        case '/':
            if (result === 0 || number===0){
                return resBlock.textContent = `Ошибка`;
            } else {
                return result = result / number;
            }
        case '*':
            return result = result * number;
    }

}

/**
 * Работа с памятью
 * @returns {string}
 */
function memoryF() {
    memSymbol.style.display = 'flex';
    if (memory === '') {
        memory = result * 1;
        return resBlock.textContent = `${memory}`;

    } else if (memory !== '' && isOperation) {
        num2 = memory
        calcOper(num2, isOperation);
        return resBlock.textContent = `${memory}`;
    } else {
        result = Number(result);
        result = memory
        calcOper(result, isOperation)
        return resBlock.textContent = `${memory}`;
    }

}


/**
 * добавление калькулятора на страницу
 */
calnOn.addEventListener('click', () => {
        calcWrapper = document.getElementById('calc-wrapper');
        let newCalc = `<div class="res" id="resBlock"></div>
        <div class="close" id="close">close</div>
        <div class="mem" id="mem">M</div>
        <div class="calc" id="calc">
            <div class="calc-btn" data-symbol="del">C</div>
            <div class="calc-btn memory" id="memory" data-symbol="M+">M+</div>
            <div class="calc-btn" data-symbol="M-">M-</div>
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
});


function initialization() {
    calc.addEventListener('click', (e) => {

        let elem = e.target;
        while (!elem.classList.contains('calc-btn')) {
            elem = elem.parentNode;
        }
        const dataNum = elem.dataset.symbol;
        resBlock.insertAdjacentText('beforeend', `${dataNum}`);
        metka:
            if (Number(dataNum) || dataNum === 'M+' || dataNum === '0') {
                // resBlock.textContent = "";
                if (isOperation || dataNum === 'M+') {
                    // resBlock.textContent = "";
                    if (dataNum === 'M+') {
                        memoryF();
                        // memoryBtn.style.backgroundColor = 'aqua';
                    } else if (num2 !== '') {
                        num2 += dataNum;
                    } else {
                        num2 += dataNum;
                    }

                } else {
                    result += dataNum;
                }
            } else if (dataNum === '=') {
                result = calcOper(num2, isOperation);
                resBlock.textContent = "";
                resBlock.insertAdjacentText('beforeend', `${result}`);
                isOperation = '';
                // result = '';
                break metka;

            } else if (dataNum === 'del') {
                result = '';
                num2 = '';
                isOperation = '';
                resBlock.textContent = "";

            } else if (dataNum === 'M-') {
                memory = '';
                resBlock.textContent = "";
                memSymbol.style.display = 'none';
                // memoryBtn.style.backgroundColor = 'white';
            } else {
                isOperation = dataNum;
            }
        // console.log(elem.dataset.symbol);

    });
}


