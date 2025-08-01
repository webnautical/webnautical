import React from "react";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import techimgone from "../../assets/tech (1).png";
import casephone from "../../assets/casephone.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import whitearrow from "../../assets/whitearrow.png";
// import - from 'components/'
import { Helmet, HelmetProvider } from "react-helmet-async";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import giantslayer from "../../assets/giant 3.png";
import { Link } from "react-router-dom";

function CaseStudy({ data }) {
  const casestudy = {
    autoplay: false,
    loop: false,
    autoplaySpeed: 2000,
    nav: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    navText: [
      "<i class='fas fa-chevron-left'  aria-label='Previous slide'></i>",
      "<i class='fas fa-chevron-right'  aria-label='Next slide'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <section className="case_study">
      <Container className="animated fadeInUp">
        <div className="top_tittle mb-4">
          <div className="global_heading text-center">
            <div className="icon">
              <img src={circleimg} alt="circleimg" />
            </div>
            <span>{data.subtitle}</span>
            <h2>{data.title}</h2>
          </div>

          {/* <div className="all_project_btn">
            <Link to ="/work">  All Project <div className="circle_des"><img src={whitearrow} alt="whitearrow"   loading="lazy" /></div> </Link>
          </div> */}
        </div>

        <OwlCarousel className="owl-theme" {...casestudy}>
          {data?.projects?.map((project, index) => (
            <div
              className="item"
              key={index}
              style={{ background: project.bg_color }}
            >
              <div className="item">
                <div
                  className="case_study_bg"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Row className="justify-content-between align-items-center">
                    <Col
                      lg={4}
                      className="order-xs-2 order-sm-2 order-md-2 order-lg-1 order-2"
                    >
                      <h2 className="project_tiitle">{project.title}</h2>
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        />
                      </p>
                      <p>Available on app store and Playstore</p>

                      <Link
                        className="normal_global_btn"
                        aria-label="Read More"
                        title="Read More"
                        to={`/case-study/${project.read_more_url}`}
                      >
                        Learn More About {project.title}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                      <div className="tech_box mt-4">
                        {Array.isArray(project?.technology_logos) ? (
                          project.technology_logos.map((logo, index) => (
                            <div className="tech_inner" key={index}>
                              <img
                                src={logo.url}
                                alt={logo.alt}
                                width="38px"
                                height="38px"
                                loading="lazy"
                              />
                            </div>
                          ))
                        ) : (
                          <p>No technology logos available</p>
                        )}
                      </div>
                    </Col>

                    <Col
                      lg={6}
                      className="text-end order-xs-1 order-sm-1 order-md-1 order-lg-2 order-1"
                    >
                      <div className="case_screeshot">
                        <img
                          src={project.image.url}
                          alt={project.image.alt}
                          width="85%"
                          height="450px"
                          loading="lazy"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        <div className="globe_btn mt-4 text-center">
          <button
            className="primery-btn mt-4"
            onClick={() => navigate("/work")}
          >
            <span>
              Explore Our Work
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
      </Container>
    </section>
  );
}

export default CaseStudy;
