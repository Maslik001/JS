'use strict';

const poll = {
    question: "Какой ваш любимый язык программирования?",
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
};
let resultArr = poll.answers;
let lang = poll.options;
let question = poll.question;
const resultArea = document.getElementById('result');
let opros;
let golosBtn;
const newOpros = document.getElementById('newOpros');
const wrapper = document.querySelector('.wrapper');
const resOpros = document.getElementById('resOpros');
const resOprosWrapper = document.querySelector('.resOpros-wrapper');
const more = document.getElementById('more');

newOpros.addEventListener('click', () => {
    newOpros.style.display = 'none';
    newOprosFun(wrapper, lang);
})

function newOprosFun(elem, langs) {
    let newOprosHtmlCode = `
    <div id="opros" class="myForm">
        <label>${question}</label>
        <label class="opros-position">
            <input class="radio" type="radio" name="languages">
            <span>${langs[0]}</span>
        </label>
        <label class="opros-position">
            <input class="radio" type="radio" name="languages">
            <span>${langs[1]}</span>
        </label>
        <label class="opros-position">
            <input class="radio" type="radio" name="languages">
            <span>${langs[2]}</span>
        </label>
        <label class="opros-position">
            <input class="radio" type="radio" name="languages">
            <span>${langs[3]}</span>
        </label>
        <button id="golos" class="btn">Голосовать</button>
    </div>
    `;
    elem.insertAdjacentHTML('afterbegin', newOprosHtmlCode);
    let b = document.querySelector('.myForm')
    b.style.display = 'flex';
    b.classList.add('animate__backInDown');
    golosBtn = document.getElementById('golos');
    opros = document.getElementById('opros');
    initialization();
}

function initialization() {
    golosBtn.addEventListener('click', () => {
        const allRadio = opros.querySelectorAll('.radio');
        resultArea.textContent = '';
        allRadio.forEach((item, index) => {
            if (item.checked) {
                resultArea.textContent = '';
                opros.nextSibling.textContent = '';
                resultArr[index]++;
                resultArea.append(`Ваш ответ: ${allRadio[index].nextElementSibling.innerText}`);
                opros.style.display = 'none';
                let text = 'Спасибо что прошли опрос';
                opros.insertAdjacentText('afterend', text);
                resOpros.style.display = 'block';
                resultArea.style.display = 'flex';
                resultArea.classList.add('animate__wobble');
                resOprosWrapper.style.display = 'flex';
                let commentTimer = setTimeout(() => {
                    resOpros.classList.add('animate__heartBeat');
                }, 2000);
            }
        })
    });
}

resOpros.addEventListener('click', () => {
    resOpros.nextSibling.textContent = '';
    const allRadio = opros.querySelectorAll('.radio');
    resOpros.insertAdjacentText('afterend', `
    ||| ${allRadio[0].nextElementSibling.innerText} == ${resultArr[0]} 
    ||| ${allRadio[1].nextElementSibling.innerText} == ${resultArr[1]}
    ||| ${allRadio[2].nextElementSibling.innerText} == ${resultArr[2]}
    ||| ${allRadio[3].nextElementSibling.innerText} == ${resultArr[3]}`);
    resOpros.style.display = 'none';
});

more.addEventListener('click', () => {
    resultArea.textContent = '';
    resOpros.nextSibling.textContent = '';
    opros.nextSibling.textContent = '';
    resOpros.style.display = 'none';
    resultArea.style.display = 'none';
    resOprosWrapper.style.display = 'none';
    opros.style.display = 'flex';
});

