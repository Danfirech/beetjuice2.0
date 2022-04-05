import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../media/Transparentlogo.jpeg';
import Link from 'next/link';
import { MdClose, MdMenu } from 'react-icons/md';
import '../pages/_document';

const Container = styled.div`
  height: 90px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  /* padding-bottom: 150px; */
  @media (max-width: 1068px) {
    padding-bottom: none;
    width: 100%;
    height: 100px;
  }
`;

const Left = styled.div`
  height: 100px;
  width: 30%;
  background-color: #e5e4e2;
  padding-left: 58px;
  border-bottom: 1px solid black;
  z-index: 98;
  @media (max-width: 1068px) {
    height: 100px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 98;
  }
`;

const Right = styled.div`
  height: 100px;
  width: 70%;
  background-color: #e5e4e2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 58px;
  font-family: 'Overpass Mono', monospace;
  border-bottom: 1px solid black;
  padding-left: 250px;
  word-spacing: 30px;
  z-index: 98;

  ul {
    max-width: 1200px;
    width: 90%;
    text-align: center;
    z-index: 99;
    background-color: #e5e4e2;
  }
  li {
    display: inline-block;
  }
  a {
    display: inline-block;
    padding-left: 25px;
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }

  .navItems .closeNavIcon {
    display: none;
  }

  @media (max-width: 1068px) {
    padding: 0;
    z-index: 999;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      font-size: 40px;
      padding-top: 13px;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      padding: 1rem;
      width: 50%;
      max-width: 300px;
      position: absolute;
      z-index: 99;

      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
        padding-right: 2rem;
      }
    }
  }
`;

const Header = () => {
  const [showNav, setShowNav] = useState(false);

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
        <div
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className="closeNavIcon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <Link
              href="/"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/b33tju1c3"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              B33tJu1c3
            </Link>
          </li>
          <li>
            <Link
              href="/wedding"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Weddings
            </Link>
          </li>
          <li>
            <Link
              href="/corporate"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Corporate/Events
            </Link>
          </li>
          <li>
            <Link
              href="/passionfruit"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Passionfruit
            </Link>
          </li>
          <li>
            <Link
              href="/repairs"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Repairs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              passHref
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Contact
            </Link>
          </li>
        </ul>
      </Right>
    </Container>
  );
};

export default Header;
