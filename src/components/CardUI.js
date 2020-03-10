import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    background: #ea1414;
  }

  .image-resize {
    height: 70vh;
    object-fit: cover;
    object-position: center center;
  }

  .card-title {
    color: white;
    height: 15vh;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 200;
  }

  .card-text {
    color: #f0f3f4;
    height: 20vh;
    overflow: hidden;
    font-weight: 200;
  }
  @media (min-width: 992px) {
    .card {
      width: 20rem;
    }
    .image-resize {
      height: 50vh;
      object-fit: cover;
      object-position: center center;
    }

    .card-body {
      height: 40vh;
    }

    .card-title {
      height: 10vh;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .card-text {
      height: 15vh;
      overflow: hidden;
    }
  }
  @media (min-width: 1200px) {
    .card {
      width: 23.5rem;
    }
  }
`;

const CardUI = props => {
  return (
    <Styles>
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={props.pic}
            className="card-img-top img-fluid image-resize"
          />
        </div>

        <div className="card-body">
          <h4 className="card-title"> {props.title} </h4>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-outline-light mt-0">
            Click here
          </a>
        </div>
      </div>
    </Styles>
  );
};

export default CardUI;
