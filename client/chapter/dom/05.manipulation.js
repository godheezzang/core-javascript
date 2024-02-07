/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

const div = document.createElement('div'); // div인 객체를 만든 것
div.className = 'tiger'; // 태그에 클래스 이름 넣기
div.textContent = '멋쟁이 사자처럼'; // 태그에 텍스트 넣기


console.log(div); // <div class="tiger">멋쟁이 사자처럼</div>



/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
document.body.append(div);


// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)∏
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML

document.body.insertAdjacentHTML('beforeend','<div class="tiger">멋쟁이 호랑이처럼</div>')

const h1 = getNode('h1');

// <li class="list">영화보기</li>

const template = '<li class="list">영화보기</li>'

document.body.insertAdjacentHTML('beforeend',template)



// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입
/*
// insertLast() // BeforeEnd

function insertLast(node,text){

    if(typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('beforeend',text)
}

// insertBefore()
function insertBefore(node,text){

    if(typeof node === 'string') node = getNode(node);

    node.insertAdjacentHTML('beforebegin',text)
}

// insertFirst()
function insertFirst(node,text){
    if(typeof node === 'string') node = getNode(node);
  
    node.insertAdjacentHTML('afterbegin',text)
  }

// insertAfter()
function insertAfter(node,text){
  if(typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterend',text)
}
*/