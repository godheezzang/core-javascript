/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
    maker: 'fromB',
    brand: 'FD221',
    type: 'neckband',
    photo: {
      static: 'https://bit.ly/3OS50UD',
      animate: 'https://bit.ly/3P8646q'
    },
    getFullName() {
      return `${this.brand}, ${this.maker}`;
    },
  };
  
// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
//   console.log(portableFan.photos.animate);
  
// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }
  
  
// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

portableFan && portableFan.photos && portableFan.photos.animate;

  
// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate;

  
// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.(); // portableFan에 getFullName이 있으면 쓰고 없으면 쓰지 마


console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.



console.clear();

// web API

// API가 뭔가요? Application Programming Interface
// 소프트웨어 응용 프로그램 간에 통신할 수 있도록 하는 도구 또는 규약
// 데이터를 요청하거나 송수신하며 서로 다른 소프트웨어 간 상호작용을 허용한다.
// 설명서라고 생각하면 편함


// sync(동기) & async(비동기)
// 동기적 일처리 방식: 순차적 실행 -> 자바스크립트의 처리 방식
// 비동기적 처리 방식: !순차적 실행


// debounce throttle

// const timer = setTimeout(()=>{
//     console.log(2);
// },3000);


// clearTimeout(timer); // setTimeout 빠져나오기. ()안에 변수 이름 넣어야함



// setInterval(()=>{
//     console.log('안녕');
// },1000);


const button = document.querySelector('.click');


setTimeout(() => {
  
    const template = /* html */ `
      <button type="button" class="click">click</button>
    `
  
    document.body.insertAdjacentHTML('beforeend',template)
  
  
  }, 3000);






// logic 1

// logic 2

// logic 3

