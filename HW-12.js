/*
'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

let players1 = [...game.players[0]];
const players2 = [...game.players[1]];
const gk = players1[0];
const other1 = [...players1.slice(1, players1.length)];
const allPlayers = [...game.players[0], ...game.players[1]];
players1.push('Thiago', 'Coutinho', 'Perisic');
const players1Final = players1;
// console.log(players1Final);
const {team1, x: draw, team2} = game.odds;

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

gameEvents.delete(64);
// console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
// console.log(events);
const keys = [...new Set(gameEvents.keys())];
// console.log(keys)
const events1 = [...gameEvents.values()];
// console.log(events1)

// 3. С помощью цикла на "gameEvents" выведите каждый элемент на консоли, отмечая, относится ли он к первой половине или ко второй половине (после 45 минут) игры
/!*gameEvents.forEach((value, key, map) => {
    if (key < '45'){
        console.log((`[ПЕРВЫЙ ТАЙМ] ${key}: ${value} `));
    } else {
        console.log((`[ВТОРОЙ ТАЙМ] ${key}: ${value} `));
    }
});*!/
/// 3. Реализовал предыдущее задание с помощью сетИнтервал и сетТаймаут
function gameProgress() {
    let i = 0;
    let timerId = setInterval(() => {
        i++;
        if (keys[i - 1] < 45) {
            console.log(`[ПЕРВЫЙ ТАЙМ] ${keys[i-1]}: ${events1[i-1]}`);
        } else {
            console.log(`[ВТОРОЙ ТАЙМ] ${keys[i-1]}: ${events1[i-1]}`);
        }

        if (i >= gameEvents.size) {
            console.log('---===Game over===---');
            clearInterval(timerId);
        }
    }, 1500);
    console.log('---===Game start===---');
    gameComments();
}
function gameComments (){
let commentTimer = setTimeout (()=>{
     console.log(`Break in the game. (for American customers I inform you - this code was written by Maslik 😋 )`);
},4000);
}
gameProgress();

*/
