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





const uploadFile =()=>{
    const myhttp = new XMLHttpRequest();
    myhttp.onload = function(){
            document.querySelector('h1').innerHTML = this.responseText;
    }
    myhttp.open("GET",'../hello.txt',true);
    myhttp.send();
}

document.querySelector('button').onclick = uploadFile;