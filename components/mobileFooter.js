import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Insta from "../media/Insta.png";
import Facebook from "../media/Face.png";
import "../pages/_document";

const Container = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100px;
    background-color: #e5e4e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: "Overpass Mono", monospace;
  }
`;

const FooterTop = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 50px;
    background-color: #e5e4e2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 140px;
    padding-left: 140px;
    padding-top: 15px;
  }
`;

const FooterBottom = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 50px;
    background-color: #e5e4e2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileFooter = () => {
  return (
    <Container>
      <FooterTop>
        <div>
          <Image
            src={Insta}
            layout="intrinsic"
            width={30}
            height={30}
            priority
            alt="Insta"
          />
        </div>
        <div>
          {" "}
          <Image
            src={Facebook}
            layout="intrinsic"
            width={30}
            height={30}
            priority
            alt="Facebook"
          />
        </div>
      </FooterTop>
      <FooterBottom>
        <h3>bookb33tju1c3@gmail.com</h3>
      </FooterBottom>
    </Container>
  );
};

export default MobileFooter;
