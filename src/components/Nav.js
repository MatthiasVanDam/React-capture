import React from "react";
//styled
import styled from "styled-components";
//router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. Home</Link>
        </li>

        <li>
          <Link to="/work">2. Our Work</Link>
        </li>

        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100vw;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #2c2c2c;

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "lobster", cursive;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
