import { useEffect } from 'react';
import styled from 'styled-components';
import Selection from './Selection';
import Chat from './Chat';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
`;

const LeftAlign = styled.section`
  display: flex;
  background-color: #ffffff;

  color: black;
  width: 70%;
  flex-direction: column;
  border-right: 2px solid lightgray;
  padding: 2rem;
`;

const RightAlign = styled.section`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  color: black;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;
const Room = ({ socket }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // On render, automatically place the user in their room

    const username = JSON.parse(
      window.sessionStorage.getItem("loggedMunchiesUser")
    ).username;

    socket.emit('join-room', username, (message) => {
      console.log(message);
    });
  }, []);
  return (
    <Wrapper>
      <LeftAlign>
        <Chat socket={socket} />
      </LeftAlign>
      <RightAlign>
        <Selection socket={socket} />
      </RightAlign>
    </Wrapper>
  );
};

export default Room;
