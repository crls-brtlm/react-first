import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { CHAT_CONNECT, CHAT_MESSAGE } from "../actions/chatActionTypes";
import socketIOClient, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { TChatActionConnect, TMessage, TUser } from "../reducers/chatReducer";
import { chatMessage, chatUpdateUsers } from "../actions/chatActions";
import { EventChannel, eventChannel } from "redux-saga";

const ENDPOINT = process.env.REACT_APP_CHAT_SERVER as string;

function createSocketConnection(url: string) {
  return socketIOClient(url);
}

function createSocketChannel(
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  userId: string,
  userName: string
) {
  return eventChannel((emit) => {
    const connectedUsersEventHandler = (event: any) => {
      emit(event);
    };
    socket.on("users_connected", connectedUsersEventHandler);

    const messageEventHandler = (event: any) => {
      emit(event);
    };
    socket.on("message", messageEventHandler);

    socket.emit("user_connect", {
      id: userId,
      name: userName,
      status: "idle",
    });

    const unsubscribe = () => {
      socket.off("users_connected", connectedUsersEventHandler);
      socket.off("message", messageEventHandler);
    };

    return unsubscribe;
  });
}

export type TPayload =
  | {
      type: "users_connected";
      users: TUser[];
    }
  | {
      type: "message";
      message: TMessage;
    };

function* watchSocketChannel(action: TChatActionConnect) {
  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = yield call(
    createSocketConnection,
    ENDPOINT
  );
  const writeSaga: unknown = yield fork(writeSocket, socket);
  const socketChannel: EventChannel<unknown> = yield call(
    createSocketChannel,
    socket,
    action.payload.user.id,
    action.payload.user.name
  );

  while (true) {
    try {
      const payload: TPayload = yield take(socketChannel);

      if (payload.type === "users_connected") {
        yield put(chatUpdateUsers(payload.users));
      }
      if (payload.type === "message") {
        yield put(
          chatMessage({
            id: payload.message.id,
            author: payload.message.author,
            content: payload.message.content,
            direction:
              payload.message.direction === "sent"
                ? "received"
                : payload.message.direction,
            sentOn: payload.message.sentOn,
          })
        );
      }
    } catch (err) {
      console.log("Socket error: ", err);
    }
  }
}

function* writeSocket(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
  while (true) {
    const { payload } = yield take(CHAT_MESSAGE);
    if (payload.message.direction === "sent") {
      socket.emit("message", payload);
    }
  }
}

export function* chatSagas() {
  yield takeEvery(CHAT_CONNECT, watchSocketChannel);
}
