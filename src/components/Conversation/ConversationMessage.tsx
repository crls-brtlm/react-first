import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useMemo } from "react";
import styled from "styled-components";
import { TMessage } from "../../reducers/chatReducer";

const COLORS = [
  "#35cd96",
  "#6bcbef",
  "#e542a3",
  "#91ab01",
  "#ffa97a",
  "#1f7aec",
  "#dfb610",
  "#029d00",
  "#8b7add",
  "#fe7c7f",
  "#ba33dc",
  "#59d368",
  "#b04632",
  "#fd85d4",
  "#8393ca",
  "#ff8f2c",
  "#3bdec3",
  "#b4876e",
  "#c90379",
  "#ef4b4f",
];

const cyrb53 = function (str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const StyledMessageWrapper = styled.div`
  clear: both;
`;

const StyledSentMessage = styled(Box)`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: #e1ffc7;
  border-radius: 0.25rem;
  max-width: 85%;
  float: right;
  position: relative;

  .CMuiMarkdown p {
    margin: 0;
  }

  &:after {
    border-width: 0 0 0.5rem 0.5rem;
    border-color: transparent transparent transparent #e1ffc7;
    top: 0;
    right: -0.5rem;
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const StyledReceivedMessage = styled(Box)`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: #fff;
  max-width: 85%;
  border-radius: 0.25rem;
  float: left;
  position: relative;

  .CMuiMarkdown p {
    margin: 0;
  }

  &:after {
    border-width: 0 0.5rem 0.5rem 0;
    border-color: transparent #fff transparent transparent;
    top: 0;
    left: -0.5rem;
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const StyledEventMessage = styled(Box)`
  background-color: rgba(225, 245, 254, 0.92);
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  width: fit-content;
  font-size: 0.875rem;
`;

const StyledMessageAuthor = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.35;
  text-align: left;
  margin-bottom: 0.125rem;
`;

const StyledMessageText = styled(Typography)`
  font-size: 1rem;
  line-height: 1.35;
`;

const StyledMetadata = styled(Box)`
  display: inline-block;
  float: right;
  position: relative;
  bottom: -0.25rem;
  padding: 0 0 0 1rem;
`;

const StyledInnerMetadata = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const StyledMessageTime = styled(Typography)`
  font-size: 0.75rem;
  color: #666;
`;

interface IConversationMessageProps {
  message: TMessage;
}

const ConversationMessage = (props: IConversationMessageProps) => {
  const { message } = props;

  const hoursAgo = moment().diff(moment(message.sentOn), "hours");
  const authorColor = useMemo(() => {
    const hash = cyrb53(message.author.name, 0);
    return COLORS[hash % 20];
  }, [message.author.name]);

  return (
    <StyledMessageWrapper>
      {message.direction === "received" ? (
        <StyledReceivedMessage>
          <StyledMessageAuthor style={{ color: authorColor }}>
            {message.author.name}
          </StyledMessageAuthor>
          <StyledMessageText>{message.content}</StyledMessageText>
          <StyledMetadata>
            {hoursAgo > 24 ? (
              <StyledMessageTime>
                {moment(message.sentOn).format("DD/MM/YYYY - HH:mm")}
              </StyledMessageTime>
            ) : (
              <StyledMessageTime>
                {moment(message.sentOn).format("HH:mm")}
              </StyledMessageTime>
            )}
          </StyledMetadata>
        </StyledReceivedMessage>
      ) : message.direction === "event" ? (
        <StyledEventMessage>
          {message.content === "user_join" ? (
            <span>{message.author.name} se ha unido a la conversación</span>
          ) : message.content === "user_unjoin" ? (
            <span>{message.author.name} ha abandonado la conversación</span>
          ) : (
            <span>unknown event</span>
          )}
        </StyledEventMessage>
      ) : (
        <StyledSentMessage>
          <StyledMessageText>{message.content}</StyledMessageText>
          <StyledMetadata>
            <StyledInnerMetadata>
              {hoursAgo > 24 ? (
                <StyledMessageTime>
                  {moment(message.sentOn).format("DD/MM/YYYY - HH:mm")}
                </StyledMessageTime>
              ) : (
                <StyledMessageTime>
                  {moment(message.sentOn).format("HH:mm")}
                </StyledMessageTime>
              )}
            </StyledInnerMetadata>
          </StyledMetadata>
        </StyledSentMessage>
      )}
    </StyledMessageWrapper>
  );
};

export default ConversationMessage;
