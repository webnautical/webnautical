import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import education from "../../assets/educaton.png";
import food from "../../assets/food.png";
import health from "../../assets/health.png";
import sports from "../../assets/sports.png";

const Expert = ({ data }) => {
  return (
    <section className="exerp_in">
      <Container>
        <div
          className="global_heading mb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <div className="icon">
            <img src={circleimg} alt="circleimg" />
          </div>
          <span>{data.subtitle}</span>
          <h2>{data.title}</h2>
        </div>
        <Row className="mt-5">
          {data.certified_services.map((expertise, index) => (
            <Col md={6} lg={3} className="mb-4">
              <div className="industries_hover">
                <div className="industry_box">
                  <div className="icon_box">
                    <img
                      src={expertise.logo.url}
                      alt={expertise.logo.alt}
                      width={"55px"}
                      height={"55px"}
                        loading="lazy"
                    />
                  </div>

                  <div className="name mt-3">{expertise.title}</div>
                  <p className="mt-3">{expertise.description}</p>
                  <a className="Read_more mt-3" aria-label="Read More" title="Read More" href={expertise.url}>
                   Learn More About {expertise.title}
                    <i className="fa-solid fa-arrow-right mx-2"></i>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Expert;
