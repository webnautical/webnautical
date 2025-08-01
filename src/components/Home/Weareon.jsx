import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import goodfirm from "../../assets/glssdorr.webp";
import semfirms from "../../assets/semfirms.webp";
import google from "../../assets/google.png";
import clutch_11zon from "../../assets/clutch_11zon.webp";
import goodfirms from "../../assets/good-firms.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Weareon = () => {
  const weareon = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 100,
    margin: 10,
    dots: false,
    nav: false,
    responsiveClass: true,
    infinite: true,
    speed: 100,

    responsive: {
      0: {
        items: 2.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,

        loop: true,
      },
    },
  };

  return (
    <div className="we_are_on">
      <Container>
        <h2>We Are on</h2>
        <Row>
          <Col md={12}>
            <OwlCarousel className="owl-theme" {...weareon}>
              <div className="item">
                <Link className="outer_box_we">
                  <img src={goodfirm} alt="img"  loading="lazy" />
                </Link>
              </div>

              <div className="item">
                <Link className="outer_box_we">
                  <img src={semfirms} alt="img"  loading="lazy" />
                </Link>
              </div>

              <div className="item">
                <Link className="outer_box_we">
                  <img src={clutch_11zon} alt="img"  loading="lazy" />
                </Link>
              </div>

              <div className="item">
                <Link className="outer_box_we">
                  <img src={goodfirms} alt="img"  loading="lazy" />
                </Link>
              </div>

              <div className="item">
                <Link className="outer_box_we">
                  <img src={google} alt="img"  loading="lazy" />
                </Link>
              </div>

              <div className="item">
                <Link className="outer_box_we">
                  <img src={goodfirm} alt="img"  loading="lazy" />
                </Link>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weareon;
