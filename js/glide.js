const productsContainer = document.getElementById("product-list")  // 66.Bölüm 
const productsContainer2 = document.getElementById("product-list")

export function product1() {
  const config = {        // 22.Bölüm  23.Bölüm için index.html'in içinde products'a git
    // type: 'carousel',
    perView: 4,   // listede 4 ürün gösterir. 
    gap: 20,
    // autoplay: 3000
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      }
    }
  }
  productsContainer && new Glide('.product-carousel', config).mount()  // 67.Bölüm için productsContainer && bunlar eklendi
}

export function product2() {
  const config2 = {        // 25.Bölüm
    bound: true,  // ürünleri kaydırırken boşluk kalmasını istemiyorsak bunu yazarız.
    perView: 4,
    gap: 20,
    // autoplay: 3000
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      }
    }
  }
  productsContainer2 && new Glide('.product-carousel2', config2).mount()  // 68.Bölüm için productsContainer2 && bunlar eklendi. 69.Bölüm için silindi. 70.Bölüm silindi. 71.Bölüm için cart.html'e script src=cart.js type="module" ekliyoruz.
}

export function singleThumbs() { // 150.Bölüm'de export function singleThumbs() içine alındı ve tekrar single-product.js'git ve import et
  const config3 = {     // 130.Bölüm 131.Bölüm için single-product.html'in içine src dosyalarını çağır
    perView: 5,
    breakpoints: {
      992: {
        perView: 3,
      },
    },
  };
  new Glide(".product-thumb", config3).mount();
}