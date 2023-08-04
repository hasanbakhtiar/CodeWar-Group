// const text = document.querySelector('h1');
// const btn = document.querySelector('button');
// const photo = document.querySelector('img');

// const changeText = ()=>{
//   if (text.innerHTML == "Hello") {
//     text.innerHTML = "Bye";
//     btn.innerHTML = 'changed'
//     photo.attributes[1].value = 'https://www.clipartmax.com/png/middle/362-3626677_emoji-clipart-wave-goodbye-emoji.png'
//   }else{
//     text.innerHTML = "Hello";
//     btn.innerHTML = 'default';
//     photo.attributes[1].value = 'https://cdn.vectorstock.com/i/preview-1x/46/62/bye-emoticon-vector-30724662.jpg'
//   }
// }

// btn.onclick = changeText;





const langdata = {
  az: ["Ana Sehife", "Haqqimizda", "Mehsullar", "Xidmetler", "Elaqe"],
  en: ["Home", "About", "Product", "Service", "Contact"]
}


const navLink = document.querySelectorAll('.nav-link')
const btn = document.querySelector('#lang');

const changeLang = () => {
  if (btn.innerHTML == 'AZ') {

    langdata.az.map((item, count) => {
      navLink[count].innerHTML = item
    })
    btn.innerHTML = "EN";
  } else {
    langdata.en.map((item, count) => {
      navLink[count].innerHTML = item
    })
    btn.innerHTML = "AZ";
  }
}

// btn.onclick = changeLang;
btn.addEventListener('click',changeLang);


