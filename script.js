// smooth scroll
document.querySelector('.scroll-symbol').addEventListener('click', function(e) {
  e.preventDefault();
  const gallerySection = document.getElementById('gallery');
  gallerySection.scrollIntoView({ behavior: 'smooth' });
});

// Light box modal
let slideIndex = 1;

function openModal() {
  document.getElementById("lightboxModal").style.display = "block";
  showSlides(slideIndex);
}

function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("lightbox-slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
