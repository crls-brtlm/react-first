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
  direction: "received" | "sent" | "event";
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

export type TChatActionConnect = {
  type: typeof CHAT_CONNECT;
  payload: {
    user: TUser;
  };
};

export type TChatActionUpdateUsers = {
  type: typeof CHAT_UPDATE_USERS;
  payload: {
    users: TUser[];
  };
};

export type TChatActionMessage = {
  type: typeof CHAT_MESSAGE;
  payload: {
    message: TMessage;
  };
};
export type TChatAction =
  | TChatActionConnect
  | TChatActionUpdateUsers
  | TChatActionMessage;

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
    case CHAT_CONNECT:
      return {
        ...state,
        connectedUser: action.payload.user,
      };
    case CHAT_UPDATE_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case CHAT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    default:
      return state;
  }
}

export { chatReducer };
