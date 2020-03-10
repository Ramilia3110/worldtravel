import React from "react";
import Jumbo2 from "./components/Jumbo2";
import styled from "styled-components";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";

const Styles = styled.div`
  .heroes {
    width: 100%;
  }
`;

const Heroes = () => {
  return (
    <Styles>
      <div className="heroes">
        <Jumbo2 />
        <div className="container-fluid mx-0">
          <Blog2 />
          <Blog1 />
          <Blog3 />
        </div>
      </div>
    </Styles>
  );
};
export default Heroes;
