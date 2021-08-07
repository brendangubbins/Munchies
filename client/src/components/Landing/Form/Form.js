import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';

const LandingFormTitle = styled.h1``;

const Form = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LandingFormTitle>Munchies</LandingFormTitle>
      <SignUpForm />
    </>
  );
};

export default Form;
