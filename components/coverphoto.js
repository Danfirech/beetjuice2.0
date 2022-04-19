import React from 'react';
import styled from 'styled-components';
import pic from '../media/Main.png';
import Image from 'next/image';
import MobileCover from '../media/CutDownCover.jpeg';
import '../pages/_document';

const InstgramLink = (e) => {
  window.location = 'https://www.instagram.com/b33tju1c3/?hl=en';
};

const FacebookLink = (e) => {
  window.location = 'https://form.jotform.com/220784862221152';
};

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  padding-right: 150px;
  background-color: #e5e4e2;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 60vh;
  }
`;

const ImageContainer = styled.div`
  height: 70vh;
  width: 100%;
  background-color: #e5e4e2;
  padding-left: 480px;
  padding-top: 270px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileImageContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    height: 400px;
    width: 100vw;
  }
`;

const TextContainer = styled.div`
  height: 300px;
  width: 750px;
  background-color: none;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  z-index: 1;
  padding-top: 300px;
  padding-left: 400px;
  font-family: 'Bebas Neue', cursive;

  @media (max-width: 1068px) {
    height: 100px;
    width: 350px;
    font-size: 35px;
    padding-top: 150px;
    padding-left: 50px;
    padding-right: 30px;
  }

  @media (max-width: 768px) {
    height: 100px;
    width: 350px;
    font-size: 35px;
    padding-top: 150px;
    padding-left: 80px;
  }
`;

const Pic2 = () => {
  return (
    <>
      <Container>
        <TextContainer className="flicker-in-1">
          <h1>Beet Juice Entertainment</h1>
        </TextContainer>
        <MobileImageContainer className="flicker-in-1">
          <Image
            src={MobileCover}
            layout="intrinsic"
            width={700}
            height={950}
            priority
            alt="Cover"
          />
        </MobileImageContainer>
        <ImageContainer className="flicker-in-1">
          <Image
            src={pic}
            layout="intrinsic"
            width={1300}
            height={850}
            priority
            alt="Cover"
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Pic2;
