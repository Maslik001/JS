'use strict';


///****   Task 1   ***** /////

/*
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
*/


////****** Task 2  ***** /////
/*

let fibMas= [];
function fibonachi(n){
    if (n===0) {
        fibMas.push(n)

        return fibonachi(n+1)

    }

    fibMas.push(fibMas[fibMas.length-1]+n)

    return fibonachi(fibMas.length-1);

}
fibonachi(0)
console.log(fibMas)*/


////****** Task 3  ***** /////
/*
const numbers = [1, 2, 3, 1, 2];

function double(num) {
    num.forEach(function(elem){
        console.log(elem)
    })


    // return double(num)
}
double(numbers)*/
