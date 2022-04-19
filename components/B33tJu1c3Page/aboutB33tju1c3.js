import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import CutDown from '../../media/CutDownCover.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../pages/_document';

const BasicContactForm = (e) => {
  window.location = 'https://form.jotform.com/220784862221152';
};

const TitleContainer = styled.div`
  height: 250px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titlegrey = styled.div`
  height: 120px;
  width: 83%;
  display: flex;
  justify-content: center;
  font-size: 62px;
  padding: 25px;
  font-family: 'Bebas Neue', cursive;
  @media (max-width: 768px) {
    font-size: 31px;
  }
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-family: 'Overpass Mono', monospace;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    background-color: black;
    color: white;
    border-radius: 6px;
  }
`;

const BeetJuiceText = styled.div`
  width: 40%;
  height: 680px;
  background-color: #e5e4e2;
  border-radius: 6px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1068px) {
    width: 100%;
    height: 600px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    margin-left: 0px;
    text-align: left;
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: -180px;
    text-align: left;
  }
`;

const BeetJuiceTextContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: #e5e4e2;
  display: flex;
  justify-content: center;
  text-align: justify;
  @media (max-width: 1068px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    height: 800px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    height: 1050px;
    padding-top: 200px;
  }
`;

const Pricing = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <TitleContainer className="background">
          <Titlegrey>B33T Ju1c3</Titlegrey>
          <Button onClick={BasicContactForm}>
            Contact For Booking/Pricing
          </Button>
        </TitleContainer>

        <BeetJuiceTextContainer>
          <div className="danphoto">
            <Image
              src={CutDown}
              layout="intrinsic"
              width={400}
              height={500}
              priority
              alt="Ezra"
            />
          </div>
          <BeetJuiceText>
            <h5>
              Beet Juice (written as B33T JU1C3), is a two-man project founded
              by former Mosaic Foundation keyboardist Ekewem Bogmis, A native of
              Rochester alongside Daniel Possehl a Midwestener at heart who both
              moved to LA to pursue their music careers.
              <br />
              <br />
              Both on stage and in the studio, B33t Ju1c3 relies on live looping
              to create their dense soundscapes. Stacking grooves over bass and
              percussion, laying down riffs on guitar, and singing truthfull
              lyrics over the sonic backdrop.
              <br />
              <br />
              Bogmis started experimenting with looping during a studio project
              ten years ago. B33t Ju1c3 has evolved toward creating dub-style
              music underlined with soulful dance rythems. The project is rooted
              in building a sacred space for people to feel and move to the
              rythems created by Ezra and Daniel.
            </h5>
          </BeetJuiceText>
        </BeetJuiceTextContainer>
      </ScrollAnimation>
    </>
  );
};

export default Pricing;
