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