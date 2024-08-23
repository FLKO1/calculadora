import React,{useState} from "react";
import Display from "./Display";
import Teclas from "./Teclas";

const Calculator=()=>{
    const[displayValue, setDisplayValue] = useState('0') ;
    const[operator, setOperator]= useState(null);
    const[firstValue, setFirstValue]= useState(null);
    const[waitingForSecondValue, setwaitingForSecondValue]= useState(false);

    const handleButtonClick=(buttonName) =>{
        if(buttonName === 'C'){
            setDisplayValue('0');
            setOperator(null);
            setFirstValue(null);
            setwaitingForSecondValue(false);
        }else if(['+', '-', '*', '/'].includes(buttonName)){
            setOperator(buttonName);
            setFirstValue(displayValue);
            setwaitingForSecondValue(true);
        }else if(buttonName === '='){
            const secondValue = displayValue;
            const result =  calculate(firstValue, secondValue, operator);
            setDisplayValue(String(result));
            setOperator(null);
            setFirstValue(null);
            setwaitingForSecondValue(false);
        }else {
            setDisplayValue((prevValue)=>
                waitingForSecondValue ? buttonName:prevValue === '0' ? buttonName: prevValue +buttonName          
            );
            if (waitingForSecondValue) setwaitingForSecondValue(false);
        }
    }

const calculate= (firstValue, secondValue, operator)=>{
    const a= parseFloat(firstValue);
    const b= parseFloat(secondValue);
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b!==0 ? a / b: 'ERROR';
            default:
            return 0;            
    }    
}

return (
    <div className="calculator">
        <Display value={displayValue}/>
        <Teclas onButtonClick={handleButtonClick}/>
    </div>
)
};
export default Calculator;