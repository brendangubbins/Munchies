import styled from 'styled-components';

const SignUpButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: 'Rubik';
  font-size: 1.0625rem;
  font-weight: bold;
  background-color: #ffa500;
  padding: 0.625rem 1.25rem;
  border-radius: 5px;
  margin-top: 0.625rem;

  &:hover {
    background-color: #ffc108;
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  border: none;
  font-family: 'Rubik';
  font-size: 1.0625rem;
  font-weight: bold;
  background-color: #fff;
  padding: 0.625rem 1.25rem;
  border-radius: 5px;
  margin-top: 0.625rem;

  &:hover {
    background-color: #eee;
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
