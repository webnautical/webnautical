import React from "react";

//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";

function WorkProcess() {
  return (
    <section className="work-process">
      <Container className="animated fadeInUp">
        <Row></Row>
      </Container>
    </section>
  );
}

export default WorkProcess;

<div>
  <section className="work-process">
    <div className="container hidden visible animated fadeInUp">
      <div className="row">
        <div className="col-md-12">
          <h2>Our Work Process</h2>
          <div className="progress-box">
            <ul>
              <li>
                <h4 className="top-text">Discovery</h4>
                <div className="top"></div>
                <div className="left"></div>
                <span>
                  <em>01</em>
                </span>{" "}
              </li>
              <li>
                <div className="left"></div>
                <span>
                  <em>02</em>
                </span>
                <div className="bottom"></div>
                <h4 className="bottom-text">Design</h4>
              </li>
              <li>
                <h4 className="top-text">Development</h4>
                <div className="top"></div>
                <div className="left"></div>
                <span>
                  <em>03</em>
                </span>{" "}
              </li>
              <li>
                <div className="left"></div>
                <span>
                  <em>04</em>
                </span>
                <div className="bottom"></div>
                <h4 className="bottom-text">Testing QA </h4>
              </li>
              <li>
                <h4 className="top-text">Delivery</h4>
                <div className="top"></div>
                <div className="left"></div>
                <span>
                  <em>05</em>
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>;
