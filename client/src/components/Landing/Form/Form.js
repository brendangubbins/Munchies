import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const LandingFormTitle = styled.h1`
  margin: 1.5rem 0;
  font-family: 'Widound';
  text-align: center;
  font-size: 1.5625rem;
  font-weight: bold;
`;

const Form = () => {
  const [showLogin, setShowLogin] = useState(false);

  // onclick functions to switch rendering between sign up and login form
  const handleLoginClick = () => setShowLogin(true);
  const handleSignUpClick = () => setShowLogin(false);

  return (
    <>
      <LandingFormTitle>
        {showLogin ? (
          <div>
            <h3>Munchies</h3>
            <h3>Welcome Back!</h3>
          </div>
        ) : (
          <div>
            <h3>Munchies</h3>
            <h3>Create Your Account</h3>
          </div>
        )}
      </LandingFormTitle>

      {showLogin ? (
        <LoginForm
          handleSignUpClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
        />
      ) : (
        <SignUpForm
          handleSignUpClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
        />
      )}
    </>
  );
};

export default Form;
