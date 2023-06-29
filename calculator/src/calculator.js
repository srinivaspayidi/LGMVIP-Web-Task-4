import React, { useState } from 'react';
import './calculator.css';
import * as math from 'mathjs';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = math.evaluate(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="display">{display}</div>
      <div className="keypad">
        <div className="row">
          <button className="number" onClick={() => handleButtonClick('7')}>7</button>
          <button className="number" onClick={() => handleButtonClick('8')}>8</button>
          <button className="number" onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonClick('4')}>4</button>
          <button className="number" onClick={() => handleButtonClick('5')}>5</button>
          <button className="number" onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonClick('1')}>1</button>
          <button className="number" onClick={() => handleButtonClick('2')}>2</button>
          <button className="number" onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleButtonClick('0')}>0</button>
          <button className="number" onClick={() => handleButtonClick('.')}>.</button>
          <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="clear" onClick={() => handleButtonClick('C')}>C</button>
          <button className="operator" onClick={() => handleButtonClick('DEL')}>DEL</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;