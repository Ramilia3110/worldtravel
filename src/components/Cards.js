import React from "react";
import CardUI from "./CardUI";
import styled from "styled-components";
import north from "../assets/north.jpg";
import enjoy from "../assets/enjoy.jpg";
import town from "../assets/town.jpg";

const Styles = styled.div`
  .cards {
    padding-top: 3rem;
  }
`;

const Cards = () => {
  return (
    <Styles>
      <div className="cards container-fluid d-flex  justify-content-center mx-lg-0">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-center">
          <div className="col-lg-4 mb-5">
            <CardUI
              pic={enjoy}
              title="How to enjoy traveling"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />
          </div>
          <div className="col-lg-4 mb-5">
            <CardUI
              pic={town}
              title="Land of mucis and dances"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />
          </div>
          <div className="col-lg-4 mb-5 ">
            <CardUI
              pic={north}
              title="Northern Lights: Where to See It"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Cards;
