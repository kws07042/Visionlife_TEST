const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const indicatorsContainer = document.querySelector(".carousel-indicators");

let currentIndex = 0;
const totalSlides = slides.length;
let interval; // 자동 슬라이드 타이머

// 인디케이터 생성
slides.forEach((_, index) => {
  const indicator = document.createElement("span");
  indicator.classList.add("indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.dataset.index = index;
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

// 슬라이드 이동 함수
function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  updateIndicators();
}

// 인디케이터 업데이트
function updateIndicators() {
  document.querySelectorAll(".indicator").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// 버튼 클릭 이벤트
prevButton.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
  restartAutoSlide();
});
nextButton.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
  restartAutoSlide();
});

// 자동 슬라이드 설정
function startAutoSlide() {
  interval = setInterval(() => goToSlide(currentIndex + 1), 3000);
}
function restartAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

// 초기 실행
startAutoSlide();
