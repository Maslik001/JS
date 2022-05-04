'use strict';


//*********** TASK 1 **************///
/*

let Car = function (make, speed) {
    this.make = make;
    this.speed  = speed ;
}

Car.prototype.accelerate = function () {
    console.log(`${this.speed}`*1+10)
    return this.speed*1 + 10;
}
Car.prototype.brake = function () {
    console.log(`${this.speed}`-5)
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

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS(){
        return this.speed /1.6;
    }
    set speedUS(speedUS()){
       return  _speedUS * 1.6;
    }
}

let bmw = new CarCl('BMW', 120);
console.log(`Скорость ${bmw.make}: ${bmw.speedUS} mph`);
bmw.speedUS = bmw.speedUS;
console.log(bmw.speedUS);