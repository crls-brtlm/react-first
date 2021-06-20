import React, { useState } from "react";
import Button from "../Button";
import "./Counter.css";

interface ICounterProps {
  initialValue?: number;
}

const Counter = (props: ICounterProps) => {
  const { initialValue } = props;
  const [state, setState] = useState({ value: initialValue ?? 0 });

  const handleIncrement = () => {
    setState((prevState) => ({ value: prevState.value + 1 }));
  };

  const handleDecrement = () => {
    setState((prevState) => ({ value: prevState.value - 1 }));
  };

  return (
    <div className="Counter">
      <div className="Counter__label">Contador</div>
      <div className="Counter__actions">
        <div className="Counter__dec-button-wrapper">
          <Button onClick={handleDecrement} disabled={state.value < 1}>
            Decrementar
          </Button>
        </div>
        <div className="Counter__value" data-testid="counter-value">
          {state.value}
        </div>
        <div className="Counter__add-button-wrapper">
          <Button onClick={handleIncrement}>Incrementar</Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
