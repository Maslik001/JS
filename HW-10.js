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

/*function fibonachi(n){
    let a =0;
    let b= 1;
    console.log(a);
    console.log(b);
    for (let i = 0 ; i <= n; i++){
        let c = a+b;
        a=b;
        b=c;
        console.log(c)
    }
}
fibonachi(5)*/

/*let a = 0;
let b = 1;
console.log(a);
console.log(b);
function fibonachi(n) {
    --n;
    if (n === 0) return ;
    let c = a+b;
    a=b;
    b=c;
    console.log(c);
    fibonachi(n);
}
fibonachi(7)*/


////****** Task 3  ***** /////
// const numbers = [1, 2, 3, 1, 2,4,4];

/*function double(num) {
    for (let i = 0; i <= num.length - 1; i++) {
        for (let j = 1 + i; j <= num.length; j++) {
            if (num[i] === num[j]) {
                num.splice(j, num[i]);
            }
        }
    }
    console.log(numbers);
}
double(numbers);*/

/*let counter = 0;
function double(num) {
    let a = num[num[counter]]
    let b = num[num.length-counter]
    if(a===b){
        num.splice(1,b);
        console.log(num)
    }
    counter++;
    if (counter>num.length) return;
    double(num)

}

double(numbers)*/

////****** Task 4  ***** /////
/*function sum(number){
    if (number<10){
        console.log(number);
        return;
    }
    let a = number%10;
    let b = (number-a)/10;
    let res= a+b;
    if (res<= 9) {
        console.log(res);
        return;
    }
    number = res;
    sum(number);
}
sum(151654);*/

////****** Task 5  ***** /////

// let text = 'var_text_hello';
//
// function funcText() {
//     let arr = text.split('_')
//
//     // for (let i = 0; i < arr.length; i++){
//     //
//     // }
//     arr.forEach((value, index) => {
//         let b = arr.slice(index,index+1)
//         console.log(b)
//     });
// }
//
// funcText()

////****** Task 6  ***** /////

// let a = '123456';
// function revert(num){
//     let a = num.split('')
//
//     for (let i = 0;i<a.length;i++){
//         [i] = [i+1]
//
//     }
//     console.log(a)
// }
//
// revert(a)


////****** Task 7  ***** /////

/*
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let res = [];
function getInt(){
    for (let i = 0;i < arr1.length;i++){
        for (let j = 0;j<arr2.length;j++){
            if (arr1[i]===arr2[j]){
                res.push(arr2[j])
            }
        }
    }
    console.log(res);
}
getInt();*/
