import React, { useEffect } from "react";
import styled from "styled-components";
import Conversation from "../../components/Conversation";
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../../reducers";
import {
  DialogTitle,
  Button,
  DialogContent,
  Dialog,
  TextField,
} from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { useState } from "react";
import { chatConnect, chatMessage } from "../../actions/chatActions";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const StyledPage = styled.div`
  background-color: #e4e7e9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledDialog = styled(Dialog)``;

interface IChatPageProps {}

const ChatPage = (props: IChatPageProps) => {
  const connectedUser = useSelector(
    (state: TRootState) => state.chat.connectedUser
  );
  const users = useSelector((state: TRootState) => state.chat.users);
  const messages = useSelector((state: TRootState) => state.chat.messages);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleConnect = (e: any) => {
    e.preventDefault();
    dispatch(
      chatConnect({
        id: uuidv4(),
        name: state.name,
        status: "idle",
      })
    );
  };

  const handleSendMessage = (message: string) => {
    if (connectedUser) {
      dispatch(
        chatMessage({
          id: uuidv4(),
          content: message,
          sentOn: moment().format(),
          direction: "sent",
          author: {
            id: connectedUser.id,
            name: connectedUser.name,
          },
        })
      );
    }
  };

  return (
    <StyledPage>
      <Conversation
        messages={messages}
        users={users}
        onSendMessage={handleSendMessage}
      />
      <StyledDialog open={!connectedUser}>
        <form noValidate onSubmit={handleConnect}>
          <DialogTitle>Conectar</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              value={state.name}
              type="text"
              onChange={handleNameChange}
              label="Nombre"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Aceptar
            </Button>
          </DialogActions>
        </form>
      </StyledDialog>
    </StyledPage>
  );
};

export default ChatPage;
