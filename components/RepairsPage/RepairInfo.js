import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import RepairBanner from '../../media/repair.jpg';
import ReactPlayer from 'react-player';
import Stock from '../../media/BandStock.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../pages/_document';
import Sax from '../../media/guitar.jpg';

const BasicContactForm = (e) => {
  window.location = 'https://form.jotform.com/220784862221152';
};

const Container = styled.div`
  height: 1600px;
  width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  background-color: #e5e4e2;
  @media (max-width: 868px) {
    flex-direction: column;
    height: 1750px;
    background-color: black;
  }
`;

const Title = styled.div`
  height: 200px
  width: 400px;
  display: flex;
  background: none;
  color: white;
  font-family: "Bebas Neue", cursive;
  position: absolute;
  z-index: 99;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    @media (max-width: 868px) {
    flex-direction: column;
    height: 400px;
  }
`;

const PriceCardContainer = styled.div`
  height: 1500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #e5e4e2;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 107px;
  @media (max-width: 1068px) {
    flex-direction: row;
    justify-content: space-between;
    height: 1900px;
    margin-top: 0px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 30px;
  }
  @media (max-width: 868px) {
    flex-direction: column;
    justify-content: space-between;
    height: 1900px;
    margin-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const PriceLeft = styled.div`
  height: 90%;
  width: 500px;
  border: 1px solid black;
  background-color: #e5e4e2;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 13.5px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1068px) {
    display: flex;
    width: 240px;
    font-size: 10.5px;
    height: 80%;
  }
  .wedding-package-title {
    font-size: 60px;
    font-family: 'Bebas Neue', cursive;
  }
  @media (max-width: 868px) {
    display: none;
  }
  .wedding-package-title {
    font-size: 60px;
    font-family: 'Bebas Neue', cursive;
  }
`;

const PriceMiddle = styled.div`
  height: 90%;
  width: 480px;
  background-color: #e5e4e2;
  border: 1px solid black;
  @media (max-width: 1068px) {
    height: 80%;
    width: 240px;
  }
  @media (max-width: 868px) {
    height: 900px;
    width: 90vw;
  }
`;

const PriceRight = styled.div`
  height: 90%;
  width: 480px;
  background-color: #e5e4e2;
  border: 1px solid black;
  @media (max-width: 1068px) {
    height: 80%;
    width: 240px;
  }
  @media (max-width: 868px) {
    height: 900px;
    width: 90vw;
    margin-top: 50px;
  }
`;

const PriceCardTop = styled.div`
  height: 200px;
  width: 100%;
  background-color: #d1cfcc;
  border-bottom: 1px solid black;
  font-family: 'Bebas Neue', cursive;
  font-size: 24px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1068px) {
    font-size: 18px;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 12px;
  }
  @media (max-width: 868px) {
    font-size: 18px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  background-color: black;
  color: white;
  font-family: 'Overpass Mono', monospace;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #e5e4e2;
    color: black;
    border: 2px solid #e5e4e2;
  }
  @media (max-width: 868px) {
    background-color: black;
    margin-bottom: 10px;
  }
`;

const Price = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e5e4e2;
`;

const PriceCardBottom = styled.div`
  padding: 10px;
  font-family: 'Overpass Mono', monospace;
  @media (max-width: 1068px) {
    height: 340px;
    background-color: #e5e4e2;
    font-size: 12px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e4e2;
  @media (max-width: 868px) {
    height: 340px;
    background-color: #e5e4e2;
  }
`;

const Sections = styled.div`
  height: 220px;
  width: 100vw;
  padding-top: 80px;
  padding-left: 150px;
  background-color: #e5e4e2;
  z-index: 100;
  font-size: 65px;
  font-family: 'Bebas Neue', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 868px) {
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-left: 0px;
    height: 120px;
  }
`;

const Pricing = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Title>
            <h1 className="textcolorwhite">Guitar Repairs</h1>
          </Title>
          <div className="cutweddingphoto">
            <Image
              src={Sax}
              height="500"
              width="500"
              objectFit={'cover'}
              alt="Dan"
            />
          </div>
          <Button className="button:hover" onClick={BasicContactForm}>
            Contact
          </Button>
          <div className="weddingphotodisplay">
            <Image
              src={RepairBanner}
              height="2000"
              objectFit={'cover'}
              alt="Dan"
            />
          </div>
        </ImageContainer>
        <PriceCardContainer>
          <PriceLeft>
            <PriceCardTop>
              <h2>Setups</h2>
            </PriceCardTop>
            <PriceCardBottom>
              <h2 className="weddingtitles">Full Setup</h2>
              <h4 className="weddingparagraphs">
                Live instrumental guitar for 30 minutes as guests arrive (or
                playlist)
              </h4>
              <h2 className="weddingtitles">Fret Level</h2>
              <h4 className="weddingparagraphs">
                Your guests will enjoy 60 minutes of live music as they make
                their way into the reception with relaxing meolodies as they
                enjoy their meal.
              </h4>
              <h2 className="weddingtitles">On-Site Setup</h2>
              <h4 className="weddingparagraphs">
                Our band wants to create a night of memories for you and your
                guests. With two hours of dance music the space will be filled
                with static party energy!
              </h4>
            </PriceCardBottom>
          </PriceLeft>
          <PriceMiddle>
            <PriceCardTop>
              <h2>Upgrades/Mods</h2>
            </PriceCardTop>
            <PriceCardBottom>
              <h2 className="weddingtitles">New Nut</h2>
              <h4 className="weddingparagraphs">
                Live instrumental guitar for 30 minutes as guests arrive (or
                playlist)
              </h4>
              <h2 className="weddingtitles">Pickups</h2>
              <h4 className="weddingparagraphs">
                Your guests will enjoy 60 minutes of live music as they make
                their way into the reception with relaxing meolodies as they
                enjoy their meal.
              </h4>
              <h2 className="weddingtitles">Hardware Install</h2>
              <h4 className="weddingparagraphs">
                Our band wants to create a night of memories for you and your
                guests. With two hours of dance music the space will be filled
                with static party energy!
              </h4>
            </PriceCardBottom>
          </PriceMiddle>
          <PriceRight>
            <PriceCardTop>
              <h2>Fixers</h2>
            </PriceCardTop>
            <PriceCardBottom>
              <h2 className="weddingtitles">Structural</h2>
              <h4 className="weddingparagraphs">
                Live instrumental guitar for 30 minutes as guests arrive (or
                playlist)
              </h4>
              <h2 className="weddingtitles">New Frets</h2>
              <h4 className="weddingparagraphs">
                Your guests will enjoy 60 minutes of live music as they make
                their way into the reception with relaxing meolodies as they
                enjoy their meal.
              </h4>
              <h2 className="weddingtitles">Repair</h2>
              <h4 className="weddingparagraphs">
                Our DJ will curate a event specific playlist unuiqe to you and
                your special moment. 3 hours of energecit sounds!
              </h4>
            </PriceCardBottom>
          </PriceRight>
        </PriceCardContainer>
      </Container>
    </>
  );
};

export default Pricing;
