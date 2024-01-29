/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); // false

// 논리곱(그리고) 연산자 &&(AND)
let AandB = a && b; 
console.log(AandB);

// 논리합(또는) 연산자 ||(OR)
let AorB = a || b;
console.log(AorB);

// logical or assignment 논리합 할당 연산자 ||/

// a = a || b;
// a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
// [] -> array literal 방식
// const a = new Array() -> constructor 방식 (생성자 함수)


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};

// 로그인 구현하기

let userName = prompt("이름을 입력해 주세요.");

// 상황
// 1. 사용자가 취소 버튼을 누른 경우 => null ✅
// 2. 사용자가 ESC 버튼을 누른 경우 => null ✅
// 3. 사용자가 아무것도 입력하지 않았을 경우 => '' 
// 4. 띄어쓰기만 입력한 경우 => ' '

if (userName?.toLowerCase() === "admin"){
    let password = prompt("비밀번호를 입력해 주세요.");
    if(password == "TheMaster"){
        alert("환영합니다!");
    }
    else if(password == '' || password == null){
        alert("취소되었습니다.");
    }
    else {
        alert("인증에 실패하였습니다.");
    }
} 
else if(userName === '' || userName === null){
    alert("취소되었습니다.");
} 
else {
    alert("인증에 실패하였습니다.");
}