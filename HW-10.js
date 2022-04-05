'use strict';

const x = 22;
const y = 28;
let d = [];

function integer(x, y) {

    if (y - 1 === x) {
        return x - 1;
    }
    d.push(x + 1)
    return x++ + integer(x, y);

}

integer(x, y)
console.log(d.sort())
