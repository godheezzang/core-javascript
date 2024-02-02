/* -------------------------------------------------------------------------- */
/*                                 closure 동화                               */
/* -------------------------------------------------------------------------- */

function earth(){

    let water = true;

    let apple = {
        founder: 'Steve Jobs',
        ceo: 'Tim Cook',
        product: ['iPhone', 'macbook', 'macStudio', 'iMac'],
    }

    return function(value){
        water = value
        // return apple
    }

}


const UFO = earth();


UFO(0);





/* -------------------------------------------------------------------------- */
/*                                     ---                                    */
/* -------------------------------------------------------------------------- */


// 고동현: 도대체 어디에 쓰는 건가요?
const first = document.querySelector('.first');


//함수가 알아서 실행됨


const handleClick=(()=>{

    let isClicked = false;

    return function(){

        if(!isClicked){
            document.body.style.background = 'orange'
        }else{
            document.body.style.background = 'white'
        }
    
        isClicked = !isClicked;
    }
})()


first.addEventListener('click',handleClick)



function useState(initValue){

    let value = initValue;

    function read(){
        return value;
    }

    function write(newValue){
        value = newValue;
    }

    return [read,write];
}


const [state,setState] = useState(111);

state() // getter
setState(3333)  // setter
















