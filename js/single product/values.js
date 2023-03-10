function valuesFunc() {                                             // 186.Bölüm
  const valuesDOM = document.querySelectorAll(".values-list span")  // 187.Bölüm
  valuesDOM.forEach((value) => {                                    // 188.Bölüm Burada span'ın içindeki active classını kaldırıp diğerine ekliyoruz
    value.addEventListener("click", function() {                    // 189.Bölüm
      valuesDOM.forEach((item) => {                                 // 190.Bölüm
        item.classList.remove("active")                             // 191.Bölüm
      })
      value.classList.add("active")                                 // 192.Bölüm 193.bölüm için single-product.js'e git
    })
  })
}

export default valuesFunc()   // 188.Bölüm 189.Bölüm için single-product.js'in içine git ve import et