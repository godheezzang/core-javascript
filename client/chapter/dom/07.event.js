/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

function handler(){
  console.log('클릭 이벤트 발생!!');
}

// first.onclick = handler


// 3. 메서드 : element.addEventListener(event, handler[, phase])




// const remove = bindEvent('.first','click',handler);



// first.addEventListener('click',handler);

// getNode('.deleteEvent').addEventListener('click',remove)




/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener





const ground = getNode('.ground');
const ball = getNode('#ball');





function handleBall({ offsetX:x, offsetY:y }){

  // const { offsetX:x, offsetY:y } = e;

  ball.style.transform = `translate(${ x - (ball.offsetWidth / 2) }px,${ y - (ball.offsetHeight / 2) }px)`

}


// ground.addEventListener('click',handleBall)


function debounce(callback,limit=1000){

  let timeout;

  return function (e){

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      
      callback.call(this,e)
    }, limit);
  }
}

function handle(e){

    console.log(this,e);
}

// call, apply, bind

// ground.addEventListener('mousemove',debounce(handle,1000))

// 알아야 할 개념: callback, closure, IIFE, call, apply

function throttle(callback, limit= 1000){

    let waiting = false;

    return function(...args){

        if(!waiting){
            callback.apply(this,args); // 떨어지는게 배열이라 apply -> 객체라면 call
            waiting = true;
        

            setTimeout(()=>{
                waiting = false;
            }, limit)
        }
    }

}

// throttle(()=>{},1000)

ground.addEventListener('mousemove',throttle(handle,2000))


function handleEmotion({ offsetX:x, offsetY:y }){

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😘</div>
  `
  insertLast(ground,template)

}




// throttle , debounce 


// 이벤트를 내가 원하는 시점에 1번만 실행 | 원하는 시간에 맞춰 실행 





// 어려울 수 있음. 코드 이해 x / 활용 









// debounce(()=>{
//   console.log('실행!');
// },1000)