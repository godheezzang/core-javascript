import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";
import { xhrPromise } from "./xhr.js";
import { insertLast } from "../dom/insert.js";
import { getRandomMinMax } from "../math/getRandomMinMax.js";
import { tiger } from "./godhee.js"


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

export function delayP(options){


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


// delayP(1000)
// .then((res)=>{

//    first.style.top = '-100px'
//    second.style.top = '100px'

//    return delayP(1000)
// })
// .then((res)=>{

//   first.style.transform = 'rotate(360deg)'
//   second.style.transform = 'rotate(-360deg)'
//   return delayP(1000)
// })
// .then((res)=>{

//   first.style.top = '0'
//   second.style.top = '0'
//   return delayP(1000)
// })
// .catch(()=>{

// })

// delayP는 성공과 실패를 따지는 프라미스 객체를 반환한다
// delayP.then 은 비어 있는 promise 객체를 반환한다 






// const result = delayP({
//   shouldReject: false,
//   timeout: 1000,

// });

// // result.then 
// // promise의 resolve/reject이 실어온 결과 값을 받아볼 수 있게 하는 메서드

// result
// .then((res)=>{
//     console.log(res); // 성공
//   },
//   (err)=>{
//     console.log(err); // 실패
//   }
//   )
// .catch((err)=>{ // try-catch절의 그 catch 맞음
//   console.log(err);
// })









//                           // 각각 a  , b 로 바꿀 수도 있음
// const promise = new Promise((resolve,reject)=>{

//   reject('fail')

// })

// console.log(promise);





// async : 함수의 리턴 값을 무조건 Promise<Object>로 만든다.
// await : 프라미스 객체의 결과 값을 꺼내는

async function delayA(data){

  return data
}

// delayA('신재훈').then(console.log)


const result = await delayA('신재훈')

// console.log(result); // 문자를 프라미스 객체로 만들어서 반환한다.








// JS는 코드의 실행을 기다려주지 않고 그냥 실행한다.
// 그래서 callback을 썼던 것

/* -------------------------------------------------------------------------- */
/*                                  callback                                  */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                   promise                                  */
/* -------------------------------------------------------------------------- */

//function 라면끓이기() {


//   delayP()
//   .then(()=>{
//     console.log('물');
//     return delayP;
//   })

//   delayP()
//   .then(()=>{
//     console.log('스프');
//     return delayP;
//   })

//   delayP()
//   .then(()=>{
//     console.log('면');
//     return delayP;
//   })

//   delayP()
//   .then(()=>{
//     console.log('그릇');
//     return delayP;
//   })

// }



// 라면끓이기();


/* -------------------------------------------------------------------------- */
/*                                    async                                   */
/* -------------------------------------------------------------------------- */


async function 라면끓이기() {


  console.log('물');
  await delayP()

  console.log('스프');
  await delayP()

  console.log('면');
  await delayP()

  console.log('그릇');
  await delayP()

}


// 라면끓이기();



/* -------------------------------------------------------------------------- */
/*                                  포켓몬 입양하기                                  */
/* -------------------------------------------------------------------------- */



async function getData(){
  
  const response = await tiger.get(`https://pokeapi.co/api/v2/pokemon/${getRandomMinMax(0,800)}`)



  const imgSrc = response.data.sprites.other.showdown['front_default'];

  insertLast('h1', `<img src="${imgSrc}" alt="" />`)
  
}


// getData()






















