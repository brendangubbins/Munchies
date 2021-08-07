import React from 'react';
import styled from 'styled-components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { SignUpButton, LoginButton, SubmitButton } from './FormButtons';
import { UserNameInput, PasswordInput, EmailInput } from './FormInputs';

// main container for sign up form
const SignUpFormContainer = styled.div`
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

const SignUpForm = ({ handleSignUpClick, handleLoginClick }) => {
  return (
    <form>
      <SignUpFormContainer>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<CgProfile />} />
            <UserNameInput placeholder="Username" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<MdEmail />} />
            <EmailInput placeholder="Email Address" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<AiFillLock />} />
            <PasswordInput placeholder="Password" />
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
        <SubmitButton type="submit">Submit</SubmitButton>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
