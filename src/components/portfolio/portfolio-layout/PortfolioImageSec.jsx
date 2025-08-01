import React from "react";
//bootstrap imports
import leftImage from "../../../assets/portfolio-images/i-1.png";
import rightImg from "../../../assets/portfolio-images/i-2.webp";

import { Container, Row, Col } from "react-bootstrap";
function PortfolioImageSec({ ImgData }) {
  const { leftImage, rightImage } = ImgData;
  return (
    <div className="port-images">
      {/* <Container> */}
      <Row>
        <Col sm={12} md={6} className="p-0 m-0">
          <img src={leftImage} alt="image" />
        </Col>
        <Col sm={12} md={6} className="p-0 m-0">
          <img src={rightImage} alt="image" />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default PortfolioImageSec;
