import { thumbsActiveFunc } from "./single product/thumbsActive.js" // 140.Bölüm 
import { singleThumbs } from "./glide.js"                           // 151.Bölüm
import  zoomFunc  from "./single product/zoom.js"                   // 162.Bölüm 163.Bölüm için zoom.js'e git
import colorsFunc from "./single product/colors.js"                 // 180.Bölüm 181.Bölüm için colors.js'e git
import valuesFunc from "./single product/values.js"                 // 189.Bölüm 190.Bölüm için values.js'e git
import tabsFunc from "./single product/tabs.js"                     // 215.Bölüm 216.Bölüm için tabs.js' git
import commentsFunc from "./single product/comments.js"             // 238.Bölüm 239.Bölüm için reviews.css'e git


const productId = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) : localStorage.setItem("productId", JSON.stringify(1))  // 111.Bölüm 112.Bölüm için single-product.html'in içinde bu dosyayı çağır.

const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("productId", JSON.stringify([]))  // 114.Bölüm

const findProduct = products.find((item) => item.id === Number(productId))  // 115.Bölüm

// Product Title
const productTitle = document.querySelector(".product-title") // 116.Bölüm
productTitle.innerHTML = findProduct.name                     // 117.Bölüm 118.Bölüm için single-product.html'in içine git ve product-pricelara class ver

// Product Price
const newPriceDOM = document.querySelector(".new-price")      // 120.Bölüm
const oldPriceDOM = document.querySelector(".old-price")      // 121.Bölüm
newPriceDOM.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}` // 122.Bölüm
oldPriceDOM.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}` // 123.Bölüm 124.Bölüm için single-product.html'in içinde product-gallery'e git

// Product Gallery
const singleImageDOM = document.querySelector("#single-image")  // 125.Bölüm
singleImageDOM.src = findProduct.img.singleImage                // 126.Bölüm

const galleryThumbs = document.querySelector(".gallery-thumbs") // 145.Bölüm
let result = ""                                                 // 146.Bölüm
findProduct.img.thumbs.forEach((item) => {                      // 147.Bölüm 148.Bölüm için single-product.html'in içine git ve li'leri sil. ve burada ekle.
  result += `
  <li class="glide__slide">
    <img src=${item} class="img-fluid" alt="">
  </li>`
})
galleryThumbs.innerHTML = result    // 149.Bölüm 150.Bölüm için glide.js'e git
thumbsActiveFunc()                  // 141.Bölüm 142.Bölüm için thumbsActive'e git
singleThumbs()                      // 152.Bölüm 153.Bölüm için thumbsActive'e git

const productThumbs = document.querySelectorAll(".product-thumb .glide__slide img") // 193.Bölüm
productThumbs[0].classList.add("active")                                            // 194.Bölüm

// Add to Cart
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] // 195.Bölüm
const findCart = cart.find((item) => item.id === findProduct.id)  // 196.Bölüm 197.Bölüm için single-product.html'in içinde cart-button classına git
const btnAddToCart = document.getElementById("add-to-cart")       // 198.Bölüm
const quantityDOM = document.getElementById("quantity")           // 208.Bölüm
let cartItems = document.querySelector(".header-cart-count")      // 210.Bölüm

if(findCart) {                                                    // 199.Bölüm
  btnAddToCart.setAttribute("disabled", "disabled")               // 200.Bölüm 201.Bölüm için product-item.css'git
}
else {                                                            // 204.Bölüm
  btnAddToCart.addEventListener("click", function() {             // 205.Bölüm
    cart.push({...findProduct, quantity: Number(quantityDOM.value)}) // 206.Bölüm 207.Bölüm için single-product.html'e git. 
    btnAddToCart.setAttribute("disabled", "disabled")             // 209.Bölüm
    localStorage.setItem("cart", JSON.stringify(cart))            // 211.Bölüm
    cartItems.innerHTML = cart.length                             // 212.Bölüm 213.Bölüm için yeni bir tabs.js dosyası aç
  })
}



