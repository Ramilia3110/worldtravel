import React from "react";
import Jumbo from "./components/Jumbo";
import styled from "styled-components";

const Styles = styled.div`
  .content {
    border: 1px solid rgba(166, 172, 175, 0.2);
    box-shadow: 1px 1px 1px 1px rgba(206, 89, 55, 0.3);
    h1 {
      text-align: center;
      font-weight: 200;
    }
    p {
      font-weight: 200;
    }
  }
`;

const About = () => {
  return (
    <Styles>
      <div>
        <Jumbo />
        <div className="content  container d-flex flex-column justify-content-center pt-5">
          <h1 className="display-5 mt-5">
            We are the community of people who love to travel and share their
            experience.
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Styles>
  );
};

export default About;
