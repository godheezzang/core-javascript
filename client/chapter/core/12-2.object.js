/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사

const cloneObject = {};

for(let key in messenger){
    cloneObject[key] = messenger[key];
}

cloneObject.name = 'line'
console.log(cloneObject); // 얕은 복사
console.log(messenger);

console.clear();

// 2. Object.assign()을 사용한 복사

const copyObject = Object.assign({},messenger);

copyObject.name = 'line'
console.log(copyObject);
console.log(messenger);


// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = {...messenger};

spreadObject.name = 'line'
console.log(spreadObject);
console.log(messenger);


// 4. 객체를 복사해주는 유틸 함수 

function copiedObject(obj){
    return Object.assign({},obj);
}

const a = copiedObject(messenger);

console.log(a);
console.log(messenger);


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

//mixin

// 데이터 구조 설계 3depth 이상

const combinedCssMap = Object.assign({},cssMapA,cssMapB);
const spreadCssMap = {...cssMapA, ...cssMapB};

console.log(combinedCssMap);
console.log(spreadCssMap);


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copiedContainerStyles = cloneDeep(containerStyles);


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js


const kang = {
    name: '강동원',
    age: 44,
    work: {
        movie: '천박사의 퇴마연구소',
        drama: '매직',
	},
};

const clone = (obj) => {
	if(typeof obj !== 'object' || obj === null){
		return obj;
	}
	const cloneDeepObj = {};
	
	for(let key in obj){
		cloneDeepObj[key] = clone(obj[key]);
	}
	return cloneDeepObj;
}


const copiedKang = clone(kang);
copiedKang.work.movie='반도';


const ab = {
	name: '강동원',
	age: 44
};

const tuna = {};

for (let key in ab) {
	tuna[key] = ab[key];
}

tuna.name='갓동원';