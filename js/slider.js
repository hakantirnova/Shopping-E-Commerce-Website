// Slider Start
let slideIndex = 1      // 7.Bölüm
showSlides(slideIndex)  // 10.Bölüm

setInterval(() => {     // 4 saniyede bir kendi kendine döndür  // 16.Bölüm
  showSlides(slideIndex += 1)
}, 4000);

function plusSlide(n) {      // 11.Bölüm  12.Bölüm için index.html'in içinde slider'a git
  showSlides(slideIndex += n)
}

function currentSlide(n) {   // 20.Bölüm  21.Bölüm için index.html'in içinde slider'a git
  showSlides(slideIndex = n)
}

function showSlides(n) {     // 9. Bölüm
  const slides = document.getElementsByClassName("slider-item") // 5.Bölüm
  const dots = document.getElementsByClassName("slider-dot")    // 17.Bölüm

  if (n > slides.length) {    // 13.Bölüm
    slideIndex = 1
  }
  if (n < 1) {                // 14.Bölüm   15.Bölüm için slider.cssin içindeki animationa git
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {     // 6.Bölüm
    slides[i].style.display = "none"
  }

  for (let i = 0; i < dots.length; i++) {       // 18.Bölüm
    dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[slideIndex - 1].style.display = "flex" // 8.Bölüm
  dots[slideIndex - 1].className += " active"   // 19.Bölüm
}
// Slider End