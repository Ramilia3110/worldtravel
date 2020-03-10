import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import earth from "../assets/earth.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .gap {
    height: 2vh;
  }
  .jumbo {
    background: url(${earth});
    background-size: cover;
    height: 50vh;
    position: relative;
  }
`;

const Jumbo = () => {
  return (
    <Styles>
      <div>
        <div className="gap"></div>
        <Jumbotron
          fluid
          className="jumbo d-flex justify-content-center w-100 "
        ></Jumbotron>
      </div>
    </Styles>
  );
};

export default Jumbo;
