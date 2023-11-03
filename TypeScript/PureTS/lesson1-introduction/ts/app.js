// var info:number = 10;
// var myArr:Array<string> = ["1","2"];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(myArr);
// type myObjType={
//     id:number,
//     title:string,
//     price:number
// }
// var myObj:myObjType = {
//     id:0,
//     title : "Hello",
//     price:300
// }
// console.log(myObj);
// function myFunc(a:string):void{
//     console.log(a);
// }
var Moto = /** @class */ (function () {
    function Moto(title, speed) {
        this.mytitle = title;
        this.myspeed = speed;
    }
    Moto.prototype.motoSpeed = function () {
        return this.myspeed;
    };
    return Moto;
}());
var myMoto = new Moto("BMW", 500);
// console.log(myMoto.motoSpeed());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(title, speed) {
        return _super.call(this, title, speed) || this;
    }
    Car.prototype.test = function () {
        this.motoSpeed();
    };
    return Car;
}(Moto));
