'use strict';

const calnOn = document.getElementById('calc-img');
const trash = document.getElementById('trash');
const trashCleaner = document.getElementById('trashiconCleaner');
const cleaner = document.getElementById('cleaner');
const folder = document.getElementById('cleanerfolder');
const delFolder = document.getElementById('delFolder');
const body = document.getElementById('body');
const effectPromt = document.getElementById('effect-prompt');
let csGame = document.getElementById('cs');
let closeCalc;
let calcWrapper;
let gameWindow;
let closeGame;
let calc;
let resBlock;
let memoryBtn;
let memSymbol;
let isOperation;
let num2 = '';
let num1 = '';
let memory = '';
let blockAddNewCalc = true;
let blockAddNewGame = true;
let currentDateWindows;

function date_time() {
    // let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ms = new Date();
    // let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Пятница", "Суббота"];
    return currentDateWindows = (ms.toLocaleString());
}
setInterval(function () {
    document.getElementById('currentDate').innerHTML = date_time();
}, 1000);
body.addEventListener('keydown', keyCodeF, false);
csGame.addEventListener('click', () => {
    if (blockAddNewGame === true) {
        blockAddNewGame = false;
        gameWindow = document.getElementById('gameWindow');
        let game = `
     <button class="close-game" id="closeGame">Закрыть игру</button>
        <iframe src="https://game.play-cs.com/ru/cs_italy/27003/de" seamless frameborder=0 ></iframe>
    `
        gameWindow.insertAdjacentHTML("afterbegin", game);
        gameWindow.style.display = 'block';
        closeGame = document.getElementById('closeGame');
        closeGame.addEventListener('click', () => {
            blockAddNewGame = true;
            while (gameWindow.firstChild) {
                gameWindow.removeChild(gameWindow.firstChild);
            }
        })
    }
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
});
document.addEventListener('keydown', keyCodeF, false);
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
function keyCodeF(e) {
    let keyCode = e.key;
    if (keyCode === 'F11') {
        effectPromt.classList.remove('animate__flash');
        effectPromt.style.display = 'none';
    } else if (keyCode === 'Escape') {
        gameWindow.style.display = 'none';
    }
}

/**
 * Функция для подсчёта результатов операции
 * @param num1 - первое введенное число
 * @param operation - оператор
 * @param num2 - второе ввреденное число
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
            isOperation = undefined;
            num2 = '';
            num1 = '';
            memory = '';
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

function demonstration() {
    if (Number.isInteger(num1 * 1)) {
        if (isOperation === '=') {
            resBlock.textContent = `${num1}`; //${isOperation}${num2}
        } else {
            resBlock.textContent = `${num1}${isOperation}${num2}`
        }
    } else {
        if (isOperation === '=') {
            resBlock.textContent = `${num1.toFixed(3)}`; //${isOperation}${num2}
        } else {
            resBlock.textContent = `${num1.toFixed(3)}${isOperation}${num2}`; //${isOperation}${num2}
        }

    }
}

function initialization() {
    // closeCalc = document.getElementById('close');
    calc.addEventListener('click', (e) => {
        let elem = e.target;
        while (!elem.classList.contains('calc-btn')) {
            elem = elem.parentNode;
        }
        const dataNum = elem.dataset.symbol;
        if (Number(dataNum) || dataNum === '0') {
            if (isOperation === '=') {
                resBlock.textContent = num1 = '';
                isOperation = undefined;
            }
            if (isOperation === undefined) {
                num1 += dataNum * 1;
            } else if (isOperation) {

                num2 += dataNum * 1;
                if (Number.isInteger(num1*1) && Number.isInteger(num2*1)) {
                    resBlock.textContent = `${num1}${isOperation}${num2}`;
                } else {
                    resBlock.textContent = `${num1.toFixed(6)}${isOperation}${num2}`;
                }

                num2 += dataNum;
                demonstration();
                return;

            }
        } else if (dataNum === '=') {
            if (num2 === '') {
                demonstration();
            } else {
                resBlock.textContent = ``;
                num1 = calcOper(num1, isOperation, num2);
                num2 = ''

                isOperation = undefined;
                if (Number.isInteger(num1)) {
                    resBlock.textContent = `${num1}`;
                } else if (isOperation) {
                    if (Number.isInteger(num1)) {
                        resBlock.textContent = `${num1.toFixed(6)}`;
                    } else {
                        num2 *= 1;
                        resBlock.textContent = `${num1.toFixed(6)}`;
                    }
                } else {
                    num2 *= 1;
                    resBlock.textContent = `${num1.toFixed(6)}`;
                }

                isOperation = '=';
                demonstration();

            }
            return;
        } else if (dataNum === 'del') {
            num1 = '';
            num2 = '';
            isOperation = undefined;
            resBlock.textContent = '';
            return;
        } else if (dataNum === 'M') {
            memoryFunc();
            return;
        } else if (dataNum === 'MC') {
            memory = '';
            memSymbol.style.display = 'none';
            return;
        } else if (isOperation) {
            if (num2 !== "") {
                num1 = calcOper(num1, isOperation, num2);
                num2 = '';
                isOperation = dataNum;
<<<<<<< HEAD
                if (Number.isInteger(num1)) {
                    resBlock.textContent = `${num1}${isOperation}`;
                } else {
                    resBlock.textContent = `${num1.toFixed(6)}${isOperation}`;
                }
=======
                demonstration();
>>>>>>> Calc
            } else {
                if (isOperation) {
                    isOperation = dataNum;
                    demonstration();
                } else {
                    demonstration();
                }
            }
            return;

        } else {
            isOperation = dataNum;
        }
        resBlock.insertAdjacentText('beforeend', `${dataNum}`);

    });
}

/**
 * Работа с памятью
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
    } else if (num1 !== '' && isOperation !== undefined) {
        num2 = memory;
        resBlock.textContent = `${num1}${isOperation}${memory}`;
    } else {
        num1 = memory;
        resBlock.textContent = `${num1}`;
    }
}

/**
 * добавление калькулятора на страницу
 */
calnOn.addEventListener('click', () => {
    if (blockAddNewCalc === true) {
        blockAddNewCalc = false;
        calnOn.style = 'background-color: rgba(0, 0, 0, 0.3);'
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
            calnOn.style = 'background-color: inherit;';
            isOperation = undefined;
            num2 = '';
            num1 = '';
            memory = '';
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
