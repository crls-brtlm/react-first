import {
  CHAT_CONNECT,
  CHAT_MESSAGE,
  CHAT_UPDATE_USERS,
} from "../actions/chatActionTypes";

export type TUser = {
  id: string;
  name: string;
  status: "idle" | "writing";
};

export type TMessage = {
  id: string;
  content: string;
  sentOn: string;
  direction: "received" | "sent";
  author: {
    id: string;
    name: string;
  };
};

export type TChatState = {
  connectedUser: TUser | null;
  users: TUser[];
  messages: TMessage[];
};

export type TChatAction =
  | {
      type: typeof CHAT_CONNECT;
      payload: {
        user: TUser;
      };
    }
  | {
      type: typeof CHAT_UPDATE_USERS;
      payload: {
        users: TUser[];
      };
    }
  | {
      type: typeof CHAT_MESSAGE;
      payload: {
        message: TMessage;
      };
    };

const initialState: TChatState = {
  connectedUser: null,
  messages: [],
  users: [],
};

function chatReducer(
  state: TChatState = initialState,
  action: TChatAction
): TChatState {
  switch (action.type) {
    default:
      return state;
  }
}

export { chatReducer };
