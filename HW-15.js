'use strict';

let resultArr = [0, 0, 0, 0];
const resultArea = document.getElementById('result');
const opros = document.getElementById('opros');
const golosBtn = document.getElementById('golos');
golosBtn.addEventListener('click', () => {
    const allRadio = opros.querySelectorAll('.radio');
    resultArea.textContent = '';
    console.log(allRadio);
    allRadio.forEach((item, index) => {
        if (item.checked) {
            // resultArea.append(index);
            resultArr[index]++;
            console.dir(resultArr);
            // opros.style.marginTop = '10px';
            // opros.style.border='none';
            // opros.style.backgroundColor='lightgreen';
    }
})
})
