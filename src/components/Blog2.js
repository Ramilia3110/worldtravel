import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .blog2 {
    margin-top: 5rem;
    padding-bottom: 8rem;
  }
  .text-content {
    height: 30vh;
    h3 {
      height: 10vh;
      text-align: center;
    }
    p {
      height: 20vh;
      overflow: hidden;
      margin-top: 1.2rem;
    }
  }
`;

const Blog2 = () => {
  return (
    <Styles>
      <div>
        <div className="blog2 container-fluid">
          <div className="row d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-center">
            <div className="col-lg-4 mb-5 d-flex  flex-column align-items-center">
              <div className="text-content">
                <h3>I am traveling with 100$ in Egypt</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <a href="#" className="btn btn-light mt-5 ">
                Click here
              </a>
            </div>
            <div className="col-lg-4 mb-5 d-flex  flex-column align-items-center">
              <div className="text-content">
                <h3>Amazing food on the streets of Kuala-Lumpur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <a href="#" className="btn btn-light mt-5 ">
                Click here
              </a>
            </div>
            <div className="col-lg-4 mb-5 d-flex  flex-column align-items-center">
              <div className="text-content">
                <h3>Nomadic style, is it expensive?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
              <a href="#" className="btn btn-light mt-5 ">
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Blog2;
