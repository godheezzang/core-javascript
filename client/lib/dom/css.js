function getCss(node,prop){

    if(typeof node === 'string') node = document.querySelector(node)

    if(!(prop in document.body.style)) throw new Error('getCss 함수의 두 번째 인수는 유효한 CSS 속성이 아닙니다.')


    return getComputedStyle(node)[prop]
}


function setCss(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
  
    if(!(prop in document.body.style)) throw new Error('setCss 함수의 두 번째 인수는 유효한 CSS 속성이 아닙니다.')
  
    if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');

    node.style[prop] = value;
}


const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)


// class

function addClass(node, className){

    if(typeof node === 'string') node = getNode(node);
    if(typeof className !== 'string') throw new TypeError('addClass함수의 두 번째 인수는 문자 타입이어야 합니다.')
    node.classList.add(className)
}

addClass('.first','second')

function removeClass(node, className){

    if(typeof node === 'string') node = getNode(node);

    if(!className) {
        node.className = '';
        return;
    }

    if(typeof className !== 'string') throw new TypeError('removeClass함수의 두 번째 인수는 문자 타입이어야 합니다.')

    node.classList.remove(className);
}

function toggleClass(node,className){
    if(typeof node === 'string') node = getNode(node)
    if(typeof className !== 'string') throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    node.classList.toggle(className)
  }