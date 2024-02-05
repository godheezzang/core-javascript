/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling




/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// h1과 h2 안에 first 라는 클래스가 중복될 때
/*
const h2 = document.querySelector('h2');
const h2InFirst = h2.querySelector('.first');
*/
// 위처럼 사용하면 된다.


const first = getNode('.first');
const spanList = getNodes('span');


/* 문서 대상 확인 */
// - matches
// - contains


first.matches('span'); // target에 selector가 있어?
console.log(first.matches('span')); // true


// h1 태그 안에 .second 라는 자식이 있어?
getNode('h1').contains(getNode('.second'));
console.log(getNode('h1').contains(getNode('.second'))); // true