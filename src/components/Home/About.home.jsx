import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
function About({ aboutData }) {
  const navigate = useNavigate();
  return (
    <section className="about">
      <Container className="animated fadeInUp">
        <Row className="justify-content-center">
          <Col md={5}>
            <div
              className="global_heading text-center mb-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="icon">
                <img src={circleimg} alt="circleimg" />
              </div>
              <span>About Us</span>
              <h2>
                {aboutData.title}

              </h2>
            </div>
          </Col>
        </Row>
        <Row className="m">
          <Col
            className="md-6 align-self-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >

            <div dangerouslySetInnerHTML={{ __html: aboutData.description }} />

            <div className="globe_btn">
              <button
                className="primery-btn"
                onClick={() => navigate("/contact")}
              >
                <span>
                  Let’s Build A Brand Together
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div style={{ width: "14rem" }}>
              {/* {btnPath && ( */}
              {/* <SecondButton>
                  <Link to={'btnPath'}>View More Details</Link>
                </SecondButton> */}
              {/* )} */}
            </div>
          </Col>
          <Col
            className=" text-center"
            md={6}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            <div className="about_us">
              <img
                className={"updown-img "}
                src={aboutData.image.url}
                alt={aboutData.image.alt}
                loading="lazy"
                width="100%" height="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
