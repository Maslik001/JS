'use strict';

const poll = {
    question: "Какой ваш любимый язык программирования?",
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
};
console.log(poll.answers)

function registerNewAnswer(a) {
    if (a < 4) {
        let counter = this.answers[a];
        counter++;
        for (let i in this.answers) {
            a == i ? this.answers.splice(a, 1, counter) : false;
        }
    } else {
        console.log('Попробуйте еще раз');
        // return input();
    }
}

function input() {
    let a = 3;
    registerNewAnswer.call(poll, a);
}

input()
console.log(poll.answers);
// poll.call(poll,registerNewAnswer);
