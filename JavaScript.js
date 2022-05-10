'use strict';

////--------------TASK 1 ------------------////////////

//*Используйте функцию конструктор для реализации электромобиля (называемого "EV")
// в качестве дочернего класса "Car", т.е. EV строится на основании Car.
// Помимо марки и текущей скорости, "EV" также имеет текущий заряд батареи в % (свойство "charge").
/*
let Car = function (model,speed){
    this.model = model;
    this.speed = speed;
}
const EV = function (model,speed,charge){
    Car.call(this,model,speed);
    this.change = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
let tesla = new EV('Tesla', 130);

//Реализуйте метод 'chargeBattery', который принимает аргумент "chargeTo" и устанавливает зарядное устройство "charge" в это положение.

EV.prototype.chargeBattery = function (chargeTo){
    this.change = chargeTo;
}
/!*
tesla.chargeBattery(23)
console.log(tesla)
*!/

// Внедрите метод "accelerate", который увеличит скорость автомобиля на 20 и уменьшит заряд на 1%.
// Затем запишите сообщение подобного содержания: "Tesla едет со скоростью 140 км/ч, заряд составляет 22%".

EV.prototype.accelerate = function (){
    this.speed = this.speed + 10;
    this.change = this.change - 1;
    setTimeout(console.log,3000,(`${this.model} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.change} %`))
}
/!*
tesla.accelerate();
*!/

//Создайте объект электромобиля и поэкспериментируйте с вызовами " accelerate",
// " brake" и " chargeBattery" (заряд до 90%). Обратите внимание, что происходит, когда
// вы "ускоряетесь"! Подсказка: Ознакомьтесь с определением полиморфизма.

let bmw = new EV('BMW',320,90);
EV.prototype.brake = function (brake){
    bmw.accelerate();
    this.brake = brake;
    this.speed = this.speed - brake;
    this.change = this.change + 1;
    setTimeout(console.log,6000,(`После торможения на ${this.brake} км/ч, скорость уменьшилась до ${this.speed} км/ч и заряд восстановился до ${this.change} %`))
}
setTimeout(console.log,1000,(`Завели и разгнали ${bmw.model} до ${bmw.speed} км/ч. Заряд батареи ${bmw.change}%`))
bmw.brake(100);
*/

////--------------TASK 2 ------------------////////////

// № 1  -- Повторите задачу № 1, но на этот раз с использованием классов ES6: создайте
// дочерний класс 'EVCl' класса 'CarCl'
/*

class CarCl {
    constructor(model, speed) {
        this.model = model
        this.speed = speed;
    }

    brake(brake) {
        this.speed -= brake;
        return this._brake = brake;
    }
}

// № 2 --- Сделайте свойство "charge" приватным
class EVCl extends CarCl {
    #change;
    constructor(model, speed, change) {
        super(model, speed);
        this.#change = change;
    }

    chargeBattery(chargeTo) {
        return this.#change = chargeTo + 1;
    }

    accelerate(s) {
        this.speed += s;
        this.#change -= s / 100;
        setTimeout(console.log, 1000, (`${this.model} едет со скоростью ${this.speed} км/ч, заряд составляет ${this.chargeBattery(this.#change)} %`))
    }

// Реализовать возможность объединения в цепочку методов 'accelerate' и 'chargeBattery' этого класса,
// а также обновить метод 'brake' в классе 'CarCl'. Тогда поэкспериментируйте с цепочкой!
    brake(brake) {
        super.brake(brake);
        this.chargeBattery(this.#change);
        setTimeout(console.log, 2500, (`После торможения на ${this._brake} км/ч, скорость ${this.model} уменьшилась до ${this.speed} км/ч и заряд восстановился до ${this.#change} %`))
    }
}

//Тестовые данные:
// § Автомобиль данных 1: " Rivian", движущийся со скоростью 120 км/ч, с зарядом 23%
let rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate(48);
rivian.brake(25);
// rivian.accelerate(48).brake(25);  --- не понимаю почему не работает ((((
*/
