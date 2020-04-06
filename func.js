//calculator object holding data to constract valid expression
const calculator ={
  displayValue:'0',
  firstOperand:null,
  waitingForSecondOperand:false,
  operator:null,
};

// function to display values of clicked buttons.
inputDigit = (digit)=>{
  const{displayValue} = calculator;
  //overwriting displayValue if current value is 0 otherwise append it 
  calculator.displayValue = displayValue ==='0'? digit : displayValue + digit;
}

//function to input decimal point
inputDecimal = (dot)=>{
  //if the displayValue does not contain a decimal point
  if(!calculator.displayValue.includes(dot)){
    //append the decimal point
    calculator.displayValue += dot;
  }
}

// function updateDisplay to display value on the calculator screen
updateDisplay=()=>{
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}
//call the function
updateDisplay();
// click event listener on the calculator keys.
const keys= document.querySelector('.calculator-keys');
keys.addEventListener('click',(event)=>{
  const{target} =event;
  //const target = event.target
  //if element clicked is not a button.
  if(!target.matches('button')){
    return;
  }
  if(target.classList.contains('operator')){
    console.log('operator',target.value);
    return;
  }

  if(target.classList.contains('decimal')){
    console.log('decimal',target.value);
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if(target.classList.contains('all-clear')){
    console.log('clear',target.value);
    return;
  }

  console.log('digit',target.value);

  inputDigit(target.value);
  updateDisplay();
});
