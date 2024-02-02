/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);

// arguments 잘 안씀

  
// 함수 선언 → 화살표 함수 (표현)식

// spread syntax ...arr

                // rest parameter = 나머지
let calcAllMoney = (...args) => {

    let total = 0;

    // args 배열을 순환하여 모든 수의 합을 구하자

    // for
    // for(let i = 0; i < args.length; i++){
    //     total += args[i];
    // }


    // for ..of
    // for(let value of args) total += args;
    // console.log('for ..of 문: ' + total);


    // forEach
    // const arr = args
    // arr.forEach(function(item){
    //     total += item;
    // })
    // arr.forEach(item => total += item)


    // reduce
    // args.reduce((acc,cur)=> acc + cur,0)

    // return args.reduce((acc,cur)=> acc + cur, 0);

};

// arrow function은 return 생략 가능
// 최종 코드
// let calcAllMoney = (...args)=> args.reduce((acc,cur)=> acc + cur,0);

calcAllMoney(10,30,40,50)


// 예제
const creatUser = (name, age) =>({name: name, age: age})

creatUser('이경민', 41)
creatUser('김보미', 43)




// 화살표 함수와 this



// 자바스크립트 함수는 양면의 얼굴 (일반함수 / 생성자 함수)

// 나는 일반함수를 만들었고 일반함수를 사용하길 원함
// -> 앞에 대문자를 붙이는 관례 탄생
// 그러나 arrow function으로 정의한 함수는 생성자 함수로 쓰일 수가 없다
// -> 안에 constructor를 내장하고 있지 않기 때문에 사용 불가임
// 따라서 arrow function을 사용하는 것이 훨씬 가볍다

const Button = ()=> {

}

class Button2{ // class 구문을 사용해서 생성자함수 설계를 해라, 그러나 화살표 함수 X

}

const c = new Button2();


// function Button2 (){

// }


// 객체 지향 프로그래밍 vs 함수 지향 프로그래밍


// const a = Button() // undefined, 일반함수


// const b = new Button() // new 키워드를 붙이면 객체가 생성된다, 생성자 함수

/* 
정리하면
화살표 함수 = 일반함수에 사용 (함수 중심 설계)
클래스 구문 = 생성자 함수에 사용 (객체 중심 설계)
*/


// 일반함수(constructor 내장, 생성자 함수 가능)
// this: 나를 호출한 대상을 this로 찾음

// 화살표 함수
// this: this를 바인딩하고 있지 않음(가지고 있지 않음), 내 상위 영역에서 this를 찾음

// 객체의 메서드를 정의할 때 concise method 사용(constructor 내장 X)
// 메서드 안에서 함수를 정의할 때 arrowFunction 사용하는게 효율적(얘도 마찬가지)


const user = {
    total: 0,
    name: '박가희',
    age: 9,
    address: '서울시 중랑구 면목동',
    grades: [100,95,98],
    totalGrades(){

        this.grades.forEach((item)=>{

            this.total += item
        });
        return this.total

        // console.log(this); // user

        // function sayHi(){
        //     console.log(this);
        // }

        // const sayHi2 = () => {
        //     console.log(this);
        // } 

        // sayHi(); // 누군가에 의해 호출된게 아니기 때문에 window.sayHI() -> window가 나오게 된다.

    }
}


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// for문을 사용해서 pow 함수를 만들어보자
let pow = (numeric, powerCount) => {
    let result = 1;
    for(let i = 0; i < powerCount; i++){
        result *= numeric;
    }
    return result;
};

pow(2,3);

// 배열 반복문 만들기
let powExpression= (numeric, powCount)=> {
    return Array(powCount).fill(null).reduce((acc)=>{
        return acc * numeric
    }, 1)
};


// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
    let result = '';
    for(let i = 0; i < repeatCount; i++){
        result += text;
    }
    return result;
}

repeat('안녕', 3);


// 배열 반복문 만들기
let repeatExpression = (text, repeatCount) => {
    return Array(repeatCount).fill(null).reduce((acc)=>{
        return acc + text;
    },'');
};