import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import loginService from '../../../services/login';
import registerService from '../../../services/register';

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

  // sends Login form data to backend server
  // if success, receive user login credentials as a response and stores to browser's session storage
  const onLoginSubmit = async (data) => {
    console.log('login data', data);
    const { username, password } = data;

    try {
      const returnUserData = await loginService.login({
        username,
        password,
      });

      console.log('returnedUserData', returnUserData);
      if (returnUserData) {
        window.sessionStorage.setItem(
          'loggedMunchiesUser',
          JSON.stringify(returnUserData)
        );
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  // sends sign up data to backend server
  const onSignUpSubmit = async (data) => {
    console.log('Sign up data', data);

    const { username, password, email } = data;

    await registerService.register({
      username,
      password,
      email,
    });
  };

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
          handleLoginSubmit={onLoginSubmit}
          showLogin={showLogin}
        />
      ) : (
        <SignUpForm
          handleSignUpClick={handleSignUpClick}
          handleLoginClick={handleLoginClick}
          handleSignUpSubmit={onSignUpSubmit}
          showLogin={showLogin}
        />
      )}
    </>
  );
};

export default Form;
