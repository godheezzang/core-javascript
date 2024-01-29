/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
    hasOwnProperty(){
        return '내가 누굴까?' // hasOwnProperty 훼손
    }
};
  
Object.prototype.nickName = 'tiger'; // 조상 오염시키기


// 객체의 속성(property) 포함 여부 확인 방법
// key in js (in문)

const key = 'nickName';
// key 값에 valueOf 또는 toString, nickName(오염시킨거)을 넣어도 나오는 이유
// : js의 조상인 '객체'가 이 능력을 가지고 있기 때문에 나온다.
//   능력이 타고타고 내려와서 js에도 내려오기 때문.. (조상이 오염되어도 나옴) (in문의 단점)

console.log(key in js);


// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 자바스크립트는 hasOwnProperty를 보호해주지 않는다.
// 생성된 객체의 method는 불안하다 -> 진짜 객체의 능력을 빌려써야 한다.

// 메서드 빌려쓰기 ( call(빌려쓰는 대상, 전달되는 인수) )

// console.log(js.hasOwnProperty(key));

console.log( Object.prototype.hasOwnProperty.call(js,key) );
// Object.prototype을 ({})로 바꿔써도 된다.
// 여기서 ({})은 생성된 객체. 조상이 아님

// 다른 애가 배열의 능력을 빌려 쓰는 예시
const list = document.querySelectorAll('span'); // 유사 배열

Array.prototype.map.call(list,(a)=>{ // array의 map을 빌려쓰겠다
    return a + 10;
})


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

console.clear();

for(let key in js){

    if(Object.prototype.hasOwnProperty.call(js,key)){
    // 니가 가지고 있는 애들만 조회해줘
        // 1. key = 'creator'  console.log(key);
        // 2. key = 'createAt'  console.log(key);
        // 3. key = 'createAt'  console.log(key);
        console.log(key);

    }

}

/* obj 키 추가하기
const obj = {}

Object.defineProperty(obj,'key1',{
    enumerable: false,
    value: 'kindtiger'
})

*/

// 배열도 for...in 을 쓸 수 있을까?
    // for...in은 객체를 순환하는 용도로 사용되는 것이지,
    // 배열은 순서가 중요하기 때문에 사용하는걸 권장하지 않음
    // 데이터 양이 방대해지면 for...in으로 순환, 반복하는게 위험하다
    // 순서 보장 X, 성능 면에서도 떨어짐
    // 따라서 for 반복문을 쓰는 것을 권장
const tens = [10,100,1000,10000];


for(let key in tens){
    console.log(tens[key]);
}


// 반복문

