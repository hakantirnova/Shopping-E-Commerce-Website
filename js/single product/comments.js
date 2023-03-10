const commentReviewsFunc = function() { // 240.Bölüm
  const commentStarsDOM = document.querySelectorAll(".comment-form-rating .star") // 242.Bölüm
  
  commentStarsDOM.forEach((item) => {         // 243.Bölüm
    item.addEventListener("click", (e) => {   // 244.Bölüm
      e.preventDefault()                      // 244.Bölüm sonradan eklendi
      commentStarsDOM.forEach((star) => {     // 246.Bölüm
        star.classList.remove("active")       // 247.Bölüm
      })
      item.classList.add("active")            // 245.Bölüm
    })
  })
}

const addNewCommentFunc = () => {                                   // 248.Bölüm
  let comments = []                                                 // 262.Bölüm
  let commentTextDOM = document.getElementById("comment-text")      // 250.Bölüm
  let commentNameDOM = document.getElementById("comment-name")      // 251.Bölüm
  let commentBtnDOM = document.querySelector(".form-submit input")  // 252.Bölüm
  let commentListDOM = document.querySelector(".comment-list")      // 266.Bölüm
  let commentText = ""                                              // 257.Bölüm
  let commentName = ""                                              // 259.Bölüm

  commentTextDOM.addEventListener("input", function(e) {            // 256.Bölüm
    commentText = e.target.value                                    // 258.Bölüm  
  })

  commentNameDOM.addEventListener("input", function(e) {            // 260.Bölüm
    commentName = e.target.value                                    // 261.Bölüm  
  })

  function addComment(e) {                                          // 254.Bölüm
    e.preventDefault()                                              // 255.Bölüm
    comments.push({ text: commentText, author: commentName})        // 263.Bölüm
    let result = ""                                                 // 264.Bölüm
    comments.forEach((item) => {                                    // 265.Bölüm
      result += `
      <li class="comment-item">
        <div class="comment-avatar">
          <img src="img/avatars/avatar1.jpg" alt="">
        </div>
        <div class="comment-text">
          <ul class="comment-star">
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
          </ul>
          <div class="comment-meta">
            <strong>${item.author}</strong>
            <span>-</span>
            <time>April 23, 2022</time>
          </div>
          <div class="comment-description">
            <p>${item.text}</p>
          </div>
        </div>
      </li>`
    })
    commentListDOM.innerHTML = result    // 267.Bölüm
    commentTextDOM.value = ""            // 268.Bölüm yorum yazıldıktan sonra içinin temizlenmesini sağlıyor
    commentNameDOM.value = ""            // 269.Bölüm isim yazıldıktan sonra içinin temizlenmesini sağlıyor. 270.Bölüm için search.js adında yeni bir dosya aç
  }
  commentBtnDOM.addEventListener("click", addComment)               // 253.Bölüm
}

function commentsFunc() {       // 236.Bölüm
  commentReviewsFunc()          // 241.Bölüm
  addNewCommentFunc()           // 249.Bölüm  
}

export default commentsFunc()   // 237.Bölüm 238.Bölüm için single-product.js'e git ve import et