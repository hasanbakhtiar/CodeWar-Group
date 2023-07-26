

// Function Declatarion

// calculateAge(2000,2023);
// calculateAge(1950,2023);
// calculateAge(2050,5023);
// // Not a number
// calculateAge();
// function calculateAge(firstData=2010,lastData=2023) {
//     const birthYear = firstData;
//     const currentYear = lastData;

//     const total = currentYear - birthYear;

//     console.log(total);
// }





// function info (){
//     console.log('hello');
// }

// info();




// Function Expression
// const calculateAge = function (firstData=2010,lastData=2023) {
//     const birthYear = firstData;
//     const currentYear = lastData;

//     const total = currentYear - birthYear;

//     console.log(total);
// }


// calculateAge(2000,2023);
// calculateAge(1950,2023);
// calculateAge(2050,5023);
// // Not a number
// calculateAge();


// IIFE 


// (function(a){
//     console.log(a);
// })('hello');




// function farmersIncome (daysPassed){
//     const cowPrice = 300;
//     const milkPrice = 3;
//     const milkLitersPerDay = 3;
    
//     let cowsNumber = 1;
//     let income = 0;
    
//     for (let i = 1; i <= daysPassed; i++) {
//         income += milkLitersPerDay * cowsNumber * milkPrice;
//         for (let k = 1; k < daysPassed; k++) {
//             if (income >= cowPrice * k ) {
//                 income -= cowPrice * k;
//                 cowsNumber +=  k;
//             }
//         }
//     }
    
//     console.log("After", daysPassed, "days");
//     console.log("the farmer owns", cowsNumber, "cows");
//     console.log("and his remaining income after buying the cows (if any) is $", income + ".");
//     console.log("At that moment he gets", milkLitersPerDay * cowsNumber, "liters of milk per day");
//     console.log("and earns $", milkLitersPerDay * cowsNumber * milkPrice, "per day.");
//     console.log("His total revenue is $", cowPrice * cowsNumber + income);
    
//     if (cowPrice * cowsNumber + income > 15000) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log("Can the farmer afford a new farm for $ 15 000 yet?", farmersIncome(100));  

// ES6
// Arrow Function



// ((a)=>{console.log(a);})(5)

// (function(b){
//         console.log(b);
// })('test')










