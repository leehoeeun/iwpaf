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



function CheckEmail(str){                                                 
  var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  
  if(!reg_email.test(str)) {  // 정규표현식 메소드
    return false;
  }
  else {
    return true;
  }
}
// console.log(typeof reg_email);


// 로그인 버튼을 클릭했을 때 실행되는 함수                                 
function GoToEnroll() {                                          
	var obEmail = document.getElementById("re_email");
	if (!obEmail.value) {
    // debugger
		alert("이메일을 입력하세요!");
		obEmail.focus();
		return;
	}               
	else   {          
		if(!CheckEmail(obEmail.value))	{
			alert("이메일 형식이 잘못되었습니다");
			obEmail.focus();
			return;
		}                
	}                      
}                           

// 이메일을 입력받는 태그           
// <input type="text" id = "email" name = "email" >

// 회원가입 버튼 
// <button OnClick = "javascript:GoToEnroll()">회원가입</button>
