const numberBtn = document.querySelectorAll('.btn');
const currentNumber = document.getElementById('current-number');
const lastNumber = document.getElementById('last-number');
const numberAddition = document.querySelector('#plus');
const numberDivision = document.querySelector('#divide');
const numberMultiplication = document.querySelector('#multiply');
const numberMinus = document.querySelector('#minus');
const calculateNumber = document.querySelector('#calculate');
let lastResult=0;
numberBtn.forEach((button) => {
    button.addEventListener('click', ()=> {
        typeNumber(button.textContent);
        console.log(button.textContent);
    });
});

// numberAddition.addEventListener('click', ()=> {
//     if(currentNumber.textContent == '0') return;
//     const firstNum = currentNumber.textContent;
//     const secondNum = lastNumber.textContent;
//     const num = +firstNum + +secondNum;
//     lastNumber.textContent = num;
//     currentNumber.textContent = 0;
// })

calculateNumber.addEventListener('click', ()=>{
    if(currentNumber.textContent==0 || lastNumber.textContent==0)return;
    console.log(eval(currentNumber.textContent));
    currentNumber.textContent = +lastResult + +currentNumber.textContent;
    lastNumber.textContent = 0;
})

numberAddition.addEventListener('click', ()=> {
    if(lastNumber.textContent == '0'){
        lastNumber.textContent = currentNumber.textContent;
        lastNumber.textContent;
    }
    else lastNumber.textContent += '+'+currentNumber.textContent;
    const result = +currentNumber.textContent + +lastResult;
    lastResult = result;
    currentNumber.textContent = result;
})
numberMinus.addEventListener('click', ()=>{
    currentNumber.textContent+= '-';
})
numberMultiplication.addEventListener('click', ()=>{
    currentNumber.textContent+= '*';
})
numberDivision.addEventListener('click',()=>{
    currentNumber.textContent+= '/';
})

function typeNumber(e) {
    if(currentNumber.textContent == '0') currentNumber.textContent = e;
    else currentNumber.textContent += e;
    console.log(e);
}
