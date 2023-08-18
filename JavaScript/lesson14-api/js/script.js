fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.map(item=>{
        li+=`
        <img width="100" src="${item.image}" />
        <li>${item.title}</li>
        `
    })
    document.querySelector('ol').innerHTML = li;
})