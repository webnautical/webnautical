import React from "react";

//bootsrtap imports
import { Container, Row, Col } from "react-bootstrap";

function LayoutPrimerySec2({ data }) {
  const {
    upDownImg,
    heading,
    text1,
    text2,
    text3,
    text4,
    text5,
    heading2,
    head2Text1,
    id,
    noAnimat,
  } = data;

  return (
    <section className="descrip-deatail-container">
      <Container className="animated fadeInUp">
        <Row>
          <Col md={12} lg={6} className="text-center pt-2">
            <img
              className={noAnimat ? "" : "updown-img"}
              src={upDownImg}
              alt="app demand"
            />
          </Col>
          <Col md={12} lg={6} className={"align-self-center"}>
            <h4 className="globel_txt">{heading}</h4>
            {text1 && <p>{text1}</p>}
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
            {text4 && <p>{text4}</p>}
            {text5 && <p>{text5}</p>}
            <p></p>
            {id === "directory-app-solutions" && (
              <ul className="directoru-list">
                <li>Membership directories</li>
                <li>Business listings management</li>
                <li>Restaurant guides</li>
                <li>Location-based directory apps</li>
                <li>Enterprise directory apps</li>
              </ul>
            )}
            {heading2 && <h4>{heading2}</h4>}
            {head2Text1 && <p>{head2Text1}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LayoutPrimerySec2;
