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

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
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
// #ffa500
const Message = styled.div`
  display: inline-block;
  font-size: 0.9rem;
  border-radius: 20px;
  max-width: 200px;
  background: ${(props) => (props.guest ? '#404040' : '#ffa500')};
  color: ${(props) => (props.guest ? 'white' : 'black')};
  padding: 0.2rem 2rem;
  margin: 0.3rem 0;
  margin-top: 0;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.2rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 1rem;
    max-width: 150px;
  }
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

const Chat = ({ socket }) => {
  const username = JSON.parse(
    window.sessionStorage.getItem('loggedMunchiesUser')
  ).username;

  // State for storing every message sent during application use
  const [messages, setMessages] = useState([]);

  // State for current message being typed or to be sent
  const [message, setMessage] = useState('');

  // State for storing active room number
  const [room, setRoom] = useState(username);

  // State for storing current user
  const [name, setName] = useState(username);

  // State for storing second user in the room
  const [guestName, setGuestName] = useState('');

  /* 
  useEffect hook to store incoming messages into state
  and differentiate between user and guest messages
  */
  useEffect(() => {
    socket.on('receive-message', (data) => {
      const messageObj = {
        message: data.message,
        userGuest: true,
      };

      if (data.username !== username) {
        setGuestName(data.username);
        setMessages(messages.concat(messageObj));
      }
    });

    return () => {
      socket.off('receive-message');
    };
  }, [messages]);

  socket.on('connect', () => {
    console.log(`Connecting ${socket.id}`);
  });

  // function to control message input state changes
  const handleMessageText = (e) => {
    // console.log(e.target.value)
    setMessage(e.target.value);
  };

  // function to handle a user joining a room
  const handleRoomJoin = () => {
    console.log('Room: ', room);
    socket.emit('join-room', room, (message) => {
      console.log(message);
    });
  };

  // function to control room input state changes
  const handleRoomText = (e) => {
    // console.log(e.target.value)
    setRoom(e.target.value);
  };

  // function to handle sending messages with socket.io
  const handleSendMessage = (e) => {
    e.preventDefault();

    const messageObj = {
      message: message,
      userGuest: false,
    };
    setMessages(messages.concat(messageObj));

    socket.emit('send-message', message, room, username);
    setMessage('');
  };

  return (
    <OuterBox>
      <RoomNumber>Room Code: {name}</RoomNumber>
      <EnterRoomContainer>
        <RoomInput
          placeholder="Room code"
          value={room}
          onChange={handleRoomText}
        />
        <RoomButton onClick={handleRoomJoin}>Enter</RoomButton>
      </EnterRoomContainer>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((msg, index) => {
            /* dynamically render guest messages */
            if (msg.userGuest) {
              return (
                <GuestMessage guest={msg.userGuest} key={index}>
                  <NameAndMsgContainer>
                    <Name>{guestName}</Name>
                    <Message guest={msg.userGuest}>{msg.message}</Message>
                  </NameAndMsgContainer>
                </GuestMessage>
              );
            }

            /* dynamically render user messages */
            return (
              <UserMessage guest={msg.userGuest} key={index}>
                <NameAndMsgContainer>
                  <Name>{name}</Name>
                  <Message guest={msg.userGuest}>{msg.message}</Message>
                </NameAndMsgContainer>
              </UserMessage>
            );
          })}
        </MessagesContainer>
        <MessageForm>
          <MessageInput
            placeholder="Send a message"
            value={message}
            onChange={handleMessageText}
          />
          <SendButton type="submit" onClick={handleSendMessage}>
            Submit
          </SendButton>
        </MessageForm>
      </ChatContainer>
    </OuterBox>
  );
};

export default Chat;
