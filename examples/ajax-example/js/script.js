const btn  = document.querySelectorAll('button');

const loadDoc =(path,i)=> {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.querySelectorAll("p")[i].innerHTML = this.responseText;
      }
    xhttp.open("GET", path, true);
    xhttp.send();
  }

  btn[0].onclick = ()=>{
    loadDoc('../data/a.txt',0)
  }

  btn[1].onclick = ()=>{
    loadDoc('../data/b.txt',1)
  }


  