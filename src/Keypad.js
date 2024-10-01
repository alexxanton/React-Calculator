import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick }) {
  // Lista de botones de la calculadora
  const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '.',
    '', '0'
  ];

  let btnClass = ""

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        btn.length == 0 ? btnClass = "hide" : btnClass = "btn",
        <button className={btnClass} key={index} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
