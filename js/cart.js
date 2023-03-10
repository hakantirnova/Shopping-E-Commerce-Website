let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] // 86.Bölüm

function displayCartProduct() { // 72.Bölüm
  const cartWrapper = document.querySelector(".cart-wrapper") // 77.Bölüm tbody'nin class'ını aldık.
  let result = ""              // 75.Bölüm 76.Bölüm için cart.html'in table'a git
  cart.forEach((item) => {     // 73.Bölüm 76.Bölüm aşağıdaki baktick alanının içi
    result += `
    <tr class="cart-item">
      <td></td>
      <td class="cart-image">
        <img src="${item.img.singleImage}" alt="">
        <i class="bi bi-x delete-cart" data-id=${item.id}></i>
      </td>
      <td>${item.name}</td>
      <td>$${item.price.newPrice.toFixed(2)}</td>
      <td class="product-quantity">${item.quantity}</td>
      <td class="product-subtotal">$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
    </tr>`
  })
  cartWrapper.innerHTML = result  // 78.Bölüm
  removeCartItem()                // 81.Bölüm
}
displayCartProduct()              // 74.Bölüm

function removeCartItem() {       // 79.Bölüm Sepetten Ürün Silme
  let cartItems = document.querySelector(".header-cart-count")  // 89.Bölüm Burada sepetin içindeki ürünlerin sayısını siliyor
  const btnDeleteCart = document.querySelectorAll(".delete-cart") // 80.Bölüm
  btnDeleteCart.forEach((button) => {               // 82.Bölüm
    button.addEventListener("click", function(e) {  // 83.Bölümde bacticklerin içinde data-id vermemiz gerekiyor
      const id = e.target.dataset.id                // 84.Bölüm
      cart = cart.filter((item) => item.id !== Number(id))  // 85.Bölüm
      displayCartProduct()                                  // 87.Bölüm
      localStorage.setItem("cart", JSON.stringify(cart))    // 88.Bölüm Burda localStorage'in içini de güncelliyoruz.
      cartItems.innerHTML = cart.length                     // 90.Bölüm
      saveCartValues()                                      // 104.Bölüm sepetten ürünleri sildiğimizde cartTotal'in içindeki rakamlarda silinmesi için burada çağırıyoruz. 105.Bölüm için product.js dosyasına git.
    })
  })
}

function saveCartValues() { // 91.Bölüm Cart Fiyat Hesaplama İşlemleri 92.Bölüm için cart.html'in içine git.
  const cartTotal = document.getElementById("cart-total")    // 94.Bölüm
  const subTotal = document.getElementById("subtotal")       // 95.Bölüm
  const fastCargo = document.getElementById("fast-cargo")    // 96.Bölüm
  const fastCargoPrice = 15                                  // 103.Bölüm

  let itemsTotal = 0  // 98.Bölüm
  cart.length > 0 && cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity))  // 99.Bölüm
  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`   // 100.Bölüm
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`  // 101.Bölüm
 
  fastCargo.addEventListener("change", function(e) { // 102.Bölüm Checkbox kısmı
    if(e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
    } else {
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`
    }
  })
}
saveCartValues() // 97.Bölüm
