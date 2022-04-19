'use strict';

let resultArr = [0, 0, 0, 0];
const resultArea = document.getElementById('result');
const opros = document.getElementById('opros');
const golosBtn = document.getElementById('golos');
const newOpros = document.getElementById('newOpros');
const resOpros = document.getElementById('resOpros')


newOpros.addEventListener('click',()=>{
    opros.style.display = 'flex';
    newOpros.style.display = 'none';

})
golosBtn.addEventListener('click', () => {
    const allRadio = opros.querySelectorAll('.radio');
    resultArea.textContent = '';
    console.log(allRadio);
    allRadio.forEach((item, index) => {
        if (item.checked) {
            resultArea.append(`Ваш ответ: ${index}: ${allRadio[index].nextElementSibling.innerText}`);
            resultArr[index]++;
            opros.style.display = 'none';
            let text = 'Спасибо что прошли опрос';
            opros.insertAdjacentText('afterend', text);
            resOpros.style.display = 'block';
    }

})
})
resOpros.addEventListener('click',()=>{


})
