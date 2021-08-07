import React from 'react';
import styled from 'styled-components';
import Form from './Form/Form';

// main container for Form
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  width: 30%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: 5px;
  border: 1px solid #eaeaea;

  @media only screen and (max-width: 1052px) {
    width: 50%;
  }

  @media only screen and (max-width: 700px) {
    width: 60%;
    padding: 2rem 3rem;
  }

  @media only screen and (max-width: 514px) {
    width: 90%;
    padding: 4rem;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`;

const LandingForm = () => {
  return (
    <FormContainer>
      <Form />
    </FormContainer>
  );
};

export default LandingForm;
