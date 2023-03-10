export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid ") //139.Bölüm 140.Bölüm için single-product.js'in en başına git
  const singleImage = document.querySelector("#single-image") // 144.Bölüm 145.Bölüm için single-product.js'e git
  
  thumbs.forEach((item) => {                      // 142.Bölüm 
    item.addEventListener("click", function() {   // 143.Bölüm
      thumbs.forEach((image) => {                 // 155.Bölüm
        image.classList.remove("active")          // 156.Bölüm 157.Bölüm silindi. 158.Bölüm için zoom.js adında dosya aç
      })
      singleImage.src = item.src                  // 153.Bölüm
      item.classList.add("active")                // 154.Bölüm
    })
  })
}