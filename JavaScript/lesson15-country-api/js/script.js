const btn = document.querySelectorAll('button');
const row = document.querySelector('.row');

const countryApi = (start = 0, end = 50) => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      let col = "";
      data.slice(start, end).map((item, count) => {
        col += `
         <div class="col-12 col-sm-6 col-md-3">
         <div class="card">
           <img height="200" src="${item.flags.png}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${item.name.common}</h5>
             <p class="card-text">${item.capital}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
         </div>
        `
      })
      row.innerHTML = col;
    })
}
btn[0].onclick = () => {
  countryApi(0, 50);
}
btn[1].onclick = () => {
  countryApi(50, 100);
}
btn[2].onclick = () => {
  countryApi(100, 150);
}
btn[3].onclick = () => {
  countryApi(150, 200);
}
btn[4].onclick = () => {
  countryApi(200, 250);
}
countryApi();



