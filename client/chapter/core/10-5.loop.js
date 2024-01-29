/* --------------- */
/* For Of Loop     */
/* --------------- */


/* 헷갈리기 쉬운 상태 관리 단어 */
// enumerable: 열거 가능한
// immutable  : 변하지 않는, 불변의 = configurable false
// iterable  : 반복 가능한
// - Symbol(Symbol.iterator)가 있으면 iterable한 요소
//   Symbol에 iterator를 내장하고 있어야 한다.


/* ---------------------------------------------------- */


// for...of 많이 쓰이는 반복문
// 반복 가능한(iterable한) 요소들에게만 사용할 수 있다.
// 객체는 for...of 사용 불가

// 유사 배열 => 배열처럼 생겼지만 실제 배열이 아닌 것
// 대표적인 유사 배열 객체: arguments, HTMLCollection, NodeList 등
// 유사 배열 예시

const arrayLike = {
    0: 'body',
    1: 'head',
    2: 'div',
    length: 3
    // [Symbol.iterator]{...} 
    // 를 직접 내장시키면 arrayLike도 iterable 한 요소로 만들 수 있다.
    // js core에 iterable object, general function 부분 읽어보기
}

/*
for(let key of arrayLike){
    console.log(key);
}
*/


/* --------------------------------------------------------- */


// 문자도 순회 가능
/*
const str = '안녕하세요';
for(let key of str){
    console.log(key); 
}
*/

/* --------------------------------------------------------- */

// 배열 속 아이템이 객체인 경우

const languages = [
    {
      id: 'ecma-262',
      name: 'JavaScript',
      creator: 'Brendan Eich',
      createAt: 1995,
      standardName: 'ECMA-262',
      currentVersion: 2022,
    },
    {
      id: 'java',
      name: 'Java',
      creator: 'James Gosling',
      createAt: 1995,
      standardName: null,
      currentVersion: 18,
    },
    {
      id: 'ecma-334',
      name: 'C#',
      creator: 'Anders Hejlsberg',
      createAt: 2000,
      standardName: 'ECMA-334',
      currentVersion: 8,
    },
  ];
  

  for(let value of languages){

    const name = value.name;

    if(name === 'Java') continue;       // Java 안나옴
    if(name.includes('Java') && name.length < 5) continue;

    // console.table(value); 

  }
  // 많은 자료를 봐야할 때 console.table로 선언하면 표로 나온다.
  

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기
  
  
  
  
const randomUser = {
    gender: 'female',
    name: { title: 'Ms', first: 'Carol', last: 'May' },
    location: {
        street: { number: 9162, name: 'Church Road' },
        city: 'Birmingham',
        state: 'Cumbria',
        country: 'United Kingdom',
        postcode: 'FO5E 4TN',
        coordinates: { latitude: '-4.3301', longitude: '155.0223' },
        timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
    },
    email: 'carol.may@example.com',
    login: {
        uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
        username: 'redduck745',
        password: 'picks',
        salt: '8xzqOzAn',
        md5: '7250e4042c2367cc82487f798c7c5253',
        sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
        sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
    },
    dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
    registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
    phone: '022 1280 9236',
    cell: '07653 428700',
    id: { name: 'NINO', value: 'SH 44 98 72 L' },
    picture: {
        large: 'https://randomuser.me/api/portraits/women/21.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'GB',
};
  
// 객체의 키, 값 순환
// - for ~ in 문

/* 추천하지 않는 방법

Object.prototype.nickName('tiger');

for(let key in randomUser){
    if(Object.prototype.hasOwnProperty.call(randomUser,key)){
      const L1 = randomUser[key];
      console.log('\tL1 : ', L1);
      if(typeof L1 === 'object'){
        for(let key in L1){
          if(Object.prototype.hasOwnProperty.call(L1,key)){
            const L2 = L1[key];
            console.log('\t\tL3 : ', L2);
            if(typeof L2 === 'object'){
              for(let key in L2){
                if(Object.prototype.hasOwnProperty.call(L2,key)){
                  const L3 = L2[key];
                  console.log('\t\t\tL3 : ', L3);
                }
              }
            }
          }
        }
      }
    }
  }

*/


// 객체는 for..of를 사용할 수 없다.
// iterable한 요소가 아니기 때문에
// 하지만 객체도 for..of로 순환한다.
// 객체를 배열로 만들어버림

//Object.keys() -> 객체의 key를 배열로 반환
//Object.values() -> 객체의 value를 배열로 반환
//Object.entries() -> key, value를 가진 하나의 쌍 배열 반환


// 배열의 구조 분해 할당


for(let keyValue of Object.entries(randomUser)){
    const key = keyValue[0];
    const value = keyValue[1];
  
    console.log('L1 :',value);
  
    if(typeof value === 'object'){
  
      for(let keyValue of Object.entries(value)){
        const key = keyValue[0];
        const value = keyValue[1];
        
        console.log('\tL2 :',value);
  
        if(typeof value === 'object'){
          for(let keyValue of Object.entries(value)){
            const key = keyValue[0];
            const value = keyValue[1];
            
            console.log('\t\tL3 :',value);
          }
        }
      }
    }
  }



// - for ~ of 문, 가장 많이 쓰는 반복문
// 재귀함수 공부하기
// forEach, map, filter, reduce도 많이 쓰지만 이것은 배열에만 해당!

// - 성능 비교 진단