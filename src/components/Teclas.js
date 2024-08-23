import React from "react";
import Button from './Button' 

const Teclas =({onButtonClick}) =>{
    const buttons = [
        'C', '/', '*', '-',
        '7', '8', '9', '+',
        '4', '5', '6', '=',
        '1', '2', '3', '0',
    ];
    return(
        <div className="button-panel">
           {buttons.map((button)=>(
            <Button key={button} name={button} onClick={onButtonClick}/> 
           ))}
        </div>
    );
};

export default Teclas;