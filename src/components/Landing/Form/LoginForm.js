import styled from 'styled-components';
import React from 'react';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiFillLock } from 'react-icons/ai';
import { UserNameInput, PasswordInput } from './FormInputs';
import { LoginButton, SignUpButton, SubmitButton } from './FormButtons';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import LoginFormErrMsg from './LoginFormErrMsg';

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
  justify-content: center;
`;

// error text for invalid inputs
const ErrorText = styled.p`
  color: red;
  width: 250px;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;

const LoginForm = ({
  handleLoginClick,
  handleSignUpClick,
  handleLoginSubmit,
  showLogin,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' });
  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <LoginFormContainer>
        <LoginFormErrMsg errorMessage={errorMessage} />
        <ButtonGroup>
          <LoginButton
            type="button"
            onClick={handleLoginClick}
            showLogin={showLogin}
          >
            Login
          </LoginButton>
          <SignUpButton
            type="button"
            onClick={handleSignUpClick}
            showLogin={showLogin}
          >
            Sign up
          </SignUpButton>
        </ButtonGroup>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<CgProfile />} />
            <UserNameInput
              placeholder="Username"
              {...register('username', {
                required: 'This input is required',
                minLength: {
                  value: 3,
                  message: 'This input must be at least 3 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ErrorText style={{ textAlign: 'center' }} key={type}>
                        {message}
                      </ErrorText>
                    ))
                  : null;
              }}
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <InputLeftElement pointerEvents="none" children={<AiFillLock />} />
            <PasswordInput
              placeholder="Password"
              type="password"
              {...register('password', {
                required: 'This inpus is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ErrorText style={{ textAlign: 'center' }} key={type}>
                        {message}
                      </ErrorText>
                    ))
                  : null;
              }}
            />
          </InputContainer>
        </InputGroup>

        <SubmitButton>Submit</SubmitButton>
      </LoginFormContainer>
    </form>
  );
};

export default LoginForm;
