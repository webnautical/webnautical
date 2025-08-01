import React from "react";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

function LayoutPrimerySec({ data }) {
  const { image, text1, text2, text3, id, subHeading } = data;

  return (
    <section className="descrip-deatail-container">
      <Container className="animated fadeInUp ">
        <Row>
          <Col sm={12} md={5}>
            <img className="p-0" src={image} alt={`${id} image`} />
          </Col>
          <Col md={7} sm={12} className="align-self-center">
            <h3>{subHeading}</h3>
            {text1 && <p>{text1}</p>}
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LayoutPrimerySec;
