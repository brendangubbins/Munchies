import React from 'react';
import styled from 'styled-components';
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { SignUpButton, LoginButton, SubmitButton } from './FormButtons';
import { UserNameInput, PasswordInput, EmailInput } from './FormInputs';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

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

const SignUpForm = ({
  handleSignUpClick,
  handleLoginClick,
  handleSignUpSubmit,
  showLogin,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' });
  return (
    <form onSubmit={handleSubmit(handleSignUpSubmit)}>
      <SignUpFormContainer>
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
                  message: 'Username must be at least 3 characters',
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
            <InputLeftElement pointerEvents="none" children={<MdEmail />} />
            <EmailInput
              placeholder="Email Address"
              type="email"
              {...register('email', {
                required: 'This input is required',
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
                required: 'This input is required',
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                  message:
                    'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
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
        <SubmitButton type="submit">Submit</SubmitButton>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
