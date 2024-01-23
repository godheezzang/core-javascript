/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR)); // 명시적 형 변환
console.log(YEAR + ''); // 암시적 형 변환
console.log( (YEAR + '        ').trim() ); // 암시적 형 변환시, trim으로 공백 제거


// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');


// boolean

let isClicked = false; // 변수 앞 is/has -> 거의 불린 값을 담고 있다

console.log(isClicked + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));


// null

let money = null;
console.log(Number(money));


// boolean

let cutie = true;
console.log(Number(cutie));

let ugly = false;
console.log(Number(ugly));


// string

let num = '250';

console.log(Number(num)); // 명시적 형 변환
console.log(num * 1); // 암시적 형 변환
console.log(num / 1); // 암시적 형 변환
console.log(+ num); // 암시적 형 변환


// numeric string

const width = '105.3px';

console.log(Number(width)); // NaN, px 때문에
console.log(parseInt(width)); // px와 소수를 떼고 정수로 변환
console.log(parseFloat(width)); // px를 떼고 소수도 변환
/*
 parseInt와 parseFloat는 앞이나 중간에 문자가 있을 때는 변환하지 못한다.
 만약 width 값이 a105.3px이거나 10a5.3px이라면 NaN이 뜬다
*/



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend)); // false
console.log(Boolean(money)); // false

/* 빈 문자 -> '' / 공백 문자 -> ' ' */
console.log(Boolean('')); // false
console.log(Boolean(' ')); //true

console.log(Boolean(0)); // false
console.log(Boolean('0')); // true


// 위에 나열한 것 이외의 것들 

console.clear();

const value = +(prompt('값을 입력해 주세요'));

/* 여기서 바로 변환해줘도 된다 
const value = Number( prompt('값을 입력해 주세요') );
const value = +(prompt('값을 입력해 주세요'));
const value = (prompt('값을 입력해 주세요')) * 1;
const value = (prompt('값을 입력해 주세요')) / 1;
*/

console.log(value + 50);

console.log(Number(value) + 50); // 명시적 형 변환
console.log(+ value + 50); // 암시적 형 변환
console.log(value/1 + 50); // 암시적 형 변환
console.log(value*1 + 50); // 암시적 형 변환
