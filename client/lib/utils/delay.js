import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode('.first')
const second = getNode('.second')



function delay(callback, timeout = 1000){

  setTimeout(callback,timeout)
}


// 멸망의 피라미드 (콜백 지옥)
// 가독성 부족, 코드 순서 파악 어려움
// 안전성도 떨어짐

// delay(()=>{

//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     second.style.transform = 'rotate(-360deg)'

//       delay(()=>{
//         first.style.top = '0'
//         second.style.top = '0'
//       })
//   })

// })


// 이 문제를 보완하기 위해 프로미스 사용


// mixin 패턴
// 기존 객체 + 전달 받은 객체

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: '성공입니다!',
  errorMessage: '알 수 없는 오류가 발생했습니다.'

}

function delayP(options){


  let config = {...defaultOptions}
  
  
  if(isNumber(options)){
    config.timeout = options;
  }
  
  if(isObject(options)){
    config = {...defaultOptions,...options}
  }
  
  let {shouldReject,successMessage,errorMessage,timeout} = config;
  
  return new Promise((resolve,reject)=>{

    setTimeout(() => {

      if(!shouldReject){

        resolve(successMessage);
      }
      else{

        reject(errorMessage);
      }

    }, timeout);

  })
}

// promise가 반환하는 것은 객체이며, 그 객체는 성공과 실패를 따진다


delayP(1000)
.then((res)=>{

   first.style.top = '-100px'
   second.style.top = '100px'
   
   return delayP(1000)
})
.then((res)=>{

  first.style.transform = 'rotate(360deg)'
  second.style.transform = 'rotate(-360deg)'
  return delayP(1000)
})
.then((res)=>{

  first.style.top = '0'
  second.style.top = '0'
  return delayP(1000)
})
.catch(()=>{

})

// delayP.then 은 비어 있는 promise 객체를 반환한다 






const result = delayP({
  shouldReject: false,
  timeout: 1000,

});

// result.then 
// promise의 resolve/reject이 실어온 결과 값을 받아볼 수 있게 하는 메서드

result
.then((res)=>{
    console.log(res); // 성공
  },
  (err)=>{
    console.log(err); // 실패
  }
  )
// .catch((err)=>{ // try-catch절의 그 catch 맞음
//   console.log(err);
// })














//                           // 각각 a  , b 로 바꿀 수도 있음
// const promise = new Promise((resolve,reject)=>{

//   reject('fail')

// })

// console.log(promise);









