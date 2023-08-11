const input = document.querySelector('input');
const btn = document.querySelector('#add');
const listCon = document.querySelector('.list-group');

const todoList = () => {
    const newLi = document.createElement('li');
    const newText = `<span class="list-text">${input.value}</span><button class="btn btn-danger mybtn">X</button>`;
    newLi.innerHTML = newText;
    newLi.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    listCon.append(newLi);
    input.value = "";

    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click',() => {
            document.querySelectorAll('.list-text')[i].style.textDecoration = "line-through";

        },true)
    }
     for (let i = 0; i < li.length; i++) {
        document.querySelectorAll('.mybtn')[i].onclick = () => {
           li[i].remove();

        }
    }
}

btn.onclick = todoList;


