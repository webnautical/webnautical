import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import test from "../../assets/testimaonilas.png";
// import testsec from "../../assets/testimaonilas2.png";
// import clientplace from "../../assets/google.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import circleimg from "../../assets/circle.png";
const ClientReview = ({ testimonial }) => {
  const carouselRef = useRef(null);
  const testimonialsnew = {
    loop: true,
    autoplay: false,
    autoplaySpeed: 2000,
    margin: 10,
    dots: false,
    nav: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,

        loop: true,
      },
    },
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="testimonials">
      <Container>
        <div className="global_heading text-center">
          <div className="icon">
            <img src={circleimg} alt="circleimg" />
          </div>
          <span>{testimonial.subtitle}</span>
          <h2>{testimonial.title}</h2>
        </div>
        <OwlCarousel
          className="owl-theme"
          ref={carouselRef}
          {...testimonialsnew}
        >
          {testimonial?.reviews?.map((review, index) => (
            <div className="item">
              <Row className="justify-content-center mt-3">
                <Col lg={9}>
                  <Row>
                    <Col lg={4}>
                      <div className="review_user_img">
                        <img
                          src={review?.image?.url}
                          alt={review?.image?.alt}
                          width="227px"
                          height="227px"
                          loading="lazy"
                        />
                      </div>
                    </Col>

                    <Col lg={8}>
                      <div className="testi_cnt">
                        <p>{review?.review}</p>

                        <div className="place_testi">
                          <img
                            src={review?.client_logo?.url}
                            alt={review?.client_logo?.alt}
                            width="120"
                            height="61"
                            loading="lazy"
                          />
                        </div>

                        <div className="client_name mt-3">
                          {" "}
                          <strong>{review?.client_name}</strong>
                        </div>
                      </div>
                      <div className="change_next_prev_btn mt-4">
                        <button
                          className="c_owl_btn"
                          onClick={handlePrev}
                          aria-label="Previous slide"
                        >
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                          className="c_owl_btn"
                          onClick={handleNext}
                          aria-label="Next slide"
                        >
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default ClientReview;
