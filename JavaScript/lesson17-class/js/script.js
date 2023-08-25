class Car{
    constructor(brand,year,stock){
        this.mystock = stock;
        this.mybrand = brand;
        this.myyear = year;
    }

    calculateSpeed(km,hour){
        return `${this.mybrand} Speed : ${km/hour}`
    }
   
}


const myCar = new Car("BMW",2020,true);


console.log(myCar.calculateSpeed(100,2));



class Moto extends Car{
        constructor(brand,year, stock){
            super(brand,year, stock);
        }
}

const myMoto = new Moto("Yamaha");
console.log(myMoto.calculateSpeed(300,4));


