import { 
  setStorage, 
  getStorage, 
  deleteStorage, 
  getNode,
  clearContents
} from './lib/index.js'



// 1. textField의 값을 로컬 스토리지에 저장해주세요.
// - input.addEvent ... eventType: input

// 2. 페이지 로딩 시 바로 실행되는 함수 만들기 (IIFE)
// 3. 스토리지 값을 가져와 textField에 저장하기


const textField = getNode('#textField')
const clear = getNode('[data-name="clear"')


const handleTextField = (e) => {

  const value = e.currentTarget.value;
  setStorage('text', value)
}


const handleClear = () => deleteStorage('text').then(clearContents(textField))

textField.addEventListener('input', handleTextField);

clear.addEventListener('click',handleClear);



// 불안정하게 쓰는 법
// function init(){

//   console.log('init');
// }

// window.addEventListener('DOMContentLoaded', init)


// 그래서 IIFE 패턴 사용

// (()=> {

  // then 으로 하기
  // getStorage('text').then((res)=>{
  //   textField.value = res;
  // })

  
// })()


// await을 쓰기 위해 IIAFE로 하기

(async ()=>{

  const data = await getStorage('text');

  textField.value = data;

})




