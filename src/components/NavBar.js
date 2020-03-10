import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background: #ea1414;
    overflow: hidden;
    width: 100vw;
    .navbar-brand {
      color: white;
      font-size: 1.3rem;
      font-weight: 200;
    }
    .navbar-toggler-icon {
      color: white;
    }
    .nav-link {
      color: white;
      margin: 0 3rem;
      font-size: 1.3rem;
      font-weight: 200;
      &:hover {
        color: #f08f8f;
      }
    }
  }
`;

const NavBar = () => (
  <Styles>
    <Navbar expand="md" fixed="top">
      <Navbar.Brand href="/">WORLD TRAVEL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/travelers">TRAVELERS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tips">TIPS</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
