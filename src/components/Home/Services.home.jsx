import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import { Link } from "react-router-dom";
import servicesarrow from "../../assets/arrow.svg";
import dev from "../../assets/responsive.gif";
import target from "../../assets/target.gif";
import mobile from "../../assets/mobile.gif";
// import webImg from "../assets/web-development.webp";
// import mobileImg from "../assetsweb-development.webp";
// import marketImg from "../assets/digital-marketing.webp";
// import leatestImg from "../assets/software-development.webp";
// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Services({ serviceData }) {
  const services = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 100,
    margin: 10,
    dots: false,
    responsiveClass: true,
    infinite: true,
    speed: 100,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <section
      className="h-services"
      style={{ backgroundImage: `url(${serviceData.background_image.url})` }}
    >
      <Container className=" animated fadeInUp">
        <div className="services_slider" {...services}>
          <Row>
            <Col lg={3}>
              <div
                className="left_heading_box"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="global_heading text-start">
                  <div className="icon">
                    <img src={circleimg} alt="circleimg" />
                  </div>
                  <span>Services</span>
                  <h2>{serviceData.title}</h2>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                {serviceData.services.map((service, index) => (
                  <Col
                    md={6}
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration={`${1000 + index * 500}`}
                    key={index}
                  >
                    {/* <div className="service_box">
                  <div className="top_box_bar">
                    <div className="iconsbox">
                      <img src={service.icon.url} alt={service.icon.alt} />
                    </div>
                    <h2>{service.title}</h2>
                  </div>
                  <p>{service.description}</p> */}

                    {/* <Link to={`services/${service.url}`}>
                        <button
                          className="normal_global_btn"
                          data-aos="fade-right"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="2000"
                        >
                          Read More <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link> */}
                    {/* </div> */}
                    <Link to={`${service.url}`}>
                      <div className="service_box">
                        <div className="top_box_bar">
                          <div className="iconsbox">
                            <img
                              src={service.icon.url}
                              alt={service.icon.alt}
                               loading="lazy"
                            />
                          </div>
                          <h2>{service.title}</h2>
                        </div>
                        <p>{service.description}</p>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <div>
            <div className="globe_btn text-center">
              <Link
                to="https://api.whatsapp.com/send?phone=+919530488844&text=Hello! I would like to inquire about the services provided by Webnautical. Please share more details. Thank you!"
                className="primery-btn" // Assuming this is your CSS class for styling
                target="_blank"
              >
                <span className="text-white">
                  Connect With Our Technical Experts
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right" // Fixed class attribute
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
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
