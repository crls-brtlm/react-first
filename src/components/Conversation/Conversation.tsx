import { Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TMessage } from "../../reducers/chatReducer";
import ConversationMessage from "./ConversationMessage";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMessageWrapper = styled.div``;

const StyledConversationData = styled.div`
  background-color: #ededed;
  height: 4rem;
  padding: 0.5rem 1rem;
`;

const StyledConversationContainerWrapper = styled.div``;

const StyledConversationContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #e5ddd5;
  padding: 0 1rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 72, 120, 0.25);
    width: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const StyledEmployeeCrmName = styled(Typography)``;

const StyledEmployeeFullName = styled(Typography)``;

const StyledNoResultsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledNoResults = styled.div``;

const StyledNoResultsImage = styled.img`
  text-align: center;
  margin: 0 auto;
  display: block;
`;

const StyledNoResultsText = styled(Typography)`
  line-height: 1.35;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: #004b7b;
`;

interface IConversationProps {
  employee?: {
    id: string;
    crmName: string;
    fullName: string;
  };
  messages: TMessage[];
}

const Conversation = (props: IConversationProps) => {
  const { messages } = props;
  const bottomRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    hasScrolledAtStart: false,
  });

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: state.hasScrolledAtStart ? "smooth" : "auto",
      });
      if (state.hasScrolledAtStart) {
        setState((prevState) => ({
          ...prevState,
          hasScrolledAtStart: true,
        }));
      }
    }
  }, [state.hasScrolledAtStart, messages]);

  return (
    <StyledWrapper>
      {/* {employee && (
        <StyledConversationData>
          <StyledEmployeeCrmName>{employee.crmName}</StyledEmployeeCrmName>
          <StyledEmployeeFullName>{employee.fullName}</StyledEmployeeFullName>
        </StyledConversationData>
      )} */}
      <StyledConversationContainer>
        {messages && !!(messages.length === 0) && (
          <StyledNoResultsWrapper>
            <StyledNoResults>
              {/* <StyledNoResultsImage src={MessagesPng} /> */}
              <StyledNoResultsText>No hay mensajes</StyledNoResultsText>
            </StyledNoResults>
          </StyledNoResultsWrapper>
        )}
        {messages &&
          !!(messages.length > 0) &&
          messages.map((message) => (
            <StyledMessageWrapper key={message.id}>
              <ConversationMessage message={message} />
            </StyledMessageWrapper>
          ))}
        <div ref={bottomRef} />
      </StyledConversationContainer>
    </StyledWrapper>
  );
};

export default Conversation;
