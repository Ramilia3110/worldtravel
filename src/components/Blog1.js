import React from "react";
import ontheroad from "../assets/ontheroad.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .blog1 {
    margin: 3rem 0;
  }
  .b-title {
    text-align: center;
    font-weight: 200;
  }
`;

const Blog1 = () => {
  return (
    <Styles>
      <div>
        <div className="blog1 container-fluid d-flex  justify-content-center mx-lg-0 border-top border-bottom">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-center">
            <div className="col-lg-4">
              <h1 className="display-3 b-title">RELAXED</h1>
            </div>
            <div className="col-lg-4">
              <img className="img-fluid image-resize" src={ontheroad} />
            </div>
            <div className="col-lg-4">
              <h1 className="display-3 b-title">HAPPY</h1>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Blog1;
