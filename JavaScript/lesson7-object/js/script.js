// const data = ['bread', 'water', ['onion', 'milk', ['meat', 'cola', 'fruits', 'fish'], 'egg'], 'oil'];

// const productThree = data[2][2];
// const productTwo = data[2];
// const productOne = data;
// delete productOne[2]
// delete productTwo[2]
// console.log(productOne);
// console.log(productTwo);

// const myBigProductOne = productThree.concat(productTwo);
// console.log(myBigProductOne);
// const totalProduct = myBigProductOne.concat(productOne);
// console.log(totalProduct);

// for(let a in totalProduct){
//     if (a != undefined) {
//         console.log(totalProduct[a]);
//     }
// }

// let count = 0;
// while (count <= totalProduct.length) {
//     if (totalProduct[count] != undefined) {
//         console.log(totalProduct[count]);
//     }
//     count++;
// }




// const selectPrice = prompt();


// const productList = [
//     {
//         title:"Lenovo ThinkPad",
//         color:['black','red',"green"],
//         price:2000,
//         stock:true
//     },
//     {
//         title:"HP Viktus",
//         color:['black','yellow',"green"],
//         price:2200,
//         stock:false
//     },
//     {
//         title:"Asus Rog",
//         color:['grey','red',"green"],
//         price:4000,
//         stock:false
//     },
//     {
//         title:"Acer Predator",
//         color:['black','red',"blue"],
//         price:3500,
//         stock:true
//     }
// ]

// const updateData = productList.slice(0,5)

// for( let item of updateData){
//     if (item.price == selectPrice) {
//         console.log(item.title);
//     }
// }




const productList = [
    {
        title:"Lenovo ThinkPad",
        color:['black','red',"green"],
        price:2000,
        stock:true
    },
    {
        title:"HP Viktus",
        color:['black','yellow',"green"],
        price:2200,
        stock:false
    },
    {
        title:"Asus Rog",
        color:['grey','red',"green"],
        price:4000,
        stock:false
    },
    {
        title:"Acer Predator",
        color:['black','red',"blue"],
        price:3500,
        stock:true
    }
];
// console.log(productList.length);

// productList.map((item,count)=>{
//     console.log(count);
//     console.log(item.title);
// });


// productList.forEach((item,count)=>{
//     console.log(count);
//     console.log(item.title);
// });




