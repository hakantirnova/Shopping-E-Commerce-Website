import { product1, product2 } from "./glide.js" // 41.Bölüm 42.Bölüm için index.html'in içindeki script src="glide.js" type'a module ekle

// let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [] // 33.Bölüm 317.Bölümde 33.Bölüm silindi
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] // 54.Bölüm 70.Bölüm için yeni bir cart.js dosyası ekliyoruz.

function addToCart(products) {  // 45.Bölüm Sepete Ekleme Bölümü. 319.Bölümde fonksiyonun içine parametre eklendi
  const cartItems = document.querySelector(".header-cart-count")  // 60.Bölüm
  const buttons = [...document.getElementsByClassName("add-to-cart")] // 48.Bölüm Alt satırda foreach kullandığımız için Arraya çevirmek zorundayız. Ayrıca bu şekilde de kullanabiliriz. document.querySelectorAll(".add-to-cart")  
  buttons.forEach((button) => { // 49.Bölüm
    const inCart = cart.find((item) => item.id === Number(button.dataset.id)) // 55.Bölüm
    if (inCart) { // 56.Bölüm
      button.setAttribute("disabled", "disabled") // 57.Bölüm
    } else {
      button.addEventListener("click", function (e) { // 50.Bölüm 51.Bölüm silindi
        e.preventDefault()  // Sayfa yenilenmesini önler
        const id = e.target.dataset.id
        const findProduct = products.find((product) => product.id === Number(id))
        cart.push({...findProduct, quantity: 1})            // 52.Bölüm
        localStorage.setItem("cart",JSON.stringify(cart))   // 53.Bölüm 
        button.setAttribute("disabled", "disabled")         // 58.Bölüm  59.Bölüm için product.item.css' git
        cartItems.innerHTML = cart.length;                  // 61.Bölüm  62.Bölüm için main.js'e git
      })
    }
  })
}

function productRoute() { // 105.Bölüm Tıklanan ürüne gitme. 106.Bölüm için aşağıdaki bi bi-eye-fill ikonuna class ismi vermemiz gerekiyor. 
  const productLink = document.getElementsByClassName("product-link") // 107.Bölüm
  Array.from(productLink).forEach((button) => {     // 109.Bölüm yukarıda Classname ile aldığımız için bu şekilde arraya çevirmemiz gerekiyor.                              
    button.addEventListener("click", function(e) {  // 110.Bölüm 111.Bölüm için single-product.js'e git
      e.preventDefault()
      const id = e.target.dataset.id
      localStorage.setItem("productId", JSON.stringify(id)) // localStorage'a kaydediyoruz.
      window.location.href = "single-product.html"  // bi-eye-fill ikonuna tıkladığımızda single-product sayfasına gider
    })
  })
}

function productsFunc(products) { // 30.Bölüm için sadece fonksiyon açtık. Burada data.jsondan gelen ürünleri dinamik olarak getiriyoruz. 318.Bölümde fonksiyonun içine parametre eklendi.
  const productsContainer = document.getElementById("product-list") // Burada elemanların(li'lerin) kapsayıcısı olan ul'e ulaştık. 38.Bölüm
  const productsContainer2 = document.getElementById("product-list2") // Burada elemanların(li'lerin) kapsayıcısı olan ul'e ulaştık.

  let results = ""  // 34.Bölüm
  products.forEach((item) => {  // 35.Bölüm 36.Bölüm(aşağıdaki backtik alanın içi) 37.Bölüm için index.html'e git bu li'leri kapsayıcısı olan ul'e id ver. 44.Bölüm için li'lerin içindeki bölümleri data-json'dan gelen bilgilere göre dinamik yap. 47.Bölüm için li'lerin içindeki button class'ına add-to-cart ekle
    results += `
    <li class="product-item glide__slide">    
      <div class="product-image">
        <a href="#">
          <img src=${item.img.singleImage} class="img1">
          <img src=${item.img.thumbs[1]} class="img2">
        </a>
      </div>
      <div class="product-info">
        <a href="#" class="product-title">${item.name}</a>
        <ul class="product-star">
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-fill"></i>
          </li>
          <li>
            <i class="bi bi-star-half"></i>
          </li>
        </ul>
        <div class="product-prices">
          <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
          <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
        </div>
        <span class="product-discount">-${item.discount}%</span>
        <div class="product-links">
          <button class="add-to-cart" data-id=${item.id}> 
            <i class="bi bi-basket-fill"></i>
          </button>
          <button>
            <i class="bi bi-heart-fill"></i>
          </button>
          <a href="#" class="product-link" data-id=${item.id}>
            <i class="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i class="bi bi-share"></i>
          </a>
        </div>
      </div>
    </li>`
  productsContainer ? productsContainer.innerHTML = results : ""  // 39.Bölüm 40.Bölüm silindi. 65.Bölüm'de  productsContainer ? : "" bunlar eklendi 66.Bölüm için glide.js'e git
  productsContainer2 ? productsContainer2.innerHTML = results : ""
    addToCart(products) // 46.Bölüm Yukarıdaki fonksiyonu burada çağırdık. 320.Bölümde parametre eklendi.
  })
  product1() // 43.Bölüm
  product2()
  productRoute()  // 108.Bölüm
}

export default productsFunc // 31.Bölüm 32.Bölüm için main.js'e git