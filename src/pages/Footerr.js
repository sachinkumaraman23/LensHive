// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
//import "./Footer.css"; // Import the custom CSS file
import "./styles/Footerr.css"

const Footer = () => {
  return (
    <footer className="custom-footer py-4">
      <Container>
        <Row className="justify-content-center align-items-center mb-3">
          <Col xs="auto" className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </Col>
          <Col xs="auto" className="social-icons">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          </Col>
          <Col xs="auto" className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </Col>
          <Col xs="auto" className="social-icons">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <p className="m-0">
              &copy; 2024 SACHIN KUMAR AMAN
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
