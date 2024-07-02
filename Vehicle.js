var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("the Engine of ".concat(this.model, " started"));
    };
    return Car;
}());
var x6 = new Car("BMW", "X6", 2020);
x6.start();
