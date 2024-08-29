// NavBar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Home from './Home';

const NavBarContainer = styled.div`
  position: relative;
   width: 100%;
   height: 100vh;
  overflow:Hidden;
`;


const NavBarContent = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  position: relative;
  z-index: 2;
  transition: color 0.3s;

  &:hover {
    color: black ; /* Change to your desired hover color */
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 200%;
      height: 100%;
      background: rgba(255, 235, 59, 0.5); /* Change to your desired spark effect */
      border-radius: 50%;
      z-index: -1;
      animation: sparkle 0.6s linear;
    }
  }

  @keyframes sparkle {
    0% {
      width: 0;
      height: 0;
      opacity: 0.7;
    }
    50% {
      width: 200%;
      height: 200%;
      opacity: 0.5;
    }
    100% {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;

const NavBar = () => {
  return (
    <>
  <Home />
    <NavBarContainer>
  {/* <img src='/images/Advertisment.jpg' /> */}
      <NavBarContent>
        <NavLink to="Home">Home</NavLink>
        <NavLink to="Blog">Blog</NavLink>
        <NavLink to="admission">Admission</NavLink>
        <NavLink to="result">Result</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
        {/* Add more NavLinks as needed */}
      </NavBarContent>
    </NavBarContainer>
    </>
  );
};

export default NavBar;
