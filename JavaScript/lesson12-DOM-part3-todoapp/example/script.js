const input =document.querySelector('input');
const btn =document.querySelector('button');
const ol = document.querySelector('ol');

const toDo = ()=>{
    const li = document.createElement("li");
    const value = input.value;
    li.append(value);
    ol.append(li);
    

    li.onclick=()=>{
        if (li.style.textDecoration == '') {
            li.style.textDecoration = 'line-through';
        }else{
            li.style.textDecoration = '';
        }
    }

    
    
}


btn.onclick = toDo;