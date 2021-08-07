import styled from 'styled-components';

// #ffa500
const SignUpButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: 'Rubik';
  font-size: 1.0625rem;
  font-weight: bold;
  background-color: ${(props) => (!props.showLogin ? '#ffa500' : '#fff')};
  padding: 0.625rem 1.25rem;
  border-radius: 5px;
  margin-bottom: 2rem;

  &:hover {
    background-color: ${(props) => (!props.showLogin ? '#ffc108' : '#eee')};
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: 'Rubik';
  font-size: 1.0625rem;
  font-weight: bold;
  background-color: ${(props) => (props.showLogin ? '#ffa500' : '#fff')};
  padding: 0.625rem 1.6rem;
  border-radius: 5px;
  margin-bottom: 2rem;

  &:hover {
    &:hover {
      background-color: ${(props) => (props.showLogin ? '#ffc108' : '#eee')};
    }
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: 'Rubik';
  font-weight: bold;
  background-color: #ffa500;
  padding: 0.975rem 3.125rem;
  margin: 1.875rem auto;
  border-radius: 10px;
  width: 100%;

  &:hover {
    background-color: #ffc108;
  }
`;

export { SignUpButton, LoginButton, SubmitButton };
