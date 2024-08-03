// window.addEventListener('load', createGallery);

// const imageSources = [
    // 'images/airplay-gallery-1.png',
    // 'images/airplay-gallery-2.gif',
    // 'images/airplay-gallery-3.png',
    // 'images/airplay-gallery-4.png',
    // 'images/airplay-gallery-5.gif',
    // 'images/airplay-gallery-6.JPG'
//   ];

  // Function to create gallery items and modal slides
  function createGallery(imageSources) {
    const galleryContainer = document.getElementById('gallery');
    const modalContent = document.getElementById('modal-content');

    imageSources.forEach((src, index) => {
      // Create gallery item
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `<img src="${src}" onclick="openModal();currentSlide(${index + 1})" class="hover-shadow">`;
      galleryContainer.appendChild(galleryItem);


      // Create modal slide
      const modalSlide = document.createElement('div');
      modalSlide.className = 'mySlides';
      modalSlide.innerHTML = `
        <div class="numbertext">${index + 1} / ${imageSources.length}</div>
        <img src="${src}" style="width:100%">
      `;
      modalContent.appendChild(modalSlide);
    });
  }

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
