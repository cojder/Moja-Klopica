import React from "react";

const sum = 560;

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator-name">Kalkulator</div>
      <div className="calculator-body">
        <div className="calculator-body-top">
          <div>ime jela</div>
          <button className="button-close">X</button>
        </div>
        <div className="calculator-body-bottom">
          <div className="calculator-body-bottom-right">
            <button className="button-small">+</button>
            <div>2</div>
            <button className="button-small">-</button>
          </div>
          <div>cena</div>
        </div>
      </div>
      <div className="calculator-sum">
        Ukupno:
        <div>{sum}</div>
      </div>
    </div>
  );
};

export default Calculator;
