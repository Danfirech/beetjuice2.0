import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../media/Transparentlogo.jpeg";
import Link from "next/link";
import "../../pages/_document";

const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  /* padding-bottom: 150px; */
  @media (max-width: 768px) {
    padding-bottom: none;
    width: 100%;
    height: 100px;
  }
`;

const Left = styled.div`
  height: 100px;
  width: 50%;
  background-color: black;
  color: white;
  padding-left: 58px;
  border-bottom: 1px solid black;
  @media (max-width: 768px) {
    height: 100px;
    width: 100%;
    padding-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 50px;
  }
`;

const Right = styled.div`
  height: 100px;
  width: 50%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 58px;
  font-family: "Overpass Mono", monospace;
  border-bottom: 1px solid black;
  padding-left: 250px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <Image
          src={logo}
          layout="intrinsic"
          width={102}
          height={100}
          priority
          alt="Logo"
        />
      </Left>
      <Right>
        <Link href="/b33tju1c3" passHref>
          B33t Ju1c3
        </Link>
        <Link href="/weddingCorporate" passHref>
          Weddings/Corporate
        </Link>
        <Link href="/" passHref>
          PassionFruite
        </Link>
        <Link href="/" passHref>
          Contacts
        </Link>
      </Right>
    </Container>
  );
};

export default Header;
