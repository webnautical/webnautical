import React from "react";

//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

function BasicBanner({ data }) {
  const { subtitle, title,background_image } = data;
  return (
    <section className="short_banner full zoom app-solution-banner banner "
    style={{ backgroundImage: `url(${background_image?.url})` }}
    >
      <Container className="animated fadeInUp">
        <Row className="banner-row ">
          <Col md={6} sm={12} className="pb-3">
            <h1>{title}</h1>
            <p className="mt-3">{subtitle}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BasicBanner;
