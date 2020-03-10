import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Styles = styled.div`
  .footer {
    height: 30vh;
    background: #d0d3d4;
  }
  .social-container {
    padding: 1.8rem 3.5rem;
    widmargin: 0;
    width: 100%;
  }
  .social {
    margin: 0 0.9rem;
    transition: transform 250ms;
    display: inline-block;
    &:hover {
      transform: translateY(-2px);
    }
  }

  .facebook {
    color: #4968ad;
  }
  .youtube {
    color: #eb3223;
  }
  .twitter {
    color: #49a1eb;
  }
  .instagram {
    color: #e4405f;
  }
  .telegram {
    color: #0088cc;
  }
`;

const Footer = () => {
  return (
    <Styles>
      <section className="footer container-fluid mx-0 d-flex justify-content-center align-items-center w-100">
        <div className="social-container d-flex flex-column align-items-center">
          <h6>You can find us in social media</h6>
          <div className="social-links">
            <a href="#" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="#" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="telegram social">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Footer;
