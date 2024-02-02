/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: 'fixed',
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    ["max-width"]: '800px',
    height: '40vh',
    ["min-height"]: 280, // 만약 단위를 px로 할 거라면 px 생략 가능
    transform: 'translate(-50%, -50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
        //    authorization -> 권한 부여 시 사용
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    uuid: crypto.randomUUID(),
    name: 'tiger',
    email: '930_10@naver.com',
    isSignIn: false,
    permission: 'paid', // paid | free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// setter
console.log(authUser.permission = 'free');


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

// setter
console.log(authUser['isSignIn'] = true);


// 해당 객체에 키 값의 여부를 확인하는 방법 -> in 문
console.log('name' in authUser);

// 여러 키 값을 열거하는 방법
for(let key in authUser){
    console.log(key); // 모든 키들이 순환되는 모습을 확인할 수 있음
}

// 위 방법은 Object.prototype.nickName으로 조상에 추가하면 authUser에는 없지만 열거가 된다.
// 내가 가지고 있는 키 값만 열거하는 방법
for(let key in authUser){
    if(Object.prototype.hasOwnProperty.call(authUser,key)){
        console.log(key);
    }
}


// 객체의 key만을 모아놓은 배열
const keyList = Object.keys(authUser);
console.log(keyList); // key만 모여진 배열이 만들어진다.

// 함수 만들기
function keys(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(key)
        }
    }
    return result;
}

keys(authUser) // ['uuid','name','email']


// 객체의 value만을 모아놓은 배열
const valueList = Object.values(authUser);
console.log(valueList); // value만 모여진 배열이 만들어진다.

// 함수 만들기
function values(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(obj[key])
        }
    }
    return result;
}

values(authUser);


// 객체의 key와 value의 쌍을 배열로
const keyValue = Object.entries(authUser);
console.log(keyValue); // key와 value 쌍이 배열로 만들어진다.

console.clear();

// 함수
function entries(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(key, obj[key])
        }
    }
    return result;
}

entries(authUser);

// map, filter, reduce, forEach 이해하는 데에 도움이 된다.



// 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)
/*
// 제거
authUser.uuid = null;
console.log(authUser); // authUser의 uuid 값이 null로 바뀌며 비워진다.

// 삭제
delete authUser.name;
console.log(authUser); // authUser의 name 키와 값이 다 없어진다.
*/

// authUser.uuid = null 함수 만들기
function isObject(data){

   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'

}

function removeProperty(obj,key){

    if(isObject(obj)) return;
    obj[key]= null;
    
} 


// authUser.uuid : undefined 함수 만들기
function deleteProperty(obj,key){

    if(isObject(obj)) return;
    delete obj[key]
}



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name,age,phone){

    return {
        name,
        age,
        [calculateProperty]: phone,
    }
}



// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티 (short hand property)
// 매개변수로 받은 값이 똑같이 key와 value로 들어가게 되는 경우
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
    name,
    email,
    authorization,
    isLogin,
}



// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}



// ⭐⭐⭐⭐⭐ 쌉 중요 ⭐⭐⭐⭐⭐

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서는 절대 바꿀 수 없음. 변수 이름은 바꿀 수 있음
// 배열 구조 분해 할당 기본 식
// let [variableA, variableB] = array;

// const로 하면 밑에 다시 할당 불가
// a1 = ? <- 이게 안된다는거
const [a1,a2,a3,a4]= [10, 100, 1000, 10000];

console.log(a1);


// 배열이 몇 개인지 알 수 없을 때 ,,와 ...rest 사용
// ,,과 ,_, -> 두 번째 자리가 빈다. 즉 두 번째는 없는 공간으로 인식하고 그 뒤로만 출력한다.
// ...rest 는 나머지 것들을 출력한다
const [b1,,...rest] = [10, 100, 1000, 10000];
console.log(rest);
console.log(b1);

for(let [key, value] of Object.entries(authUser)){
    console.log(key,value);
}

const [first, second] = document.querySelectorAll('span')
console.log(first); // <span class="first">hello</span>
console.log(second); // <span class="second">javascript!</span>



// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];
// const a4 = arr[3];
// 이런 반복적인 코드를 줄이기 위해 배열 구조 분해 할당을 한다



// ⭐⭐⭐⭐⭐ 쌉 중요 ⭐⭐⭐⭐⭐

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
// 순서 상관 X, 변수 이름 바꿀 수도 있다
// 순서가 달라도 같은 키 값을 찾아가기 때문에 결과는 똑같다.
// 

const salaries = {
    박지성: 800,
    김보미: 150,
    이경민: 250,
    전희선: 50,
}

// 객체에 키가 없어도 매개변수 기본값 설정하는 것과 같다.
const {김보미:김, 박지성:박, 이경민:이, 전희선:전, 도가현:도 = 200} = salaries;
 
console.log(도);


// 1. 함수의 인수가(arguments) 엄청 많아질 경우 객체를 받아 처리할 수 있다.
// e.g) createUserList('seonbeom',30,'서울시 중랑구','010-2222-222')

createUserList(
    {
      name:'tiger',
      age:35,
      address:'서울시 중랑구 면목동',
      phone:'010-2222-2222'
    }
)
  
const defaultOptions = {
    name:'',
    age: 0,
    address:'',
    phone:''
} 
  
function createUserList(options){

    // mixin 특정 프로퍼티에 특정 키만 추가되는 한계를 이기기 위해 사용
    // const mix = {...defaultOptions,...options};

    // 2. 함수 안에서 객체를 구조 분해할 수 있다.     // default parameter
    const {name:n,age,address,phone,nickName = 'tiger'} = options;

    // 3. 스코프 안에 동일한 변수가 사용될 경우 alias를 지정할 수 있다.
    const name = '선범'

    // 4. shorthand property
    return {
        name:n,
        age,
        address,
        phone,
        nickName
    }
}

// 5. 어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까?
function createUserList2({name:n,age,address,phone,nickName = 'tiger'}){

    const name = '선범'

    return {
        name:n,
        age,
        address,
        phone,
        nickName
    }
}