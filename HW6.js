//****** Task 1
/*
for (let i = 0; i <= 10; i++){
    if (i === 0){
        console.log(`${i} - это ноль`);
    }
    else if (i%2 === 0){
        console.log(`${i} - четное число`);
    }
    else {
        console.log(`${i} - не четное число`);
    }
}
console.log()*/

//**** Task 2

/*let b = '';
for (let i = 0; i <= 20; i++){
    b += '#';
    console.log(b);
}*/


///****** Task 3

/*
const  post = {
    author: "John",  // log
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 // log
            }
        },
        {
            userId: 5,   // log
            userName: "Jane",
            text: "lorem ipsum 2",  // log
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId+ " " + post.comments[1].text);*/


// ****** Task 4

/*

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++){
      console.log(`${i} X ${j} = ${i*j}`)
  }
}
*/


//**** Task 5


const time = {
    hour: 20,
    minutes: 30,
    seconds: 45,
}


function displayTime(h,m,s){
    console.log(timeHour(h) + ":" + timeMinutes(m) + ":" + timeSeconds(s));
}

function timeSeconds(s) {
    let resSec = time.seconds + Number(s);
    if (resSec <= 59 && resSec > 0) {
        return time.seconds = resSec;

    } else if (resSec > 59) {
        let m1 = Math.round(resSec / 60);
        if ((time.seconds = resSec % 60) < 10) {
            if (m1 <= 5) {
                let nulVar = "0";
                return (time.seconds = nulVar + (resSec % 60)) + m1;
            }
        } else {
            return time.seconds = resSec % 60;
        }
    } else {
        console.log("Введено отрицательное значение")
    }
}

function timeMinutes(m) {
    let res = Number(time.minutes) + Number(m);
    if (res <= 59 && res > 0) {
        return Number(time.minutes = res);

    } else if (res > 59) {
        let m1 = Math.round(res / 60);
        if ((time.minutes = res % 60) < 10) {
            if (m1 <= 5) {
                let nulVar = "0";
                return Number(time.minutes = nulVar + (res % 60));
            }
        } else {
            return Number(time.minutes = res % 60);
        }
    } else {
        console.log("Введено отрицательное значение")
    }
}

function timeHour(h) {
    let resHour = Number(time.hour) + Number(h);
    if (resHour <= 24 && resHour > 0) {
        return Number(time.hour = resHour);

    } else if (resHour > 24) {
        let m1 = Math.round(resHour / 24);
        if ((time.hour = resHour % 24) < 10) {
            if (m1 < 10) {
                let nulVar = "0";
                return Number(time.hour = `${nulVar} + ${resHour % 24}`);
            }
        } else {
            return Number(time.hour = resHour % 24);
        }
    } else {
        console.log("Введено отрицательное значение")
    }
}

console.log(displayTime(2,30,60));