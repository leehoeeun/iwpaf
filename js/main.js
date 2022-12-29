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


const height = window.innerHeight
const y = window.scrollY


// TODO : resize 됨에 따라 화면 너비가 console에 찍히게 하는 방법 
// window.addEventListener('resize', function () {
//   const width = window.innerWidth
//   console.log(width, height, y);
//   console.log(width); // resize 함수 밖에 있으면 처음 창을 열 때 width값만 인식하지만, resize function 안에 있으면, resize 될 때 마다 function이 동작해서 계속 변경되는 width값을 console에 찍는다 
// if(width <= 767) {
//   console.log('360이상');
//   spyEls.forEach(function (spyEl) {
//     new ScrollMagic.Scene({ 
//       triggerElement: spyEl,
//       triggerHook: 1 
//     })
//       .setClassToggle(spyEl, 'show') 
//       .addTo(new ScrollMagic.Controller()) 
//   });

// } else if (width <= 1278) {
//   console.log('768이상');
//   spyEls.forEach(function (spyEl) {
//     new ScrollMagic.Scene({ 
//       triggerElement: spyEl, 
//       triggerHook: 0.9 
//     })
//       .setClassToggle(spyEl, 'show') 
//       .addTo(new ScrollMagic.Controller()) 
//   });
// } else if (width >= 1278) {
//   console.log('1278이상');
//   spyEls.forEach(function (spyEl) {
//     new ScrollMagic.Scene({ 
//       triggerElement: spyEl, 
//       triggerHook: 0.8 
//     })
//       .setClassToggle(spyEl, 'show') 
//       .addTo(new ScrollMagic.Controller()) 
//   });
// }
// });


window.addEventListener('scroll', function () {
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당
})
  });



// 질문!!!2022-12-23 왜 scrollY > 400인데 600에 동작하는 이유
const aboutEls= document.querySelectorAll('ul.scroll-spy');
console.log(aboutEls);

// window.addEventListener('scroll', function () {
//   if(window.scrollY > 400) {
//     new ScrollMagic.Scene({
//     triggerElement: aboutEls
//     })
//     .setClassToggle(aboutEls, 'show')
//     .addTo(new ScrollMagic.Controller());
//   }else {}
// });

window.addEventListener('scroll', function () {
  aboutEls.forEach(function (aboutEl) {
    new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
      triggerElement: aboutEl, // 감시할 요소를 지정
      triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
    })
      .setClassToggle(aboutEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
      .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당
  })
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
const gnbEl = document.querySelector('.header_menu');
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

// hamburger btn active
const hamburBtnEls = document.querySelector('.gnb_hambur');
const etcGnb = document.querySelector('.etc_gnb');
const etcGnbBg = document.querySelector('.etc_gnb_bg');
const etcgnbEls = document.querySelectorAll('.etc_gnb__wrap');
const etcgnb2DepthEls = document.querySelectorAll('.etc_gnb__2depth_wrap');

hamburBtnEls.addEventListener('click', function () {
  this.classList.toggle('active');
  etcGnb.classList.toggle('active');
  etcGnbBg.classList.toggle('active');
});

etcgnbEls.forEach(function (etcgnbEl, clickIndex) {
  etcgnbEl.addEventListener('click', function () {
    console.log(clickIndex);
    etcgnbEls.forEach(function (etcgnbEl, etcIndex) {
      console.log(clickIndex, etcIndex);
      if (clickIndex !== etcIndex) {
        etcgnbEl.classList.remove('active');
      }
    });
    etcgnbEl.classList.toggle('active');
  });
});


// etcgnbEls.addEventListener('click', function () {
// console.log('eee');
  // etcgnbWrapEls.forEach(function (etcGnbWrapEl) {
  //   if(this.classList.contains('active')) {
  //     this.classList.remove('active');
  //   }else {
  //     this.classList.add('active');
  //   }
  // });
// });



// promotionToggleBtn.addEventListener('click', function () {
//   if(promotionEl.classList.contains('hide')) {
//     promotionEl.classList.remove('hide');
//     promotionToggleIcon.textContent = 'upload';
//   }else{
//     promotionEl.classList.add('hide');
//     promotionToggleIcon.textContent = 'download';
//   }
// });



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
  autoplay: {delay: 3000},
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: { // 이전/다음 슬라이드 버튼 사용
    nextEl: '.recruit .swiper-button-next',
    prevEl: '.recruit .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 768px
    320: {

      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2, // 한 번에 보여줄 슬라이드 수
      spaceBetween: -100 //슬라이드 사이 여백(간격) px
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 60
    },
  },
});


// 화면 resize될 때 JS
// const mediaTablet = matchMedia("screen and (max-width: 1279px)");
// const mediaMobile = matchMedia("screen and (max-width: 767px) and (min-width: 360px)");
// let spaceBetweenRecruit;
// const swiperSlideEls = document.querySelectorAll('.recruit .swiper-slide');

// mediaTablet.addListener(function (event) {
//   console.log(event);
//   if (event.matches) {
//     console.log('1279 이하');
//     swiperSlideEls.forEach(function (swiperSlideEl) {
//       swiperSlideEl.style.marginRight = '0px';
//     });
//   } else {
//     console.log('1279 이상');
//     swiperSlideEls.forEach(function (swiperSlideEl) {
//       swiperSlideEl.style.marginRight = '60px';
//     });
//   }
// });
// mediaMobile.addListener(

// );


// 마감일 : 2023년 3월 31일 17시 00분
// sunslee@naver.com


// 타이머 만들기
const recruitDate = document.querySelector(".recruit--days");
const recruitHours = document.querySelector(".recruit--hours");
const recruitMinutes = document.querySelector(".recruit--minutes");
const recruitSeconds = document.querySelector(".recruit--seconds");

function thatDay() {
  const finishTime = new Date("2023-03-31T17:00:00");
  const todyaDate = new Date();
  const remainDate = finishTime - todyaDate;
  // console.log(finishTime);
  // console.log(todyaDate);

  // const remainDay = Math.floor(remainDate / (1000*60*60*24));
  // const remainHour = Math.floor((remainDate / (1000*60*60)) % 24);
  // const remainMin = Math.floor((remainDate / (1000*60)) % 60);
  // const remainSec = Math.floor(remainDate / 1000 % 60);

  const remainDay = String(Math.floor(remainDate / (1000*60*60*24))).padStart(2,"0");
  const remainHour =String(Math.floor((remainDate / (1000*60*60)) % 24)).padStart(2,"0");
  const remainMin = String(Math.floor((remainDate / (1000*60)) % 60)).padStart(2,"0");
  const remainSec = String(Math.floor(remainDate / 1000 % 60)).padStart(2,"0");

  // recruitDate.innerText = '${remainDay}';
  recruitDate.textContent = remainDay;
  recruitHours.textContent = remainHour;
  recruitMinutes.textContent = remainMin;
  recruitSeconds.textContent = remainSec;
}


thatDay();
setInterval(thatDay, 1000);