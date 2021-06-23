import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { TMessage } from "../../reducers/chatReducer";

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

  return (
    <StyledMessageWrapper>
      {message.direction === "received" ? (
        <StyledReceivedMessage>
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
