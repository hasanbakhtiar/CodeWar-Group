
const productApi = (selectCategory) => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            let col = "";
            data.products.map(item => {
                if (!selectCategory) {
                    col += `
            <div class="col-12 col-sm-12 col-md-3">
            <div class="card" >
            <img src="${item.images[0]}" height="300" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            </div>
              `
                } else {
                    if (item.category === selectCategory) {
                        col += `
                <div class="col-12 col-sm-12 col-md-3">
                <div class="card" >
                <img src="${item.images[0]}" height="300" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
                </div>
                  `
                    }
                }
            })
            document.querySelector('.row').innerHTML = col;
        })
}



document.querySelectorAll('button')[0].onclick = () => {
    productApi("smartphones");
}

document.querySelectorAll('button')[1].onclick = () => {
    productApi("laptops");
}

document.querySelectorAll('button')[2].onclick = () => {
    productApi("fragrances");
}

productApi();
