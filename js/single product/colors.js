function colorsFunc() {                                       // 177.Bölüm
  const colorsDOM = document.querySelectorAll(".color-wrapper")  // 178.Bölüm
  colorsDOM.forEach((color) => {                                 // 181.Bölüm burada active classını siliyoruz ve tılanılana ekliyoruz.
    color.addEventListener("click", function() {              // 182.Bölüm
      colorsDOM.forEach((item) => {                           // 183.Bölüm
        item.classList.remove("active")                       // 184.Bölüm
      })  
      color.classList.add("active")                           // 185.Bölüm 186.Bölüm için yeni bir values.js dosyası açıyoruz.
    })
  })
}

export default colorsFunc() // 179.Bölüm 180.Bölüm için single-product.js dosyasına git import et