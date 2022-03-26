'use strict';

class Marker {

    constructor(color,inkQuantity) {
        this.color = color;
        this.inkQuantity = inkQuantity;

    }
    function(){
        return console.log(this.color +" " + this.inkQuantity + " %")
    }

}
class Zapravka{
    constructor(color,inkQuantity) {
        this.color = marker.color;
        this.inkQuantity = marker.inkQuantity;
    }
    function(){
    for (let a = 0; a<3; a++){
        this.color = marker.color;
        this.inkQuantity += 25;

    }
        return console.log(this.color +" " + this.inkQuantity + " %")
        }
}
let marker= new Marker('red',25);
let zapravka = new Zapravka(Marker.prototype.color,Marker.prototype.inkQuantity)
marker.function();
zapravka.function();