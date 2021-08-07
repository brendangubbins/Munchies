import React from 'react';
import styled from 'styled-components';
import Form from './Form/Form';

// main container for Form
const FormContainer = styled.div`
  display: flex;
`;

const LandingForm = () => {
  return (
    <FormContainer>
      <Form />
    </FormContainer>
  );
};

export default LandingForm;
