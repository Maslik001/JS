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
/*

// --- начальная точка отсчёта по времени
const time = {
    hour: 20,
    minutes: 30,
    seconds: 45,
}

//---- функция для подсчёта секунд
function timeSeconds(s) {
    let resSec = time.seconds + Number(s);
    if (resSec <= 59 && resSec > 0) {
        return time.seconds = resSec;
    } else if (resSec > 59) {
        let m1 = Math.trunc(resSec / 60);
        time.minutes = time.minutes + m1;
        if ((time.seconds = resSec % 60) < 10) {
                let nulVar = '0';
                return Number(time.seconds = nulVar + (resSec % 60));
        } else {
            return time.seconds = resSec % 60;
        }
    } else if (resSec <= 0) {
        time.seconds = Number(s) % 60 + time.seconds;
        let m1 = Math.trunc(resSec / 60);
        if (m1 <= 0 && resSec < 120) {
            time.minutes = (time.minutes + m1) - 1;
        }
        if (time.seconds < 10 && time.seconds > 0) {
            let nulVar = '0';
            return Number(time.seconds = nulVar + time.seconds);
        } else {
            return time.seconds = 60 + resSec % 60;
        }
    } else {
        return resSec;
    }
}
//---- функция для подсчёта минут
function timeMinutes(m) {
    let resMIn = Number(time.minutes) + Number(m);
    if (resMIn <= 59 && resMIn > 0) {
        if (resMIn < 9){
            let nulVar = "0";
            return time.minutes = nulVar + resMIn;
        } else {
        return Number(time.minutes = resMIn);
        }
    } else if (resMIn > 59) {
        let h1 = Math.trunc(resMIn / 60);
        time.hour = time.hour + h1;
        if ((time.minutes = resMIn % 60) < 10) {
            let nulVar = "0";
            return Number(time.minutes = nulVar + (resMIn % 60));
        } else {
            return Number(time.minutes = resMIn % 60);
        }
    }
    else if (resMIn <= 0) {
        time.minutes = Number(m) % 60 + time.minutes;
        let h1 = Math.trunc(resMIn / 60);
        if (h1 <= 0 && resMIn < 120) {
            time.hour = (time.hour + h1) - 1;
        }
        if (time.minutes < 10 && time.minutes >= 0) {
            let nulVar = '0';
            return Number(time.minutes = nulVar + time.minutes);
        } else {
            return time.minutes = 60 + resMIn % 60;
        }
    } else {
        return resMIn;
    }
}
//---- функция для подсчёта часов
function timeHour(h) {
    let resHour = Number(time.hour) + Number(h);
    if (resHour <= 24 && resHour > 0) {
        return Number(time.hour = resHour);
    } else if (resHour > 24) {
        let d1 = Math.trunc(resHour / 24);
        time.hour = d1;
        if ((time.hour = resHour % 24) < 10) {
            let nulVar = "0";
            return Number(time.hour = nulVar + (resHour % 24));
        } else {
            return Number(time.hour = resHour % 24);
        }
    } else if (resHour <= 0 ){
        if (resHour === 0 && resHour <= 9){
            let nulVar = "0";
            return Number(time.hour = nulVar + resHour);
        } else if (resHour < 0){
        time.hour = 24 + resHour;
        return time.hour;
        }
    } else {
        return resHour;
    }
}
//---- функция для вывода актуального времени
function displayTime(h, m, s) {
    if (timeSeconds(s) >= 0 && timeMinutes(m) >= 0 && timeHour(h) >= 0 ){
    console.log(time.hour + ":" + time.minutes + ":" + time.seconds);}
    else {
        console.log("введены некорректные данные");
    }
}

// --- ввод данных (работает как с добавлением времени, так и с отниманием --- также предусмотрена защита от ввода некорректных данных)
displayTime(4, 30, 15);

*/
