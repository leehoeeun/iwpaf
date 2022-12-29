// 주소 검색
// new daum.Postcode({
//     oncomplete: function(data) {
//         // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
//         // 예제를 참고하여 다양한 활용법을 확인해 보세요.
//     }
// }).open();


const recruitSignYear = document.querySelector('.sign__yy');
const recruitSignMonth = document.querySelector('.sign__mm');
const recruitSignDate = document.querySelector('.sign__dd');


recruitSignYear.textContent = new Date().getFullYear();
recruitSignMonth.textContent = new Date().getMonth();
recruitSignDate.textContent = new Date().getDate();