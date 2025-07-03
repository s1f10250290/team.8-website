// .slide-img クラスを持つすべての要素を取得
const slides = document.querySelectorAll('.slide-img');
let currentIndex = 0;

function showNextSlide() {
    // 現在表示されている画像を非表示にする
    slides[currentIndex].classList.remove('active');

    // 次のインデックスを計算
    currentIndex = (currentIndex + 1) % slides.length;

    // 次の画像を表示する
    slides[currentIndex].classList.add('active');
}

// 3秒ごとに画像を切り替え
setInterval(showNextSlide, 3000);