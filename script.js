document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
          myModal.show();
    }
  })


   document.querySelector('#button').addEventListener('click', () => {
  var xhttp=new XMLHttpRequest;

  //Working well on live server but giving  cors error otherwise
//   xhttp.open("GET","data.json", true);
xhttp.open("GET","https://mocki.io/v1/b41d8db0-d525-4cbf-87ee-4ce65a615632", true);

xhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
    var response= JSON.parse(xhttp.responseText);
    

    var playlist = response.playlist;
    
    var item='';
     
    for(var i = 0; i < playlist.length; i++){
    item+= `   
    <div class="col"><img src="${playlist[i].url}"></div>
        `
    }
    document.getElementById('playlist').innerHTML = item;
    document.getElementById('c0').innerHTML = `<img src="${playlist[1].url}">`;
    document.getElementById('c1').innerHTML = `<img src="${playlist[2].url}">`;
    document.getElementById('c2').innerHTML = `<img src="${playlist[3].url}">`;
    }
};


xhttp.send();
   })