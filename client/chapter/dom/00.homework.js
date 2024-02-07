
// querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');


// eventListener

function handleCheckId(){
    // console.log(this.value);

    if(this.value === 'hello'){
        console.log('success');
        idField.classList.remove('is-active');
    }else{
        console.log('error!');
        idField.classList.add('is-active');
    }
}

idField.addEventListener('input',handleCheckId);



function handleSubmit(e){

    e.preventDefault(); // 태그의 기본 동작 차단

    console.log('제출!');

}

submit.addEventListener('click',handleSubmit)

// classList




// preventDefault 기본 동작 차단








