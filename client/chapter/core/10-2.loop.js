/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/*
let i = 0;

do{

     console.log(i);

     i++;

}while(i < 5);

console.log(i);
*/




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

/*
let repeat = +prompt('몇 번 반복하시겠습니까?', 0); // 뒤에 ,0 => 기본값
 do {

     console.log(repeat);
    
     if( repeat === '' || repeat === null ) break; // 안에 조건(condition) 걸기 가능

 }while (repeat--);
*/



// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정





/* ------------ do...while 문을 쓰는 이유 ----------- */


let first = document.querySelector('.first'); 
// (*) 에서 재할당을 해야 하기 때문에 const가 아닌 let으로 선언
// 괄호 속엔 css 선택자를 그대로 쓰면 된다
// DOM; Document Object Model 문서의 객체 모델
// DOM 내에서 가장 작은 것 -> node

/* 
do{

    first = first.nextSibling; // (*)

}while(first.nodeType != 1);

console.log(first);
항상 이 반복문을 선언할 순 번거로우니 
함수를 만들어서 재사용성이 높게 만들어보자 (아래) */

function next(node){

    if(typeof node === 'string'){ node = document.querySelector(node);}
    
    do {
    
        node = node.nextSibling;
    
    }while(node.nodeType !== 1);

    return node;
}

const second = next(first);
console.log(second);


// prev(second) => first

function prev(node){

    // if(!node) throw new Error('선택된 이전 요소는 존재하지 않습니다')

    if(typeof node === 'string' ){ // node의 type이 string과 일치한다면
        node = document.querySelector(node); // node에게 document에 쿼리셀렉터를 넣어줘라
    }

    do{
        node = node.previousSibling;

    }while(node.nodeType !== 1);

    return node;
    
}

console.log( prev('.second') );