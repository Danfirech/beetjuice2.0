import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Insta from "../../media/Insta.png";
import Facebook from "../../media/Face.png";

const InstgramLink = (e) => {
  window.location = "https://www.instagram.com/b33tju1c3/?hl=en";
};

const FacebookLink = (e) => {
  window.location = "https://form.jotform.com/220784862221152";
};

const Container = styled.div`
  width: 100vw;
  height: 150px;
  background-color: #e5e4e2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterTop = styled.div`
  width: 100vw;
  height: 75px;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 800px;
  padding-right: 800px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
    padding-left: none;
    padding-right: none;
  }
`;

const FooterBottom = styled.div`
  width: 100vw;
  height: 75px;
  background-color: #e5e4e2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  font-family: "Overpass Mono", monospace;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }
`;

const WeddingFooter = () => {
  return (
    <Container>
      <FooterTop>
        <div onClick={InstgramLink}>
          <Image
            src={Insta}
            layout="intrinsic"
            width={50}
            height={50}
            priority
            alt="Insta"
          />
        </div>
        <div>
          <Image
            src={Facebook}
            layout="intrinsic"
            width={50}
            height={50}
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

export default WeddingFooter;
