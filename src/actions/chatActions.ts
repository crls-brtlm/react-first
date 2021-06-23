import { TMessage, TUser } from "../reducers/chatReducer";
import {
  CHAT_CONNECT,
  CHAT_MESSAGE,
  CHAT_UPDATE_USERS,
} from "./chatActionTypes";

export const chatConnect = (user: TUser) => {
  return {
    type: CHAT_CONNECT,
    payload: {
      user: user,
    },
  };
};

export const chatUpdateUsers = (users: TUser[]) => {
  return {
    type: CHAT_UPDATE_USERS,
    payload: {
      users: users,
    },
  };
};

export const chatMessage = (message: TMessage[]) => {
  return {
    type: CHAT_MESSAGE,
    payload: {
      message,
    },
  };
};
