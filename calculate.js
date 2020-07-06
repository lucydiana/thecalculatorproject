let runningtotal = 0;
let buffer = "0";
let previousOperator = '';

 const screen = document.querySelector('.screen');

function buttonClick(value) {
    if(isNaN(value)) {
        //this is not a number.
        handleSymbol(value);
    } else {
        //this is a number.
      handleNumber(value);
}
screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch (value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
         break;
         case '=':
             if (previousOperator === null) {
                 //need two numbers to do math.
                 return;
             }
             flushOperation(parseInt(buffer));
             previousOperator = null;
             buffer = runningtotal;
             runningtotal = 0;
             break;
             case '←':
                 if (buffer.length === 1) {
                     buffer = '0';
                 } else {
                     buffer = buffer.substring(0, buffer.length - 1);
                 }
                 break;
         case '+':
             case '-':
                 case '×':
                     case '÷':
            handleMath(symbol);
             break;
}
}
function handleMath(symbol) {
    if (buffer === '0') {
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningtotal === 0) {
        runningtotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = 0;
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningtotal += intBuffer;
    } else if (previousOperator === '-') {
        runningtotal -= intBuffer;
    } else if (previousOperator === '&times;') {
        runningtotal *= intBuffer;
    } else {
        runningtotal /= intBuffer;
    }
}
function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
switch (value) {
    case 'C':
        buffer = '0';
        runningTotal = 0;
        
        break;
}
   
}
console.log('buffer', buffer);

function init () {
 document.querySelector('.calc-button')
 .addEventListener('click', function(event) {
     buttonClick(event.target.innerText);
 });
}
init();
