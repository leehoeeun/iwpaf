// function changeHeightBig() {
//   document.getElementsByClassName("bg_nav").style.height = "300px";
// }
// function changeHeightSmall() {
//   document.getElementsByClassName("bg_nav").style.height = "0px";
// }
// const gnbInnerEls = document.querySelectorAll('.gnb__inner');

// gnbInnerEls.forEach(function (gnbInnerEl, index) {
//   gnbWrapEl.addEventListener('mouseover', function() {
//   changeHeightBig();
// });
//   gnbWrapEl.addEventListener('mouseout', function() {
//   changeHeightSmall();
// });

// });

// main fadeIn
const fadeIn = document.querySelectorAll('.fade-in');
console.log(fadeIn);

fadeIn.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  }); 
});

// copyright에 올해 연도를 가져옴
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 


// SCROLL TO TOP
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0
    }); 

  } else {
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100
    });
  }
});

// 좌우 나타나는 애니메이션
const spyEls= document.querySelectorAll('section.scroll-spy');

console.log(spyEls);
// 메소드 체이닝
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
});