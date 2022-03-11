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
    myTime: function () {
        console.log(this.hour + ":" + this.minutes + ":" + this.seconds);
    },
    myOclock: function (s){
        for (let j = 0; j < 1; j++) ;
        let res = this.seconds + Number(s);
        if (res <= 60) {
            console.log(this.hour + ":" + this.minutes + ":" + res)
        } else if (res > 60) {
            console.log(this.hour + ":" + (this.minutes + 1) + ":" + res - 60);
        } else {

        }
    }
}


time.myTime();
time.myOclock(30);