const numberBtn = document.querySelectorAll('.btn');
const dot = document.querySelector('#dot');
const currentNumber = document.getElementById('current-number');
const lastNumber = document.getElementById('last-number');
const numberAddition = document.querySelector('#plus');
const numberDivision = document.querySelector('#divide');
const numberMultiplication = document.querySelector('#multiply');
const numberMinus = document.querySelector('#minus');
const numberDel = document.querySelector('#del');
const numberClear = document.querySelector('#clear');
const calculateNumber = document.querySelector('#calculate');
let lastResult=0;

numberBtn.forEach((button) => {
    button.addEventListener('click', ()=> {
        typeNumber(button.textContent);
    });
});

calculateNumber.addEventListener('click', ()=>{
    if(currentNumber.textContent==0 || lastNumber.textContent==0)return;
    lastNumber.textContent = eval(currentNumber.textContent);;
    console.log(eval(currentNumber.textContent));
    currentNumber.textContent = 0;
})

numberDel.addEventListener('click', ()=>{
    const del = currentNumber.textContent.slice(0, -1);
    currentNumber.textContent = del;
})

numberClear.addEventListener('click', ()=>{
    currentNumber.textContent = 0;
    lastNumber.textContent = 0;
    lastResult = 0;
})

numberAddition.addEventListener('click', ()=> {
    if(currentNumber.textContent=='') return;
    if(lastNumber.textContent == '0'){
        lastNumber.textContent = currentNumber.textContent;
        lastResult = currentNumber.textContent;
    }
    else {
        lastNumber.textContent += '+'+currentNumber.textContent;
        const result = +currentNumber.textContent + +lastResult;
        lastResult = result;
        currentNumber.textContent = result;
    }
})
numberMinus.addEventListener('click', ()=>{
    if(currentNumber.textContent=='') return;
    if(lastNumber.textContent == '0'){
        lastNumber.textContent = currentNumber.textContent;
        lastResult = currentNumber.textContent;
    }
    else {
        lastNumber.textContent += '-'+currentNumber.textContent;
        const result = +lastResult - +currentNumber.textContent;
        lastResult = result;
        currentNumber.textContent = result;
    }
})
numberMultiplication.addEventListener('click', ()=>{
    if(currentNumber.textContent=='') return;
    if(lastNumber.textContent == '0'){
        lastNumber.textContent = currentNumber.textContent;
        lastResult = currentNumber.textContent;
    }
    else {
        lastNumber.textContent += '*'+currentNumber.textContent;
        const result = +lastResult * +currentNumber.textContent;
        lastResult = result;
        currentNumber.textContent = result;
    }
})
numberDivision.addEventListener('click',()=>{
    if(currentNumber.textContent=='') return;
    if(lastNumber.textContent == '0'){
        lastNumber.textContent = currentNumber.textContent;
        lastResult = currentNumber.textContent;
    }
    else {
        lastNumber.textContent += '/'+currentNumber.textContent;
        const result = +lastResult / +currentNumber.textContent;
        lastResult = result;
        currentNumber.textContent = result;
    }
})

dot.addEventListener('click',()=>{
    if(currentNumber.textContent=='') return;
    else currentNumber.textContent += '.';
})

function typeNumber(e) {
    if(currentNumber.textContent == '0') currentNumber.textContent = e;
    else currentNumber.textContent += e;
}

function getKeyPress(e) {
    const btnPressed = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!btnPressed) return;
    switch(btnPressed.id){
        case 'del':
            btnPressed.classList.remove('delete');
            btnPressed.classList.add('btn-del');
            break;        
        case 'calculate':
            btnPressed.classList.remove('enter');
            btnPressed.classList.add('enter-active');
            break;
        case 'clear':
            btnPressed.classList.remove('clear');
            btnPressed.classList.add('clear-active');
            break;
        default:
            btnPressed.classList.remove('btn');
            btnPressed.classList.add('btn-active');

    }
    btnPressed.click();
}

function getKeyRelease(e) {
    const btnReleased = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!btnReleased) return;
    switch(btnReleased.id){
        case 'del':
            btnReleased.classList.remove('btn-del');
            btnReleased.classList.add('delete');
            break;
        case 'calculate':
            btnReleased.classList.remove('enter-active');
            btnReleased.classList.add('enter');
            break;
        case 'clear':
            btnReleased.classList.remove('clear-active');
            btnReleased.classList.add('clear');
            break;
        default:
            btnReleased.classList.remove('btn-active');
            btnReleased.classList.add('btn');
    }
}

window.addEventListener('keydown', getKeyPress);
window.addEventListener('keyup', getKeyRelease);