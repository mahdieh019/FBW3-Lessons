    let btn1=document.querySelector("#btn1");
    let img=new Image();

    btn1.addEventListener("click",getPhotos);
    

    function getPhotos() {
   fetch("https://jsonplaceholder.typicode.com/photos")
   .then(function (res) {
       return res.json();
     })
   .then(function (data) {
       let output = "<h2> Posts </h2>";
       data.forEach(function (user) {
           
           output += `
           <div >

              <h3> albumId:  ${user.albumId} </h3>
              <p> id: ${user.id} </p>
              <p> title: ${user.title} </p>
              <img src="${user.url}" >

              </div>
           `;
       });
       document.getElementById("output").innerHTML = output;
   })
}
    
