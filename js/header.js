function sidebarFunc() {
  // Home Sidebar Start   1.Bölüm
  const btnOpenSidebar = document.querySelector("#btn-menu")
  const sidebar = document.querySelector("#sidebar")
  const btnCloseSidebar = document.querySelector("#close-sidebar")

  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0"
  })
  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%"
  })

  // Click Outside Start  Sayfadaki herhangi bir yere tıklandığında da sidebarı kapatmaya yarar. 2.Bölüm
  document.addEventListener("click", function (event) {
    if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
      sidebar.style.left = "-100%"
    }
  })
  // Click Outside End
  // Home Sidebar End
}

function searchModalFunc() {
  // Search Modal Start   3.Bölüm
  const btnOpenSearch = document.querySelector(".search-button")
  const modalSearch = document.getElementsByClassName("modal-search")
  const btnCloseSearch = document.getElementById("close-search")
  const modalWrapper = document.getElementsByClassName("modal-wrapper")

  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible" // modal-search array döndüğü için [0] yazdık
    modalSearch[0].style.opacity = "1"
  })

  btnCloseSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden"
    modalSearch[0].style.opacity = "0"
  })

  // Click Outside Start  4.Bölüm
  document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(modalWrapper[0]) && !e.composedPath().includes(btnOpenSearch)) {
      modalSearch[0].style.visibility = "hidden"
      modalSearch[0].style.opacity = "0"
    }
  })
  // Click Outside End
  // Search Modal End
}

function headerFunc() {  // 27.Bölüm. modül sistemine geçtik yani JS dosyalarını parçala yönet şeklinde yapıyoruz.
  sidebarFunc()
  searchModalFunc()
}
export default headerFunc()