// console.log(fetch());
// fetch().then();

// fetch()
// .then(res=>res.json())


// const myPromise = new Promise((resolve,reject)=>{

//     const data = false;

//     if (data) {
//         resolve("Data call is successfull ")
//     }else{
//         reject('Data is wrong');
//     }

// });

// myPromise
// .then(res=>console.log(res))
// .catch(err=>console.log(err))



const btn  = document.querySelector('button');

const uploadFile =()=>{
    const myhttp = new XMLHttpRequest();
    myhttp.onload = function(){
            document.querySelector('h1').innerHTML = this.responseText;
    }
    if (btn.innerHTML ==='az') {
        myhttp.open("GET",'../helloaz.txt',true);
        btn.innerHTML = 'en';
    }else{
        myhttp.open("GET",'../helloen.txt',true);
        btn.innerHTML = 'az';

    }
    myhttp.send();
}

btn.onclick = uploadFile;