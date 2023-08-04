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





// const langdata = {
//   az: ["Ana Sehife", "Haqqimizda", "Mehsullar", "Xidmetler", "Elaqe"],
//   en: ["Home", "About", "Product", "Service", "Contact"]
// }


// const navLink = document.querySelectorAll('.nav-link')
// const btn = document.querySelector('#lang');

// const changeLang = () => {
//   if (btn.innerHTML == 'AZ') {

//     langdata.az.map((item, count) => {
//       navLink[count].innerHTML = item
//     })
//     btn.innerHTML = "EN";
//   } else {
//     langdata.en.map((item, count) => {
//       navLink[count].innerHTML = item
//     })
//     btn.innerHTML = "AZ";
//   }
// }

// // btn.onclick = changeLang;
// btn.addEventListener('click',changeLang);




// const userdata = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     phone: "1-770-736-8031 x56442",
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     phone: "010-692-6593 x09125",
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     phone: "1-463-123-4447",
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     phone: "493-170-9623 x156",
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     phone: "(254)954-1289",
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     phone: "1-477-935-8478 x6430",
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     phone: "210.067.6132",
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     phone: "586.493.6943 x140",
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     phone: "(775)976-6794 x41206",
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     phone: "024-648-3804",
//   }
// ]


// const list = document.querySelectorAll('li');
// const btn = document.querySelector('button');


// userdata.map((item,count)=>{
//   list[count].innerHTML = item.name;
// });



// const showInfo = ()=>{
//   if (btn.innerHTML === 'email') {
//     userdata.map((item,count)=>{
//       list[count].innerHTML = item.email;
//     });
//     btn.innerHTML = 'name'
//   }else{
//     userdata.map((item,count)=>{
//       list[count].innerHTML = item.name;
//     });
//     btn.innerHTML = 'email'

//   }
// }
// btn.onclick = showInfo;


const info = (a,b)=>{
  const total = a+b;
  return total;
}

console.log(info(10,20));
