import { getNode } from './getNode.js'


export default function clearContents(node){
    if(typeof node === 'string') node = getNode(node);

    if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
        node.value = ''
        return;
    }

    node.textContent = ''
}

// export default clearContents; // 함수 앞에 붙여 쓸 수도 있고 이렇게 밑에 따로 쓸 수도 있음