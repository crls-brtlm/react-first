import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  activateAutoIncrementCounter,
  deactivateAutoIncrementCounter,
  decrementCounter,
  incrementCounter,
} from "../../actions/counterActions";
import { TRootState } from "../../reducers";
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

interface ICounterProps {}

const Counter = (props: ICounterProps) => {
  const counterValue = useSelector(
    (state: TRootState) => state.counter.counterValue
  );
  const autoIncrement = useSelector(
    (state: TRootState) => state.counter.autoIncrement
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const toggleAutoIncrement = () => {
    if (autoIncrement) {
      dispatch(deactivateAutoIncrementCounter());
    } else {
      dispatch(activateAutoIncrementCounter());
    }
  };

  return (
    <StyledCounter>
      <StyledCounterLabel>Contador</StyledCounterLabel>
      <StyledCounterActions>
        <StyledCounterDecButton>
          <Button
            onClick={handleDecrement}
            disabled={counterValue < 1}
            variant="outlined"
            color="primary"
          >
            Decrementar
          </Button>
        </StyledCounterDecButton>
        <StyledCounterValue data-testid="counter-value">
          {counterValue}
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
          {autoIncrement
            ? "Desactivar auto-incremento"
            : "Activar auto-incremento"}
        </Button>
      </StyledCounterBottomActions>
    </StyledCounter>
  );
};

export default Counter;
