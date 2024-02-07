function bindEvent(node,type,handler){

    if(typeof node === 'string') node = getNode(node);

    node.addEventListener(type,handler);

    return () => node.removeEventListener(type,handler); // 안쪽 함수가 바깥으로 함수를 내보내는 중 (클로저)

}