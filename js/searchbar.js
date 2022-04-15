
async function searchImages() {
    let search = document.getElementById("searchbar").value;
    try {
      let res = await fetch(
        `https://api.imgur.com/3/gallery/search/viral/month/4?q=${search}`,
        {
          method: "GET", // or 'PUT'
          headers: {
            Authorization: "Client-ID b9904d4c9dea809",
          },
        }
      );
      let data = await res.json();
      let list = data.data;
      console.log(list);
      appendData(list);
    } catch (err) {
      console.log(err);
    }
  }

  function appendData(list) {
      document.getElementById("displayImage").innerHTML="";
      if(list === undefined) return false;
      list.map(function(e) {
          let p = document.createElement("p");
          p.innerHTML = e.tags[0].name;
          p.style.color="yellow";
        //   p.addEventListener("click", function() {
        //       appendImages(elem)
        //   })
          document.getElementById("displayImage").append(p);
      })
  }

  let searchimg;
  function debounce(func,delay){
      if(searchimg){
          clearTimeout(searchimg);
      }
      searchimg=setTimeout(function(){
          func();
      },delay)
  }

//   function appendImages(elem){
//       let img = document.createElement("img");
//      // img.src = elem.
//   }