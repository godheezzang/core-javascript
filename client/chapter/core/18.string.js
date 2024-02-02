/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message[3] = 'a'


// 부분 문자열 추출
let slice= message.slice(4, -1); // ess is more. 4번째부터 -1번째까지를 다 잘라내라.
let subString = message.substring(2,5);
let subStr;

// let subStr = message.substr; 레거시한 애


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
console.log( indexOf );

// 해당 문자가 없으면 -1 반환, 있으면 해당 문자가 몇 번째인지 숫자를 반환
// 브라우저 체크할 때 사용한다.

function checkBrowser(){
    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;

    switch(true){
        case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
        case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
        case agent.indexOf('chrome') > -1 && !!window.chrome : browserName = 'chrome'; break;
        case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
        case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
    }
    
    return browserName;
}

let lastIndexOf;

let include = message.includes('Less');

let startsWith = message.startsWith('Less');
console.log(startsWith);

let endsWith = message.endsWith('more.');
console.log(endsWith);


// 공백 잘라내기

let str = '      a   b      c                  d   '
let trimLeft = str.trimLeft();
let trimRight;
let trim = str.trim();

let reg = str.replace(/\s*/g,'');
function normalText(string){
    return string.replace(/\s*/g,'');
}



// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
  }
  
  function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1);
  }