function tabsFunc() {     // 213.Bölüm
  const btnTab = document.querySelectorAll(".tab-button") // 216.Bölüm 217.Bölüm için single-product.html'in içinde tab-panel'e git
  const contentDOM = document.querySelectorAll(".content")  // 218.Bölüm
  const tabsButtons = document.querySelector(".tab-list") // 219.Bölüm
  
  tabsButtons.addEventListener("click", function(e) { // 220.Bölüm
    e.preventDefault()                                   // 221.Bölüm 222.Bölüm için single-product.html'e git.
    const id = e.target.dataset.id                       // 223.Bölüm
    if(id) {                                             // 224.Bölüm
      btnTab.forEach((button) => {                       // 225.Bölüm
        button.classList.remove("active")                // 226.Bölüm
        e.target.classList.add("active")                 // 227.Bölüm
        contentDOM.forEach((content) => {                // 228.Bölüm
          content.classList.remove("active")  // 229.Bölüm 230.Bölüm için product-tabs.css'e git
          const element = document.getElementById(id)    // 234.Bölüm
          element.classList.add("active")                // 235.Bölüm 236.Bölüm için comments.js adında yeni bir dosya aç
        })
      })
    }
  })
}

export default tabsFunc() // 214.Bölüm 215.Bölüm için single-product.js dosyasına git ve import et