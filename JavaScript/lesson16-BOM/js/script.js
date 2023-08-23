// console.log(window.navigator.platform);
// console.log(window.navigator.language);
// console.log(window.screen);
// console.log(window);
// document.querySelector('button').onclick=function(){
//     if (window.screen.width <= 700) {
//         document.querySelector('h1').style.color='red';
//     }else{
//         document.querySelector('h1').style.color='green';
//     }
// }

// console.log(window.location.href);
// window.location.assign('https://webluna.az');


// 1000ms = 1s
// setInterval(()=>{document.write("Hello");},1000);
// setTimeout(()=>{document.write("Hello");},3000);


// document.write(new Date());


// const info =()=>{
//     setInterval(()=>{
//         document.querySelectorAll('h1')[0].innerHTML = new Date().getHours()
//         document.querySelectorAll('h1')[1].innerHTML = new Date().getMinutes()
//         document.querySelectorAll('h1')[2].innerHTML = new Date().getSeconds()
//         },1000);
// }
// document.querySelector('button').onclick=()=>{
//     if (document.querySelector('button').innerHTML ==='stop') {
//         document.querySelectorAll('h1')[0].innerHTML = 0
//         document.querySelectorAll('h1')[1].innerHTML = 0
//         document.querySelectorAll('h1')[2].innerHTML = 0


//         document.querySelector('button').innerHTML = 'continue';
//     }else{
//         info();

//        document.querySelector('button').innerHTML = 'stop';

//     }
// }

// const testTime = setInterval(() => {
//     document.querySelectorAll('h1')[0].innerHTML = new Date().getHours()
//     document.querySelectorAll('h1')[1].innerHTML = new Date().getMinutes()
//     document.querySelectorAll('h1')[2].innerHTML = new Date().getSeconds()
// }, 1000);


// document.querySelector('button').onclick = () => {
//     if (document.querySelector('button').innerHTML === 'stop') {
//         document.querySelector('button').innerHTML = 'continue';

//         clearTimeout(testTime);
//     } else  {
//         setInterval(() => {
//             document.querySelectorAll('h1')[0].innerHTML = new Date().getHours()
//             document.querySelectorAll('h1')[1].innerHTML = new Date().getMinutes()
//             document.querySelectorAll('h1')[2].innerHTML = new Date().getSeconds()
//         }, 1000);
//         document.querySelector('button').innerHTML = 'stop';

//     }
// }





// const  info= async()=>{
//    const comingdata = await fetch('https://fakestoreapi.com/products')
//    const mydata = await comingdata.json();
//    console.log(mydata);
// }
// info();



const input = document.querySelector('input');

input.onkeydown=()=>{
    input.style.backgroundColor = 'red'; 
    input.style.transition = '1s';
    input.style.height = '50px'; 
    
}

input.onkeyup=()=>{
    input.style.backgroundColor = 'white'; 
    input.style.height = '5px'; 
    input.style.transition = '1s';


}



