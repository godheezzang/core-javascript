/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Array.isArray(data);

function isArray2 (data){
    return Array.isArray(data)
}


const people = [
    {
        id: 0,
        name: '박가희',
        age: 25,
        job: '명탐정코난 범인',
        imageSrc: 'FAkq31',
        alt: '어두컴컴한 방 안에 있는 박가희님',
    },
    {
        id: 1,
        name: '김보미',
        age: 64,
        job: '짜요짜요 마케터',
        imageSrc: 'Gakz34',
    },
    {
        id: 2,
        name: '한태희',
        age: 13,
        job: '삐돌이',
        imageSrc: 'Fkzoq13',
    },
    {
        id: 3,
        name: '이원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Tq9z1i',
    },
]



/* 요소 순환 ---------------------------- */

// forEach 자체는 값을 반환하지 않는다.

let nameArray = [];

people.forEach((item, index)=>{
    nameArray.push(item.name);
});

// console.log(nameArray);

const list = document.querySelectorAll('span')

list.forEach((item)=>{
    item.addEventListener('click', ()=>{
        console.log('눌렀니?');
    })
})


// 이벤트가 많을 때 위 방식을 써도 되나요? 아니요
// addEventListner가 과부하를 가져온다 -> 


// 이벤트 바인딩 확인 방법: 개발자 도구 -> elements -> Event Listners

// list[0].addEventListener('click',()=>{
//     console.log('first!');
// })

// list[1].addEventListener('click',()=>{
//     console.log('second!');
// })


/* 원형 파괴 ----------------------------- */

const arr = [10,100,1000,10_000];


// push
// pop
// unshift
// shift
// reverse
// const reverse = arr.reverse(); // [10000, 1000, 100, 10] 배열의 순서를 뒤바꾼다.
// 원형 훼손을 막으려면?
const reverse2 = [...arr].reverse(); // 복사한 뒤 뒤바꾸면 됨


// splice
// const splice = arr.splice(1,2); // 배열의 1번째부터 2번째까지
// const splice2 = arr.splice(1,2,'js','css') // 


// sort
// arr.sort((a,b)=>{
//     return b-a; // 큰 숫자부터 정렬, a-b는 작은 숫자부터 정렬(a<b일 때)
// })




/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map 배열을 반환한다. (forEach는 반환하지 않는다.)

const map = people.map((item,index)=>{
    return item.job 
})

// const job = people.map((item,index)=>item.job)



const card = people.map((item,index)=>{
    return /* html */ `
        <div class="userCard card-${index+1}">
            <div class="imgField">
                <img src="${item.imgSrc}.jpg" alt="${item.alt}">
            </div>
            <span>이름: ${item.name}</span>
            <span>나이: ${item.age}</span>
            <span>직업: ${item.job}</span>
        </div>
    `
})


// card.forEach((item)=> document.body.insertAdjacentHTML('beforeend',item));


const newAge = people.map(item => item.age + 1);


// filter는 여러개 반환, 배열로 반환
const 젊은이들 = people.filter((item)=>{
    return item.name === '박가희'
})


// find는 하나만 반환, 객체로 반환
const find = people.find((item)=>{ // findIndex는 몇 번째 배열인지 인덱스를 반환해줌
    return item.job === '삐돌이'
})



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */


const totalAge = people.reduce((acc,cur)=>acc + cur.age, 0);

/*
const totalAge = people.reduce((acc,cur)=>{
    acc + cur.age
}, 0)
*/



const tem = people.reduce((htmlCode,cur)=>{
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
  },'')
  
  
  document.body.insertAdjacentHTML('beforeend',tem)



// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split: 문자 -> 배열

const str = '원명 가희 소정 설아 경민 진욱'

const stringToArray = str.split(' ');

console.log(stringToArray);



// join: 배열 -> 문자

const arrayToString = stringToArray.join(' & ');

console.log(arrayToString);