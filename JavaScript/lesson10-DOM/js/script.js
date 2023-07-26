"use strict"
// const elem = document.getElementsByTagName('h1');

// for(let i = 0; i<elem.length;i++){
//   elem[i].innerHTML = 'bye';
// }


// document.getElementById('main').innerHTML = 'bye'


// ES6


// const elem = document.querySelectorAll('h1');
// const btn = document.querySelector('button');
// const changeText = () => {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = 'hello mello'
//   }
// }
// btn.onclick = changeText;


const text = document.querySelector('h1');
const btn = document.querySelector('button');


const surname = () => {
  if (text.innerHTML === "Hasan") {
    text.innerHTML = "Bakhtiar";
    btn.innerHTML = "name";
  } else {
    text.innerHTML = "Hasan"
    btn.innerHTML = 'surname'
  }
}

btn.onclick = surname