//calculator object holding data to constract valid expression
const calculator ={
  displayValue:'0',
  firstOperand:null,
  waitingForSecondOperand:false,
  operator:null,
};

// function to display values of clicked buttons.
inputDigit = (digit)=>{
  const{displayValue,waitingForSecondOperand} = calculator;
  if(waitingForSecondOperand===true){
    calculator.displayValue=digit;
    calculator.waitingForSecondOperand = false;
  }else{
         //overwriting displayValue if current value is 0 otherwise append it 
  calculator.displayValue = displayValue ==='0'? digit : displayValue + digit;
  }
  
console.log(calculator);
}

//function to input decimal point
inputDecimal = (dot)=>{
  if(calculator.waitingForSecondOperand===true) return;
  //if the displayValue does not contain a decimal point
  if(!calculator.displayValue.includes(dot)){
    //append the decimal point
    calculator.displayValue += dot;
  }
}

//function to handle operators
handleOperator=(nextOperator)=>{
  const{firstOperand,displayValue,operator} = calculator
  const inputValue = parseFloat(displayValue);
  if(firstOperand==null){
    calculator.firstOperand = inputValue;
  }else if (operator){
      const result = performCalculation[operator](firstOperand,inputValue);
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
  }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

//object to perform calculation
const performCalculation = {
  '/': (firstOperand,secondOperand) => firstOperand / secondOperand,
  '*':(firstOperand,secondOperand) => firstOperand * secondOperand,
  '+':(firstOperand,secondOperand) => firstOperand + secondOperand,
  '-':(firstOperand,secondOperand) => firstOperand - secondOperand,
  '=':(firstOperand,secondOperand) => secondOperand
};

//function to reset the calculator back to 0
resetCalculator=()=>{
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand =false;
  calculator.operator = null;
  console.log(calculator);
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
    handleOperator(target.value);
    updateDisplay();
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
    resetCalculator();
    updateDisplay();
    return;
  }

  console.log('digit',target.value);

  inputDigit(target.value);
  updateDisplay();
});
