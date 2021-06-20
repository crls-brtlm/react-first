import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledCounter = styled.div`
  padding: 0.5rem;
  background-color: #e7e7e7;
  color: #333;
`;

const StyledCounterLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const StyledCounterActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
`;

const StyledCounterValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const StyledCounterIncButton = styled.div`
  margin-left: 1rem;
`;

const StyledCounterDecButton = styled.div`
  margin-right: 1rem;
`;

const StyledCounterBottomActions = styled.div``;

interface ICounterProps {
  initialValue?: number;
}

const Counter = (props: ICounterProps) => {
  const { initialValue } = props;
  const [state, setState] = useState({
    value: initialValue ?? 0,
    autoIncrement: false,
  });
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (state.autoIncrement) {
      intervalRef.current = setInterval(() => {
        setState((prevState) => ({ ...prevState, value: prevState.value + 1 }));
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [state.autoIncrement]);

  const handleIncrement = () => {
    setState((prevState) => ({ ...prevState, value: prevState.value + 1 }));
  };

  const handleDecrement = () => {
    setState((prevState) => ({ ...prevState, value: prevState.value - 1 }));
  };

  const toggleAutoIncrement = () => {
    setState((prevState) => ({
      ...prevState,
      autoIncrement: !state.autoIncrement,
    }));
  };

  return (
    <StyledCounter>
      <StyledCounterLabel>Contador</StyledCounterLabel>
      <StyledCounterActions>
        <StyledCounterDecButton>
          <Button
            onClick={handleDecrement}
            disabled={state.value < 1}
            variant="outlined"
            color="primary"
          >
            Decrementar
          </Button>
        </StyledCounterDecButton>
        <StyledCounterValue data-testid="counter-value">
          {state.value}
        </StyledCounterValue>
        <StyledCounterIncButton>
          <Button onClick={handleIncrement} variant="outlined" color="primary">
            Incrementar
          </Button>
        </StyledCounterIncButton>
      </StyledCounterActions>
      <StyledCounterBottomActions>
        <Button
          onClick={toggleAutoIncrement}
          variant="contained"
          color="secondary"
        >
          {state.autoIncrement
            ? "Desactivar auto-incremento"
            : "Activar auto-incremento"}
        </Button>
      </StyledCounterBottomActions>
    </StyledCounter>
  );
};

export default Counter;
