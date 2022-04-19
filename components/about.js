import React from 'react';
import styled from 'styled-components';
import '../pages/_document';
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  padding-left: 480px;
  padding-right: 150px;
  padding-top: 150px;
  text-align: justify;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 1068px) {
    height: 100px;
    font-size: 15px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 120px;
    padding-top: 220px;
    text-align: left;
  }
  @media (max-width: 568px) {
    height: 100px;
    font-size: 15px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 120px;
    padding-top: 220px;
    text-align: left;
  }
`;

const About = () => {
  return (
    <Container>
      <ScrollAnimation animateIn="fadeIn">
        <p>
          OVER 12 YEARS OF GROOVES, CLASSIC ELECTRIC GUITAR AND DANCE DRIVEN
          DRUMS PERFORMED LIVE, ALONG WITH SOULFUL AND HARD-HITTING VOCALS, B33T
          JU1C3 WILL TAILOR THEIR WORLD CLASS LIVE PERFORMANCE TO FIT THE NEEDS
          OF ANY EVENT, VENUE OR AUDIENCE.
        </p>
      </ScrollAnimation>
    </Container>
  );
};

export default About;
