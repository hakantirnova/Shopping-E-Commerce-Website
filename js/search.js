// Tıklanılan Ürüne Gitme
function productRoute() {         // 278.Bölüm
  const resultItemDOM = document.querySelectorAll(".search-results .result-item")   // 279.Bölüm
  resultItemDOM.forEach((item) => {             // 281.Bölüm
    item.addEventListener("click" , () => {     // 282.Bölüm
      const id = item.dataset.id                // 284.Bölüm Burada bilerek event(e) ile yapmıyoruzç Çünkü a etiketi olduğu için undefined dönüyor.Bu yüzden pointer events kullanmamız gerekecek.
      if(id) {                                                // 285.Bölüm
        localStorage.setItem("productId", JSON.stringify(id)) // 286.Bölüm
        window.location.href = "single-product.html"          // 287.Bölüm
      }
    })
  })
}

// Ürünlerin hepsini listeye çağırma
function searchFunc(data) {       // 270.Bölüm
  const searchWrapperDOM = document.querySelector(".search-results .results") // 274.Bölüm
  let result = ""                 // 275.Bölüm
  data.forEach((item) => {        // 276.Bölüm 283.Bölüm'de aşağıda data-id=${item.id} eklendi
    result += `
    <a href="#" class="result-item" data-id=${item.id}>
      <img src=${item.img.singleImage} class="search-thumb">
      <div class="search-info">
        <h4>${item.name}</h4>
        <span class="search-sku">SKU: PD0016</span>
        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
      </div>
    </a>`
    searchWrapperDOM.innerHTML = result   // 277.Bölüm
    productRoute()                        // 280.Bölüm

    // Ürün Arama İşlemi
    const searchInputDOM = document.querySelector(".search-form input") // 288.Bölüm
    let value = ""                                              // 290.Bölüm
    let filtered = []                                           // 293.Bölüm
    searchInputDOM.addEventListener("input", (e) => {           // 289.Bölüm
      value = e.target.value                                    // 291.Bölüm
      value = value.trim().toLowerCase()  // 292.Bölüm trim() methodu inputta space'e bastığımız zaman boşlukları almamamız için girilen bir method
      filtered = data.filter((item) => item.name.trim().toLowerCase().includes(value))  // 294.Bölüm
      let result = ""                                           // 295.Bölüm
      if(filtered.length > 1){                // 299.Bölüm burada kodları if-else bloğunun içine aliyoruz. Çünkü sorgu yazacağız 
        searchWrapperDOM.style.gridTemplateColumns = "1fr 1fr"  // 300.Bölüm
        filtered.forEach((item) => {                            // 296.Bölüm 276.Bölümdekinin aynısını kopyaladık
          result += `
          <a href="#" class="result-item" data-id=${item.id}>
            <img src=${item.img.singleImage} class="search-thumb">
            <div class="search-info">
              <h4>${item.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
            </div>
          </a>`
        })
        searchWrapperDOM.innerHTML = result                       // 297.Bölüm
      }
      else if(filtered.length < 2) {                              // 301.Bölüm
        searchWrapperDOM.style.gridTemplateColumns = "1fr"        // 302.Bölüm
        if(filtered == 0) {                                       // 304.Bölüm
          searchWrapperDOM.innerHTML = `
            <a href="#" class="result-item" style="justify-content: center">
              😔Aradığınız Ürün Bulunamadı😔
            </a>`
        }
        else { 
          filtered.forEach((item) => {                              // 303.Bölüm yukarıdaki sorgunun aynısını kopyala
          result += `
          <a href="#" class="result-item" data-id=${item.id}>
            <img src=${item.img.singleImage} class="search-thumb">
            <div class="search-info">
              <h4>${item.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
            </div>
          </a>`
        })
        searchWrapperDOM.innerHTML = result // 305.Bölüm 306.Bölüm için index.html'e git. ve Modal dialog kurulumuna başla
        }
      }
      productRoute()                                              // 298.Bölüm
    })
  })     
}

export default searchFunc   // 271.Bölüm 272.Bölüm için main.js'e git ve import et