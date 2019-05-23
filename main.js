const imagesList = document.querySelectorAll('#imagesList a');
const mainImage = document.querySelector('#mainImage');

for(var i = 0; i < imagesList.length; i++) {
  imagesList[i].addEventListener('click', (event) => {
    event.preventDefault();
    mainImage.setAttribute('src', event.currentTarget.getAttribute('href')); 
  });
}
