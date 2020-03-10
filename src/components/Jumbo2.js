import React from "react";
import { Jumbotron } from "react-bootstrap";
import jumbo from "../assets/jumbo.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .gap {
    height: 2vh;
  }
  .jumbo {
    background: url(${jumbo});
    background-size: cover;
    background-position: 10% 82%;
    background-repeat: no-repeat;

    height: 50vh;
    position: relative;

`;

const Jumbo2 = () => {
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

export default Jumbo2;
