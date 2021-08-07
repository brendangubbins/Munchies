import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

// main container for chat section
const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* ROOM COMPONENTS */
// Room number heading
const RoomNumber = styled.h3`
  font-family: 'Rubik'
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

// container for room input and room button
const EnterRoomContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const RoomButton = styled.button`
  padding: 0.5rem;
  background: #ffa500;
  color: black;
  font-family: 'Rubik';

  &:hover {
    background-color: #ffc100;
  }
`;

const RoomInput = styled.input`
  border: 2px lightgray solid;
  padding: 0 1rem;
`;

/* CHAT COMPONENTS */
// main container for chat room
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f6f6f6;
  border: 1px solid #fffafa;
  border-radius: 25px;
  height: 800px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

// container for all messages
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// user's message container
const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 0.6rem;
`;

// guest's message container
const GuestMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.2rem;
`;

// container for both name and message
const NameAndMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// single message component
const Message = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  border-radius: 20px;
  max-width: 200px;
  background: #ffa500;
  padding: 0.2rem 2rem;
  margin: 0.3rem 0;
  margin-top: 0;
`;

// user/guest name
const Name = styled.p`
  font-weight: bolder;
  font-family: rubik;
  text-align: left;
`;

/* BOTTOM CHAT ROOM SECTION */
// Form component for sending messages
const MessageForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  border-top: solid 1px #c4c4c4;
  padding: 0.5rem;
  padding-top: 1.5rem;
`;

// input component for entering messages
const MessageInput = styled.input`
  padding: 1rem;
  margin-right: 1rem;
  width: 80%;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

// button to submit message to backend
const SendButton = styled.button`
  background: #ffa500;
  padding: 0.7rem;
  border-radius: 100px;
  font-weight: bold;

  &:hover {
    background-color: #ffc108;
  }
`;

const Chat = () => {
  return (
    <OuterBox>
      <RoomNumber>Room Code: Test</RoomNumber>
      <EnterRoomContainer>
        <RoomInput placeholder="Room code" />
        <RoomButton>Enter</RoomButton>
      </EnterRoomContainer>
      <ChatContainer>
        <MessagesContainer>
          <UserMessage>
            <NameAndMsgContainer>
              <Name>Test</Name>
              <Message>Hi</Message>
            </NameAndMsgContainer>
          </UserMessage>
          <UserMessage>
            <NameAndMsgContainer>
              <Name>Test</Name>
              <Message>Hi</Message>
            </NameAndMsgContainer>
          </UserMessage>
          <GuestMessage>
            <NameAndMsgContainer>
              <Name>Test</Name>
              <Message>Hi</Message>
            </NameAndMsgContainer>
          </GuestMessage>
          <GuestMessage>
            <NameAndMsgContainer>
              <Name>Test</Name>
              <Message>Hello</Message>
            </NameAndMsgContainer>
          </GuestMessage>
        </MessagesContainer>
        <MessageForm>
          <MessageInput placeholder="Send a message" />
          <SendButton type="submit">Submit</SendButton>
        </MessageForm>
      </ChatContainer>
    </OuterBox>
  );
};

export default Chat;
