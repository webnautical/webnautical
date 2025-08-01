import React, { useEffect } from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Swiper from 'swiper';
import 'swiper/css';

const Digitalmarketing = () => {
  useEffect(() => {
    const thumbSlider = new Swiper(".servicenDevelopment__thumb", {
      slidesPerView: 1,
      loop: false,
      speed: 1200,
      spaceBetween: 30,
      breakpoints: { 576: { slidesPerView: 1.5 }, 1024: { slidesPerView: 3 } },
    });

    const gallerySlider = new Swiper(".servicenDevelopment__gallery", {
      slidesPerView: 1,
      loop: false,
      speed: 1200,
      effect: "fade",
      fadeEffect: { crossFade: true },
      thumbs: { swiper: thumbSlider },
      navigation: {
        nextEl: ".servicenDevelopment__galleryWrapper .swiper-button-next",
        prevEl: ".servicenDevelopment__galleryWrapper .swiper-button-prev",
      },
    });

    return () => {
      thumbSlider.destroy();
      gallerySlider.destroy();
    };
  }, []);

  return (
    <div className="servicenDevelopment__sliderWrapper twocol-row">
      <Row>
        <Col md={8}>
      <div className="servicenDevelopment__thumbWrapper">
        <div className="servicenDevelopment__thumb swiper" dir="rtl">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-img">
                <img className="lazy-img" src="https://www.digitalgravity.ae/assets/images/web-development/portfolio/dp-world.webp" alt="services-development" />
                <div className="slide-count">08</div>
              </div>
              <div className="slide-head">Restaurant</div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img">
                <img className="lazy-img" src="https://www.digitalgravity.ae/assets/images/web-development/portfolio/dp-world.webp" alt="services-development" />
                <div className="slide-count">08</div>
              </div>
              <div className="slide-head">Restaurant</div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img">
                <img className="lazy-img" src="https://www.digitalgravity.ae/assets/images/web-development/portfolio/dp-world.webp" alt="services-development" />
                <div className="slide-count">08</div>
              </div>
              <div className="slide-head">Restaurant</div>
            </div>
            <div className="swiper-slide">
              <div className="slide-img">
                <img className="lazy-img" src="https://www.digitalgravity.ae/assets/images/web-development/portfolio/dp-world.webp" alt="services-development" />
                <div className="slide-count">08</div>
              </div>
              <div className="slide-head">Restaurant</div>
            </div>
          </div>
        </div>
      </div>
      </Col>
      <Col md={4}>
      <div className="servicenDevelopment__galleryWrapper">
        <div className="servicenDevelopment__gallery swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <h3 className="head fw-600 gray-col">Restaurant</h3>
              <p className="descrip s-font gray-col">
                Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.
              </p>
            </div>
            <div className="swiper-slide">
              <h3 className="head fw-600 gray-col">Restaurant</h3>
              <p className="descrip s-font gray-col">
                Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.
              </p>
            </div>
            <div className="swiper-slide">
              <h3 className="head fw-600 gray-col">Restaurant</h3>
              <p className="descrip s-font gray-col">
                Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.
              </p>
            </div>
            <div className="swiper-slide">
              <h3 className="head fw-600 gray-col">Restaurant</h3>
              <p className="descrip s-font gray-col">
                Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.
              </p>
            </div>
            <div className="swiper-slide">
              <h3 className="head fw-600 gray-col">Restaurant</h3>
              <p className="descrip s-font gray-col">
                Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.
              </p>
            </div>
          </div>
        </div>
        <div className="generic-navigation-wrapper">
          <div className="swiper-button-next">
          <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-button-prev">
          <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default Digitalmarketing;


