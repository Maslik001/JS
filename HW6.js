//****** Task 1

/*for (let i = 0; i <= 10; i++){
    if (i%2 === 0){
        console.log(`${i} - четное число`);
    }
    if (i%2 !== 0){
        console.log(`${i} - не четное число`);
    }

}
console.log()*/

//**** Task 2
/*

let b = " ";
let c = "#"
for (let i = 0; i < 20; i++){
    b += c;
    console.log(b);
}
*/


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

let res = 2;

for (let i = 2; i <= 9; i++) {
    b = i * 2;
    c = i ** 2;
    console.log(i +"*2" + " = "+ b );
    console.log(i +"*" + i + " = "+ c );

}
