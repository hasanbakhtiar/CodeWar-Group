// localStorage.setItem('key','value'); // elave etmek
// localStorage.getItem('key'); //cagirmaq
// localStorage.removeItem('key'); // bir-bir silmek
// localStorage.clear(); // hamisini silmek

// localStorage.removeItem('name');
// localStorage.removeItem('age');


// localStorage.setItem('name','Natiq');
// localStorage.setItem('surname','Natiqov');
// localStorage.setItem('age','20');





const nav = document.querySelector('nav');
const btn = document.querySelector('#btn-mode');


btn.onclick=()=>{
 if (btn.innerHTML == "Dark") {
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    btn.innerHTML = "Light";
    localStorage.setItem('mode','dark');
 }else{
    nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
    btn.innerHTML = "Dark"
    localStorage.setItem('mode','light');

 }
}


if (localStorage.getItem('mode') === 'dark') {
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    btn.innerHTML = "Light";
    
}else{
    nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
    btn.innerHTML = "Dark"

}


