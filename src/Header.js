import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import downloadImage from "./images/download-on-app-store.png";

function Header() {
  return (
    <Row className="app-header">
      <Col>
        <h1>Weather Info Today</h1>
        <a href="https://apps.apple.com/us/app/id1459440260">
          <Image src={downloadImage} fluid />
        </a>
      </Col>
    </Row>
  );
}

export default Header;