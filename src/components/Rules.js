import React from "react";
import airport from "../assets/airport.png";
import passport from "../assets/passport.png";
import bag from "../assets/bag.png";
import styled from "styled-components";

const Styles = styled.div`
  .rules-img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: #031b58;
    margin: 1.5rem auto;
  }
  h4 {
    font-size: 2rem;
    font-weight: 200;
    color: #343537;
  }
`;

const Rules = () => {
  return (
    <Styles>
      <div className="Rules d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column  align-items-start w-100">
          <div className="body-content d-flex flex-column align-items-center mt-5 mb-5">
            <h4 className="mr-3">Passport and visa requirements</h4>
            <img src={passport} className="rules-img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="body-content d-flex flex-column align-items-center mt-3 ">
            <h4>Custom procedures</h4>
            <img src={bag} className="rules-img" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="body-content d-flex flex-column align-items-center mt-3">
            <h4>Airport rules</h4>
            <img src={airport} className="rules-img" />
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Rules;
