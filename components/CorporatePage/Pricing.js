import React from "react";
import styled from "styled-components";
import Image from "next/image";
import EventBanner from "../../media/event-heads.jpg";
import ReactPlayer from "react-player";
import ScrollAnimation from "react-animate-on-scroll";
import "../../pages/_document";
import Crowd from "../../media/crowd.png";

const BasicContactForm = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const CorporateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  /* height: 1150px; */
  background-color: #e5e4e2;
  @media (max-width: 768px) {
    height: 650px;
  }
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
`;

const TitleContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 480px;
    width: 100%;
    text-align: center;
  }
`;

const Titlegrey = styled.div`
  height: 120px;
  width: 83%;
  display: flex;
  justify-content: center;
  font-size: 62px;
  padding: 25px;
  z-index: 99;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 768px) {
    font-size: 41px;
    color: white;
    padding-top: 70px;
    width: 100%;
    height: 30px;
  }
`;

const Info = styled.div`
  height: 80px;
  width: 83%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding-right: 300px;
  padding-left: 300px;
  padding-top: 150px;
  padding-bottom: 150px;
  color: black;
  z-index: 99;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 1068px) {
    font-size: 21px;
    height: 580px;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 21px;
    height: 580px;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
    color: white;
  }
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 15px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: "Overpass Mono", monospace;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    background-color: white;
    color: black;
    border-radius: 6px;
    width: 200px;
    height: 60px;
    padding: 25px;
    text-align: center;
  }
`;

const Pricing = (props) => {
  return (
    <>
      <CorporateContainer>
        <ImageContainer>
          <div
            className="cutweddingphoto"
            style={{
              position: "absolute",
            }}
          >
            <Image
              src={Crowd}
              height="950"
              width="700"
              objectFit={"cover"}
              alt="Crowd"
            />
          </div>
          <div
            className="weddingphotodisplay"
            style={{
              position: "absolute",
            }}
          >
            <Image
              src={EventBanner}
              objectFit={"cover"}
              // width={1920}
              // height={1080}
            />
          </div>
          <TitleContainer>
            <Titlegrey>Corporate and Other Events</Titlegrey>
            <Info>
              B33t Ju1c3 Entertainment offers live music selections that fit any
              event. Whether you are looking for a high energy experience that
              has your group Dancing or a quiet cocktail hour, the B33t Ju1c3
              band will be able to meet your needs. Please contact us for
              Pricing.
            </Info>
            <Button className="button:hover" onClick={BasicContactForm}>
              Contact For Booking/Pricing
            </Button>
          </TitleContainer>
        </ImageContainer>
      </CorporateContainer>
    </>
  );
};

export default Pricing;
