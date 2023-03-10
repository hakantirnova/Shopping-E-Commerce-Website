function zoomFunc() {   // 158.Bölüm
  const singleImage = document.querySelector("#single-image") // 159.Bölüm
  const singleImageWrapper = document.querySelector(".single-image-wrapper")  // 160.Bölüm

  singleImageWrapper.addEventListener("mousemove", function(e) {  // 163.Bölüm Burada fotonun zoom işlemini yapıyoruz
    const x = e.clientX - e.target.offsetLeft                     // 164.Bölüm
    const y = e.clientY - e.target.offsetTop                      // 165.Bölüm
    
    singleImage.style.transformOrigin = `${x}px ${y}px`           // 166.Bölüm  
    singleImage.style.transform = "scale(5)"               // 167.Bölüm 168.Bölüm için css'in içindeki product-gallery'e git
  })

  singleImageWrapper.addEventListener("mouseleave", function() {  // 174.Bölüm
    singleImage.style.transformOrigin = `center`                  // 175.Bölüm
    singleImage.style.transform = "scale(1)"                      // 176.Bölüm  177.Bölüm için yeni bir colors.js dosyası aç 
  })
}

export default zoomFunc() // 161.Bölüm 162.Bölüm için single-product.js'in içine git ve import et