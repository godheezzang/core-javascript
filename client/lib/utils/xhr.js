




/* 
  [readyState]
  
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete

*/

const END_POINT = "https://jsonplaceholder.typicode.com/users";

export function xhr({
  method = "GET",
  url = "",
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail({ message: "에러가 발생했습니다!" });
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

// callback => 함수 본문을 넘겨서 안쪽 함수에서 실행





xhr({
  url: END_POINT,
  onSuccess(data) {
    // console.log(data);
  },
  onFail() {},
});




xhr.nicName = 'tiger';


xhr.get = (url,onSuccess,onFail)=>{
  xhr({
    url,
    onSuccess,
    onFail
  })
}


xhr.get(
  END_POINT,
  ()=>{},
  ()=>{}
)

xhr.post = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}


xhr.put = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}


// xhr.post(END_POINT, {name: 'tiger'}, (data)=>{console.log(data)},()=>{})




// xhr.delete()


/* --------------------------------------------------- */
/*                                 xhr Promise                                */
/* --------------------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Contents-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}


export function xhrPromise(options) {
  // mixin

  const { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: "알 수 없는 오류가 발생했습니다!" });
          // error
        }
      }
    });
  });
}



// xhrPromise({
//   method: 'GET',
//   url: END_POINT
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   err.message
// })





// xhrPromise는 프라미스 객체를 내뱉지만 get메서드는 내뱉지 못하기 때문에 꼭 리턴 필요
xhrPromise.get = (url) => {
  return xhrPromise({url})
}


xhrPromise.post = (url, body) => {
  return xhrPromise({
    method: 'POST',
    url,
    body})
}


xhrPromise.delete = (url) => {
  return xhrPromise({
    method: 'DELETE',
    url,
  })
}



// xhrPromise.get();
// xhrPromise.post();
// xhrPromise.put();


// xhrPromise.post(END_POINT,{name: 'tiger'})
//   .then(console.log)
//   .catch(console.log)





/* ------- */

// // 생성자 함수는 객체를 반환함 -> 값을 받을 수 있음
// // const xhr = new XMLHttpRequest();



// // xhr 사용하기
// // xhr.open('통신 방법',통신 대상)

// const END_POINT = 'https://jsonplaceholder.typicode.com/users'
// // xhr.open('GET',END_POINT);

// // POST 요청을 보낼 때는 body를 실어보내야 한다.
// // xhr.send( JSON.stringify({name:tiger}) )


// // console.log(xhr.response); // 아무것도 나오지 않는다.
// // 이유: 데이터가 넘어오지도 않았는데 찾으니까, 정보를 가져올 수가 없음
// // 따라서, 데이터의 요청이 완벽하게 이루어졌다면 response하게 해야 한다.
// // addEventListener의 readystatechange(상태가 바뀔 때 마다 호출되게) 사용


// /*
//   [readystate]

//   0: uninitialized
//   1: loading
//   2: loaded
//   3: interactive
//   4: complete

// */

// // 비동기 통신을 실행하는 함수

// export function xhr({
//   method = 'GET', 
//   url='', 
//   onSuccess=null, 
//   onFail=null, 
//   body=null, 
//   headers={
//     'Content-Type': 'applicaiton/json',
//     'Accesss-Control-Allow-Origin': '*'
//   }
// }) {

//   const xhr = new XMLHttpRequest();

//   xhr.open(method,url);

//   Object.entries(headers).forEach(([key,value])=>{
//     xhr.setRequestHeader(key,value)
//   })

//   xhr.setRequestHeader('Content-Type','application/json') // Content-Type에 내가 application을 JSON 형태로 보내겠다

//   xhr.addEventListener('readystatechange',()=>{
  
//     const {readyState, status, response} = xhr;
  
//     if(readyState === 4){

//       if(status >= 200 && status < 400){ // 모든 데이터의 로딩이 끝난 시점

//         onSuccess(JSON.parse(response)); // 모든 데이터의 로딩이 끝나고 실행되는 함수이므로 안전함


//       }else {
  
//         onFail({message:'에러가 발생했습니다!'});
  
//       }
//     }
//   })

//   xhr.send(JSON.stringify()); // body가 전달되는 부분

// }

// // 데이터를 가져 왔을 때 밖으로 꺼내 쓰고 싶어서 return을 썼음
// // 하지만 return을 썼을 때 값이 undefined가 나옴 / 변수에 데이터를 담고 내보내도 undefined
// // 이유: 데이터를 받아오는 것을 기다려주지 않고 return하기 때문에

// // 따라서 callback 방식을 사용 => 함수 본문을 넘겨 안쪽 함수에서 실행


// xhr({
//   method: 'GET',
//   url: END_POINT,
//   onSuccess: ()=>{},
//   // (data)=>{ // 함수를 받아서 그 함수가 onSuccess로 들어간다
//   // console.log(data);
//   // },
//   onFail: ()=>{},
//   // ({message})=>{ // 함수를 받아서 그 함수가 onFail로 들어간다
//   //   console.log(message);
//   // },
//   body: {name: 'tiger'} // 위 함수의 마지막 인수인 body로 들어간 후, xhr.send(JSON.stringify())로 들어가 문자화된다.
// })


// // POST 통신
// xhr({
//   method:'POST',
//   url:END_POINT,
//   onSuccess(data){
//     // console.log(data);
//    },
//   onFail(){ },
//   body:{name:'tiger'}
// });


// // xhr.get(url,onSuccess), xhr.post(url,onSuccess)처럼 코드를 짜면 얼마나 편할까?
// xhr.nickName = 'tiger'
// // 함수도 객체임을 이용하여, 함수의 key와 value를 설정할 수 있다.
// // xhr도 함수지만, 객체이기도 하므로 key와 value를 설정할 수 있다.
// // 또한, 함수도 객체이니까 메서드도 추가할 수 있다
// // 아래처럼 해놓으면, 언제든 xhr.get()으로 호출해서 쓸 수 있다

// xhr.get = (url, onSuccess, onFail) =>{
//   xhr({
//     url,        // 단축 속성 사용
//     onSuccess,
//     onFail
//   })
// }

// xhr.get(
//   END_POINT,
//   ()=>{},
//   ()=>{}
// )


// xhr.post = (url,body,onSuccess, onFail)=>{
//   xhr({
//     method: 'POST',
//     url,
//     body,
//     onSuccess,
//     onFail
//   })
// }


// xhr.put = (url,body,onSuccess, onFail)=>{
//   xhr({
//     method: 'PUT',
//     url,
//     body,
//     onSuccess,
//     onFail
//   })
// }



// xhr.post = (url,body,onSuccess, onFail)=>{
//   xhr({
//     method: 'DELETE',
//     url,
//     body,
//     onSuccess,
//     onFail
//   })
// }





// // 
//   // xhr.addEventListener('readystatechange',()=>{

//   //   // console.log(xhr.readyState); // 2, 3, 4 -> 4번이 완료된 상태
//   //   // 상태를 바꿔주는 것이 readyState의 역할


//   //   const {readyState, status} = xhr; // 구조분해할당

//   //   if(readyState === 4){
//   //     // console.log('complete'); // 몇 초 뒤에 complete가 떨어짐(데이터를 받아오는 시간)

    

//   //     if(status >= 200 && status < 400){

//   //       // console.log(typeof xhr.response); // 문자형 데이터 값이 뜸
//   //       // 서버로부터 온 데이터는 무조건 문자형으로 받는다

//   //       // 해석하기 위해서는 JSON.parse를 이용한다
//   //       console.log( JSON.parse(xhr.response) );

//   //     }else {

//   //       console.log('통신 실패');

//   //     }
//   //   }
//   // })




















