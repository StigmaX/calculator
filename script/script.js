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
        console.log(button.textContent);
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
    console.log(e);
}

function getKeyPress(e) {
    const btnPressed = document.querySelector(`button[data-key="${e.keyCode}"]`);
    console.log(btnPressed);
    btnPressed.click();
}

window.addEventListener('keydown', getKeyPress);