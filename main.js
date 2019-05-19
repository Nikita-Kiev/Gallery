let imagesList = document.getElementById("imagesList").getElementsByTagName("a");
    for(let i = 0; i < imagesList.length; i++) {
      imagesList[i].onclick = function(event) {
        event.preventDefault();
        document.getElementById("mainImg").setAttribute("src", event.currentTarget.getAttribute("href"));
      }
    }