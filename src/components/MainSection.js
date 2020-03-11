import React from "react";
import travel from "../assets/travel.jpg";
import airplane from "../assets/airplane.jpg";
import nature from "../assets/nature.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .group-content {
    height: 60vh;
  }
  .group-content h1 {
    font-weight: 200;
    font-size: 2rem;
  }
  .image-resize {
    height: 80vh;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .second {
    height: 50vh;
    background: #686666;
    color: white;
  }

  @media (min-width: 768px) {
    .group-content h1 {
      font-size: 3rem;
    }
  }
`;

const MainSection = () => {
  return (
    <Styles>
      <div className="main-section">
        <section className="main container-fluid px-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="group-content d-flex justify-content-center align-items-center text-center my-5 p-5">
                <h1>
                  HAVE YOU EVER EXPERIENCED FEELINGS THAT YOU HAVE VISITED ALL
                  OVER THE WORLD IN MINUTES...
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid image-resize" src={travel} />
            </div>
          </div>
        </section>

        <section className="main container-fluid px-0 mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 order-1  order-lg-2 mx-0 px-0">
              <div className="group-content d-flex align-items-center text-center my-5 p-5">
                <h1>ARE YOU ALREADY EXCITED IN THE AIRPLANE</h1>
              </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-1 mx-0 px-0">
              <img className="img-fluid image-resize" src={airplane} />
            </div>
          </div>
        </section>

        <section className="main container-fluid px-0 mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="group-content d-flex flex-column justify-content-around text-center my-5 p-5">
                <h1>OPEN YOURSELF FOR NEW HORIZONTS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid image-resize" src={nature} />
            </div>
          </div>
        </section>
      </div>
    </Styles>
  );
};

export default MainSection;
