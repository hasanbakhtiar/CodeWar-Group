// const text = document.querySelector('h1');
// const btn = document.querySelector('button');


// const changeColor = ()=>{
// text.style.color = "red";
// text.style.backgroundColor = "green";
// text.style.transition = 'color 1s, background-color 3s';

// }

// btn.onclick = changeColor;




// const listBtn = document.querySelector('.list-nd')
// const submenu = document.querySelector('.submenu')


// const subMenuChanged = ()=>{
//     if (submenu.style.height == "0px") {
//         submenu.style.height = "130px"
//     }else{
//         submenu.style.height = "0px";
//     }
// }
// listBtn.onclick = subMenuChanged;



// document.querySelector('button').onclick = () => { document.querySelector('ol').style.transform = "translate(0)" }

// const btn = document.querySelector('button');
// const icon = document.querySelector('i');

// const toggle = () => { 
//     if (icon.attributes[0].value === "fa-solid fa-bars") {
//         document.querySelector('ol').style.transform = "translate(0)" 
//        icon.attributes[0].value = 'fa-solid fa-angles-left'
//     }else{
//         document.querySelector('ol').style.transform = "translate(-300px)" 
//         icon.attributes[0].value = 'fa-solid fa-bars'
//     }
// }

// btn.onclick = toggle;


const userdata = {
    email:"info@text.com",
    password:"test123"
}

const emailInput = document.querySelectorAll('input')[0];
const passInput = document.querySelectorAll('input')[1];
const alert = document.querySelector('#alert');
const btn = document.querySelector('button');


btn.onclick=()=>{
     if (!emailInput.value || !passInput.value) {
        alert.innerHTML = "please, fill input"
            alert.className = "alert alert-warning";
     }else{
        if (emailInput.value === userdata.email && passInput.value === userdata.password) {
            // alert.innerHTML = "login successfully"
            // alert.className = "alert alert-success";
            window.location.replace("admin.html");
        }else{
            alert.innerHTML = "password or email is wrong!"
            alert.className = "alert alert-danger";

        }
     }
}
    





