// first 이름을 가진 노드를 찾는 함수 만들기
function getNode(node,context = document){
    
    if(typeof node !== 'string'){
        throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.')
    }

    if(context.nodeType !== document.DOCUMENT_NODE){
        context = document.querySelector(context);
    }

    return context.querySelector(node);
}

// span 태그를 모두 찾기

function getNodes(node,context = document){
    
    if(typeof node !== 'string'){
        throw new Error('getNodes 함수의 인수는 문자 타입이어야 합니다.')
    }

    if(context.nodeType !== document.DOCUMENT_NODE){
        context = document.querySelector(context);
    }

    return document.querySelectorAll(node)
}