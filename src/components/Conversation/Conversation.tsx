import { IconButton, InputBase } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TMessage, TUser } from "../../reducers/chatReducer";
import ConversationMessage from "./ConversationMessage";
import SendIcon from "@material-ui/icons/Send";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMessageWrapper = styled.div``;

const StyledConversationData = styled.div`
  background-color: #005e54;
  color: #fff;
  height: 3rem;
  padding: 0.25rem 1rem 0.25rem 4rem;
  text-align: left;
`;

const StyledConversationDataNumUsers = styled(Typography)``;

const StyledConversationDataUsers = styled(Typography)``;

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

const StyledNoResultsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledNoResults = styled.div``;

const StyledNoResultsText = styled(Typography)`
  line-height: 1.35;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: #004b7b;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 1rem 0.25rem 4rem;
`;

interface IConversationProps {
  messages: TMessage[];
  users: TUser[];
  onSendMessage: (message: string) => void;
}

const Conversation = (props: IConversationProps) => {
  const { messages, users, onSendMessage } = props;
  const bottomRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    hasScrolledAtStart: false,
    message: "",
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

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSendMessage(state.message);
    setState((prevState) => ({
      ...prevState,
      message: "",
    }));
  };

  let tempUserNames = "";
  users.forEach((user) => (tempUserNames = tempUserNames + user.name + ", "));
  const regex = /,\s$/g;
  const userNames = tempUserNames.replace(regex, "");

  return (
    <StyledWrapper>
      {!!(users.length > 0) && (
        <StyledConversationData>
          <StyledConversationDataNumUsers>
            Usuarios: {users.length}
          </StyledConversationDataNumUsers>
          <StyledConversationDataUsers>{userNames}</StyledConversationDataUsers>
        </StyledConversationData>
      )}
      <StyledConversationContainer>
        {messages && !!(messages.length === 0) && (
          <StyledNoResultsWrapper>
            <StyledNoResults>
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
      <form onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <InputBase
            value={state.message}
            onChange={handleMessageChange}
            placeholder="Escribe aqui un mensaje"
            fullWidth
          />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </StyledInputWrapper>
      </form>
    </StyledWrapper>
  );
};

export default Conversation;
