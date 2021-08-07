import { useEffect } from "react";
import styled from "styled-components";
import Selection from "./Selection";
import Chat from "./Chat";

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
`;
const Room = ({ socket }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
