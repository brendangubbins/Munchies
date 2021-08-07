import styled from 'styled-components';
import React from 'react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiFillLock } from 'react-icons/ai';
import { UserNameInput, PasswordInput } from './FormInputs';
import { LoginButton, SignUpButton, SubmitButton } from './FormButtons';

// main container for login form
const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// container for a single input
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

// container for Login and Sign up switch buttons
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginForm = ({ handleLoginClick, handleSignUpClick }) => {
  return (
    <form>
      <LoginFormContainer>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<CgProfile />} />
            <UserNameInput placeholder="Username" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<AiFillLock />} />
            <PasswordInput placeholder="Password" type="password" />
          </InputContainer>
        </InputGroup>
        <ButtonGroup>
          <LoginButton type="button" onClick={handleLoginClick}>
            Login
          </LoginButton>
          <SignUpButton type="button" onClick={handleSignUpClick}>
            Sign up
          </SignUpButton>
        </ButtonGroup>
        <SubmitButton>Submit</SubmitButton>
      </LoginFormContainer>
    </form>
  );
};

export default LoginForm;
