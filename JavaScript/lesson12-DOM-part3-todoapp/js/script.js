const input = document.querySelector('input');
const form = document.querySelector('form');
const listCon = document.querySelector('.list-group');
const clearAll = document.querySelector('#clearAll');

const todoList = (e) => {
    e.preventDefault();
   if (!input.value) {
    alert('please, fill input')
   }else{
    const newLi = document.createElement('li');
    const newText = `<span class="list-text">${input.value}</span><div><button class="btn btn-success me-2 mybtnplus">+</button><button class="btn btn-danger mybtn">X</button></div>`;
    newLi.innerHTML = newText;
    newLi.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    newLi.setAttribute('data-aos', 'zoom-out-right')
    listCon.append(newLi);
    input.value = "";

    const li = document.querySelectorAll('.mybtnplus');
    const orgli = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click',() => {
            document.querySelectorAll('.list-text')[i].style.textDecoration = "line-through";
            console.log(i);
        },false)

        li[i].addEventListener('dblclick',() => {
            document.querySelectorAll('.list-text')[i].style.textDecoration = "none";
        },false)
    
        document.querySelectorAll('.mybtn')[i].onclick = () => {
            orgli[i].remove();

        }
    }
   }
}

form.onsubmit = todoList;

clearAll.onclick = ()=>{
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
           li[i].remove();

    }
}


