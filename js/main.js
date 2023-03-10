import headerFunc from "./header.js"      // 28.Bölüm headerJS dosyamı ana dosyamda import ediyorum. 29.Bölüm için index.html dosyanın içine git ve en alttaki javascript src dosyasının içine type="module" ekle
import productsFunc from "./products.js"  // 32.Bölüm
import searchFunc from "./search.js"      // 272.Bölüm


// Add Product to LocalStorage Start 26.Bölüm
(async function () {  // Burada gelen datayı asenkron yapıda çağırmamız gerekiyor.
  const photos = await fetch("../js/data.json")
  const data = await photos.json()

  data ? localStorage.setItem("products", JSON.stringify(data)) : []
  productsFunc(data)                      // 316.Bölüm fonksiyonun içine data parametresi eklendi. 317.Bölüm için products.js'e git
  searchFunc(data)                        // 273.Bölüm  burda datayı çekiyoruz. 274.Bölüm için search.js'e git            
})()
// Add Product to LocalStorage End


// Add cartItems to LocalStorage Start
const cartItems = document.querySelector(".header-cart-count")  // 62.Bölüm

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"   // 63.Bölüm Burada sepete ekleme kısmında yani header-cart-countta eklediğimiz ürünleri localstorage'da tutuyoruz ve ekranda da gösteriyoruz. Yani sayfa yenilense bile ekranda gözükecek.  64.Bölüm için cart.html'in içine script dosyasını ekliyoruz.
// Add cartItems to LocalStorage End


// Modal Dialog Start
const modalDialogDOM = document.querySelector(".modal-dialog")                  // 309.Bölüm
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close")     // 310.Bölüm
const modalContentDOM = document.querySelector(".modal-dialog .modal-content")  // 314.Bölüm

btnCloseDialog.addEventListener("click", function() {                       // 311.Bölüm
  modalDialogDOM.classList.remove("show")                                   // 312.Bölüm
})

document.addEventListener("click", (e) => {   //315.Bölüm Burada close butonu hariç sayfanın diğer yerlerine tıklandığında da kapanmasını sağlıyor. 316.Bölüm hataları düzeltmeye başlıyoruz.
  if(!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show")
  }
})
setTimeout(() => {                                                          // 313.Bölüm
  modalDialogDOM.classList.add("show")
}, 3000);

// Modal Dialog End

