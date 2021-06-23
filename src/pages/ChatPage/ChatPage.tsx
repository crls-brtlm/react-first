import React, { useEffect } from "react";
import styled from "styled-components";
import Conversation from "../../components/Conversation";
import socketIOClient from "socket.io-client";
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
import { chatConnect } from "../../actions/chatActions";

const ENDPOINT = "http://localhost:4001";

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

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("users_connected", (data) => {
      console.log("Data: ", data);
    });

    console.log("Emmiting");
    socket.emit("user_connect", {
      id: "3239293",
      name: "Carlos",
      status: "idle",
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const handleConnect = () => {
    dispatch(
      chatConnect({
        id: "223332",
        name: state.name,
        status: "idle",
      })
    );
  };

  return (
    <StyledPage>
      <Conversation messages={messages} />
      <StyledDialog open={!connectedUser}>
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
          <Button variant="contained" color="primary" onClick={handleConnect}>
            Aceptar
          </Button>
        </DialogActions>
      </StyledDialog>
    </StyledPage>
  );
};

export default ChatPage;
