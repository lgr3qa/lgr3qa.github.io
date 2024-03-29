let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


var banner = document.getElementById('banner');
var timeout;


function hideBanner() {
  banner.classList.add('banner-hidden');
}


function resetTimer() {
  
  banner.classList.remove('banner-hidden');
  
  
  clearTimeout(timeout);

  
  timeout = setTimeout(hideBanner, 50); 
}


banner.addEventListener('mouseover', resetTimer);
banner.addEventListener('click', resetTimer);
banner.addEventListener('mouseout', resetTimer);


resetTimer();
