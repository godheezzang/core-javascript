/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// constructor method는 최초 1회만 실행됨 (n회? x, 접근 자체가 안됨)
// 주기적으로 호출해야하는 데이터라면 constructor 사용안하거나 밖으로 빼면 됨
// 초기값 설정, 한 번만 실행되어야 하는 함수일 때 사용

class Animal {
    constructor(name){
        this.name = name;
        this.stomach =[];
        this.legs = 4;
        this.tail = true;
    }

    get eat(){
        return this.stomach;
    }

    set eat(food){
        this.prey = food;
        this.stomach.push(food);
    }
}

const a = new Animal('호돌이');


// 클래스 상속
class Tiger extends Animal{
    constructor(name){
        super(name);
        this.pattern = '호랑이 무늬';
    }

    static options = {
        version: '0.0.1',
        company: 'like-lion',
        ceo: '---',
    }
    
    static bark(){
        return '어흥'
    }

    hunt(target){
        return `${target}에게 접근중`;
    }
}

const 한라산호랑이 = new Tiger('한돌이');