import React from "react";
import SecondButton from "../Buttons/SecondButton";

//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

function LayoutSecondarySec({ data }) {
  const {
    image,
    text1,
    text2,
    text3,
    text4,
    list,
    heading,
    heading2,
    head2Text,
  } = data;

  return (
    <section className="second descrip-deatail-container mt-5 mb-5 pt-5">
      <Container className="animated fadeInUp">
        <Row>
          <Col lg={6} md={12}>
            <h4 className="globel_txt">{heading}</h4>
            {text1 && <p>{text1}</p>}
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
            {text4 && <p>{text4}</p>}
            {heading2 && <h4>{heading2}</h4>}
            {head2Text && <p>{head2Text}</p>}

            {list && (
              <ul className="yellow-list">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {/* <div style={{ width: "290px" }}>
              <SecondButton>Let's Discfgfguss Your Project</SecondButton>
            </div> */}
          </Col>
          <Col lg={6} md={12} className="pt-2 text-center">
            <img className="updown-img" src={image} alt="app demand" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LayoutSecondarySec;
