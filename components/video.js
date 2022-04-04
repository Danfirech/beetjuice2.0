import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding-left: 240px;
  padding-right: 240px;
  display: none;
  @media (max-width: 768px) {
    display: none;
    font-size: 20px;
    padding-left: 140px;
    padding-right: 140px;
  }
  @media (max-width: 568px) {
    font-size: 15px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const VideoContainer = styled.div`
  width: 35%;
  height: 350px;
  background-color: White;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 70%;
    margin-top: 20px;
    height: 650px;
  }
`;

const About = () => {
  return (
    <Container>
      <VideoContainer>
        <ReactPlayer
          width="100%"
          url="https://www.youtube.com/watch?v=wWgIAphfn2U"
        />
      </VideoContainer>
    </Container>
  );
};

export default About;
