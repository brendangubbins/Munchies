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
`;

// container a single input
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// container for Login and Sign up switch buttons
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUpForm = () => {
  return (
    <form>
      <SignUpFormContainer>
        <InputGroup>
          <InputContainer>
            {/* <InputLeftElement pointerEvents="none" children={<CgProfile />} /> */}
            <UserNameInput placeholder="Username" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            {/* <InputLeftElement pointerEvents="none" children={<MdEmail />} /> */}
            <EmailInput placeholder="Email Address" />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            {/* <InputLeftElement pointerEvents="none" children={<AiFillLock />} /> */}
            <PasswordInput placeholder="Password" />
          </InputContainer>
        </InputGroup>
        <ButtonGroup>
          <LoginButton type="button">Login</LoginButton>
          <SignUpButton type="button">Sign up</SignUpButton>
        </ButtonGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
