

// 모듈 프로그래밍 사용해서
import {
    clearContents, 
    getNode, 
    getRandom, 
    insertLast, 
    isNumericString, 
    addClass, 
    removeClass,
    showAlert,
    shake,
    copy
} from './lib/index.js'
import jujeobData from './data/data.js'


// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결

// 2. input 값 가져오기 (콘솔에)
//  - input value console.log

// 3. jujeob 데이터 가져오기

// 4. jujeobData 함수에 input.value를 넣어주세요

// 5. 랜덤한 주접 한 개를 pick
//  - jujeobData => return
//  - array => array[] + getRandom()

// 6. pick을 result에 뿌려주세요 (렌더링)
//  - result 내용 바꾸기 (clearContents, node.textContent = '')
//  - pick text => insertAdjacentHTML('beforeend',text) 
//    또는 insertLast()를 사용하여 뿌려주세요


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');


/* global gsap */

function handleJujeob(e){
    e.preventDefault();

    const name = nameField.value;
    const list = jujeobData(name);
    const pick = list[getRandom(list.length)];

    if(!name || name.replace(/\s*/g,'') === '') {
        showAlert(".alert-error",'이름을 입력해 주세요');
        // addClass(nameField,'shake');
        shake.restart();

        return;
    }

    if (!isNumericString(name)) {
        showAlert('.alert-error','제대로된 이름을 입력해주세요');
        shake.restart();
        return;
    }


    // result.textContent='' 또는
    clearContents('.result');

    // result.insertAdjacentHTML('beforeend',pick); 또는
    insertLast('.result',pick);

}

function handleCopy(){
    
    const text = this.textContent;

    if(!nameField.value) return

    copy(text).then(()=>{
        showAlert('.alert-success','클립보드 복사 완료');
    });

}

submit.addEventListener('click',handleJujeob)
result.addEventListener('click',handleCopy)

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외 처리 (alert)
// 2. 공백 문자를 받았을 때 예외 처리 (alert)
//  - String.prototype.replace + regExp
// 3. 숫자형 문자를 받았을 때 예외 처리(alert)

