'use strict';

const x = 34;
const y = 28;
let d = [];

function integer(x, y) {

    if (y - 1 === x) {
        return x - 1;
    }
    if (x > y) {
      return   console.log('неверный диапазон')
    }
    d.push(x + 1)
    return x++ + integer(x, y);

}

integer(x, y)
console.log(d.sort())
