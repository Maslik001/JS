'use strict';

let resultArr = [0, 0, 0, 0];
const resultArea = document.getElementById('result');
const opros = document.getElementById('opros');
const golosBtn = document.getElementById('golos');
const newOpros = document.getElementById('newOpros');
const resOpros = document.getElementById('resOpros')
const resOprosWrapper = document.querySelector('.resOpros-wrapper')
const more = document.getElementById('more')
newOpros.addEventListener('click', () => {
    opros.style.display = 'flex';
    newOpros.style.display = 'none';
})
golosBtn.addEventListener('click', () => {
    const allRadio = opros.querySelectorAll('.radio');
    resultArea.textContent = '';
    // console.log(allRadio);
    allRadio.forEach((item, index) => {
        if (item.checked) {
            resultArea.textContent = '';
            opros.nextSibling.textContent = '';
            resultArr[index]++;
            resultArea.append(`Ваш ответ: ${index}: ${allRadio[index].nextElementSibling.innerText}`);
            opros.style.display = 'none';
            let text = 'Спасибо что прошли опрос';
            opros.insertAdjacentText('afterend', text);
            resOpros.style.display = 'block';
            resultArea.style.display = 'block';
            resOprosWrapper.style.display = 'flex';
        }
    })
})
console.log(resultArr)
resOpros.addEventListener('click', () => {
    resOpros.nextSibling.textContent = '';
    const allRadio = opros.querySelectorAll('.radio');
    console.dir(allRadio)
    resOpros.insertAdjacentText('afterend', `
    | ${resultArr[0]} за язык :  ${allRadio[0].nextElementSibling.innerText}     
    | ${resultArr[1]} за язык :  ${allRadio[1].nextElementSibling.innerText}
    | ${resultArr[2]} за язык :  ${allRadio[2].nextElementSibling.innerText}
    | ${resultArr[3]} за язык :  ${allRadio[3].nextElementSibling.innerText}`);

    // addContent(resOprosWrapper);


})

more.addEventListener('click', () => {
    resultArea.textContent = '';
    resOpros.nextSibling.textContent = '';
    opros.nextSibling.textContent = '';
    resOpros.style.display = 'none';
    resultArea.style.display = 'none';
    resOprosWrapper.style.display = 'none';
    opros.style.display = 'flex';
})


//// не получилось очищать при повторном нажатии кнопки "Посмотреть все результаты"
// function addContent(elem) {
//     let myCod = `
//         <div id="prosmotr" class="prosmotr">
//         <p class="resLang">
//             fdsfsdf
//         </p>
//         <p class="resLang">
// sdfsdf
//         </p>
//         <p class="resLang">
// sdfsdf
//         </p>
//         <p class="resLang">
// sdfsdf
//         </p>
// </div>
// `;
//
//     console.dir(elem)
//     elem.insertAdjacentHTML('beforeend', myCod);
//     // elem.lastElementChild.textContent = '';
// }