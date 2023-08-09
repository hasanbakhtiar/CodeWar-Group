// const text = document.querySelector('h1');
// const btn = document.querySelector('button');


// const changeColor = ()=>{
// text.style.color = "red";
// text.style.backgroundColor = "green";
// text.style.transition = 'color 1s, background-color 3s';

// }

// btn.onclick = changeColor;




const listBtn = document.querySelector('.list-nd')
const submenu = document.querySelector('.submenu')


const subMenuChanged = ()=>{
    submenu.style.height = '130px';
}
listBtn.onclick = subMenuChanged;