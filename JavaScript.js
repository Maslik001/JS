'use strict';


//*********** TASK 1 **************///

/*
let Car = function (make, speed) {
    this.make = make;
    this.speed  = speed ;
}

Car.prototype.accelerate = function () {
    console.log(`${this.speed+10}`)
    return this.speed + 10;
}
Car.prototype.brake = function () {
    console.log(`${this.speed-5}`)
    return this.speed - 5;
}
let bmw = new Car('BMW', 120);
let mercedes = new Car('Mercedes',95)
console.log(`${bmw.make} едет со скоростью ${bmw.speed} км/ч`);
console.log(`${mercedes.make} едет со скоростью ${mercedes.speed} км/ч`);
console.log(`${mercedes.make} снижает скорость до ${mercedes.brake()} км/ч`);
console.log(`${bmw.make} увеличивает скорость до ${bmw.accelerate()} км/ч`);
*/

//*********** TASK 2 **************///
/*
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(mill){
       this.speed = mill * 1.6;
    }
    accelerate () {
        this.speed += 10;
        return this;
    }
    brake () {
        return this.speed - 5;
    }
}*/

/*let bmw = new CarCl('BMW', 180);
console.log(bmw);

console.log(`Скорость ${bmw.make}: ${bmw.speedUS} mph`);
let mill = bmw.speedUS;
bmw.speedUS = mill;
console.log(`Скорость ${bmw.make}: ${bmw.speed} kmh`);*/

//---- 4 ---- //
/*
let ford = new CarCl('FORD', 120);
console.log(`Скорость ${ford.make}: ${ford.speedUS} mph`);
ford.speedUS = 75;
console.log(`Скорость ${ford.make}: ${ford.speed} kmh`);
console.log(`${ford.make} снижает скорость до ${ford.brake()} км/ч`);
console.log(`${ford.make} увеличивает скорость до ${ford.accelerate().speedUS} mph`);*/
