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

// SCROLL 위치값 구하기
window.addEventListener("scroll", (event)=>{
  const scrollY =this.scrollY;
  // console.log(scrollY);
});




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

// 질문!!!2022-12-23 왜 scrollY > 400인데 600에 동작하는 이유
const aboutEls= document.querySelectorAll('ul.scroll-spy');
console.log(aboutEls);

window.addEventListener('scroll', function () {
  if(window.scrollY > 400) {
    new ScrollMagic.Scene({
    triggerElement: aboutEls
    })
    .setClassToggle(aboutEls, 'show')
    .addTo(new ScrollMagic.Controller());
  }else {}
});


// aboutEls.forEach(function (aboutEl) {
//   if(window.scrollY > 800) {
//     new ScrollMagic.Scene({
//       triggerElement: aboutEl,
//     })
//     .setClassToggle(aboutEl, 'show')
//     .addTo(new ScrollMagic.Controller());
//   }else {}
// });











// HEADER - MENU OPEN
const gnbEl = document.querySelector('.gnb')
const mainMenuEl = document.querySelector('.gnb__wrap');
const subMenuEls = document.querySelectorAll('.gnb__2depth');
const gnbBg = document.querySelector('.bg_nav');

mainMenuEl.addEventListener('mouseover', function () {
  // gnbEl.style.hight = '350px'
  // gnbBg.style.opacity = '1';
  gnbBg.style.height = '200px';

  subMenuEls.forEach(function (subMenuEl) {
    subMenuEl.style.opacity = '1';
    subMenuEl.style.visibility = 'visible';
  });
});
gnbEl.addEventListener('mouseleave', function () {
  // gnbEl.style.height = '100px';
  // gnbBg.style.opacity = '0';
  // gnbBg.style.visibility = 'hidden';
  gnbBg.style.height = '0px';
  
  subMenuEls.forEach(function (subMenuEl) {
  subMenuEl.style.opacity = '0';
  subMenuEl.style.visibility = 'hidden';
});
});



new Swiper('.main-contain .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, 
  // autoplay: {delay: 3000},
  slidesPerView : 1, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기

});

// GALLERY - SWIPER
new Swiper('.recruit .swiper', {
  direction: 'horizontal',
  loop: true, 
  autoplay: {delay: 3000}, //
  slidesPerView : 2, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 60, //슬라이드 사이 여백(간격) px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 이전/다음 슬라이드 버튼 사용
    nextEl: '.recruit .swiper-button-next',
    prevEl: '.recruit .swiper-button-prev',
  },
});

