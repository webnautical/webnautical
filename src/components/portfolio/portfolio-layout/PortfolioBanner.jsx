import React from "react";
import { Link } from "react-router-dom";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
//images imports

function PortfolioBanner({ caseStudy }) {
  return (
    <div>
      <section
        className="portfolio-banner"
        style={{ backgroundImage: `url(${caseStudy.background_image.url})` }}
      >
        <Container>
          <Row>
            <Col sm={12}>
              <p className="project-tilte">{caseStudy.short_title} </p>
              <h2 className="project-title-second">{caseStudy.title}</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="dtails_project">
        <Container>
          <Row>
            <Col sm={6} lg={3}>
              <div className="about-project-box">
                <p>Technology</p>
                <h6>{caseStudy.texhnologies}</h6>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="about-project-box">
                <p>Start</p>
                <h6>{caseStudy.start_date}</h6>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="about-project-box">
                <p>Launch</p>
                <h6>{caseStudy.launch_date}</h6>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="about-project-box">
                <p>Websilte</p>
                <Link to={caseStudy.websilte_url}>
                  {" "}
                  <h6>{caseStudy.websilte_url}</h6>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default PortfolioBanner;
