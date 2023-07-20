

function apidata(){
    const xhr= new XMLHttpRequest();

    xhr.onload= function(){
        const demo=document.getElementById("demo");
        demo.innerHTML=xhr.responseText;

    }
   
    xhr.open('GET',"http://127.0.0.1:5500/index.txt");
    xhr.send();

}


