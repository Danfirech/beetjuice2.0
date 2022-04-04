import React from "react";
import styled from "styled-components";
import JotformEmbed from "react-jotform-embed";

const ContactContainer = styled.div`
  height: 1300px;
  width: 100vw;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: #e5e4e2;
  margin-top: -900px;
  margin-bottom: -400px;
`;

const ContactForm = () => {
  return (
    <>
      <ContactContainer>
        <FormContainer>
          <JotformEmbed src="https://form.jotform.com/220784862221152" />
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactForm;
