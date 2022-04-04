import React from "react";
import styled from "styled-components";
import pic from "../media/BeetJuiceTest.jpeg";
import Image from "next/image";
import "../pages/_document";

const Container = styled.div`
  display: none;
  @media (max-width: 1168px) {
    height: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e5e4e2;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100vw;
  background-color: #e5e4e2;
  font-size: 34px;
  font-family: raleway;
`;

const Header = styled.div`
  height: 15%;
  width: 100vw;
  background-color: blue;
`;

const ImageWrapper = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobilePhoto = () => {
  return (
    <Container>
      <Title>Beet Juice Enterntainment</Title>
      <ImageWrapper>
        <Image
          src={pic}
          layout="intrinsic"
          width={450}
          height={450}
          alt="Cover"
        />
      </ImageWrapper>
    </Container>
  );
};

export default MobilePhoto;
