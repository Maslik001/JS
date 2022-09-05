//
// // ['a', 'c', 'b', 'a', 'b'] => { a: 2, b: 2, c: 1 }
//
// let arr = ['a', 'c', 'b', 'a', 'b'];
//
// let obj= {};
//
// let a = arr.reduce((value,item)=>{
//     value[item] = value[item]? value[item]+1: 1;
//     return value;
//
// },obj)
// console.log(a)

const keys  = [
    'content.landingpages.podcasts',
    'content.landingpages.podcasts.android',
    'content.landingpages.podcasts.android.code',
    'content.landingpages.podcasts.android.offer',
    'content.landingpages.music',
    'content.landingpages.music.jazz',
    'content.landingpages.music.pop',
    'content.landingpages.music.metal',
];
let a = keys.map((item)=>item.split('.'));
let i = 0;
let minus = '-';
a.forEach((item,index)=>{
    if (item[index] === item[i]){
        console.log(minus + ' ' + item[i]);
        if (item[i] == (i+1)){
            console.log(item[index]);
        }
    }
});

// console.log(b);


/*
Expected Output:
- content
-- landingpages
---- podcasts
------ android
-------- code
-------- offer
---- music
------ jazz
------ pop
------ metal
*/