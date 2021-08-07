import React from "react";
import styled from "styled-components";
import Selection from "./Selection";

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
const Room = () => {
  return (
    <Wrapper>
      <LeftAlign>This is where the chat will go </LeftAlign>
      <RightAlign>
        <Selection />
      </RightAlign>
    </Wrapper>
  );
};

export default Room;
