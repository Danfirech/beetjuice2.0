import React from "react";
import styled from "styled-components";

// SONG SECTION //

const SongContainer = styled.div`
  height: 1400px;
  width: 100vw;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 130px;
  padding-left: 130px;
  margin-top: -150px;
`;

const SongColumn = styled.div`
  height: 1000px;
  width: 30%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SongBox = styled.div`
  height: 70px;
  width: 100%;
  background-color: green;
  display: flex;
`;

const LeftSide = styled.div`
  height: 100%;
  width: 30%;
  background-color: grey;
`;

const RightSide = styled.div`
  height: 100%;
  width: 70%;
  background-color: purple;
`;

const Sections = styled.div`
  height: 220px;
  width: 100vw;
  padding-top: 80px;
  background-color: #e5e4e2;
  z-index: 100;
  font-size: 65px;
  font-family: "Bebas Neue", cursive;
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

const Songs = () => {
  return (
    <>
      <Sections>SAMPLE OF OUR SONG SELECTIONS</Sections>
      <SongContainer>
        <SongColumn>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
          <SongBox>
            <LeftSide>ICON</LeftSide>
            <RightSide>Song Name</RightSide>
          </SongBox>
        </SongColumn>
        <SongColumn>
          <SongBox>1</SongBox>
          <SongBox>2</SongBox>
          <SongBox>3</SongBox>
          <SongBox>4</SongBox>
          <SongBox>5</SongBox>
          <SongBox>6</SongBox>
          <SongBox>7</SongBox>
          <SongBox>8</SongBox>
          <SongBox>9</SongBox>
          <SongBox>10</SongBox>
        </SongColumn>
        <SongColumn>
          <SongBox>1</SongBox>
          <SongBox>2</SongBox>
          <SongBox>3</SongBox>
          <SongBox>4</SongBox>
          <SongBox>5</SongBox>
          <SongBox>6</SongBox>
          <SongBox>7</SongBox>
          <SongBox>8</SongBox>
          <SongBox>9</SongBox>
          <SongBox>10</SongBox>
        </SongColumn>
      </SongContainer>
    </>
  );
};

export default Songs;
