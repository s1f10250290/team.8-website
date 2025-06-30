const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  // 現在の画像を非表示
  slides[currentIndex].style.opacity = 0;

  // 次の画像を表示
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}

// 3秒ごとに画像を切り替え
setInterval(showNextSlide, 3000);