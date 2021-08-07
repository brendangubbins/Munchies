import styled from 'styled-components';

const UserNameInput = styled.input`
  border: none;
  padding: 0.3125rem 5rem;
  padding-left: 2rem;
  border: 2px solid lightgray;
  margin-left: 0.5rem;

  &:focus {
    border: 2px solid #666;
    outline: none;
  }
`;

const EmailInput = styled.input`
  border: none;
  padding: 0.3125rem 5rem;
  padding-left: 2rem;
  border: 2px solid lightgray;
  margin-left: 0.5rem;

  &:focus {
    border: 2px solid #666;
    outline: none;
  }
`;

const PasswordInput = styled.input`
  border: none;
  padding: 0.3125rem 5rem;
  padding-left: 2rem;
  border: 2px solid lightgray;
  margin-left: 0.5rem;

  &:focus {
    border: 2px solid #666;
    outline: none;
  }
`;

export { UserNameInput, EmailInput, PasswordInput };
