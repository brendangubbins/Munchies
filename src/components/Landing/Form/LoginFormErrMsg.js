import React from 'react';
import styled from 'styled-components';

// error message for invalid login/username info
const LoginErrorMessage = styled.p`
  margin: 0 auto;
  font-weight: bold;
  color: red;
`;

const LoginFormErrMsg = (props) => {
  if (props.LoginErrorMessage === null) {
    return null;
  }

  return <LoginErrorMessage>{props.errorMessage}</LoginErrorMessage>;
};

export default LoginFormErrMsg;
