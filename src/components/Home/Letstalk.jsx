import React, { useState } from 'react';

import Button from "../Buttons/Button";
import { Col, Container, Row } from "react-bootstrap";
import animationimg from "../../assets/animation.webp";
import GetQuoteForm from "../GetQuoteForm/GetQuoteForm";
const Letstalk = ({data}) => {
  const [menuShow, setMenuShow] = useState(false);
  const openMenu = () => {
    setMenuShow(true);
  };
  const handleClose = () => {
    setMenuShow(false);
  };

  
  return (
    
    <div className="letstalk_sec">
      <Container>
      <GetQuoteForm show={menuShow} onHide={handleClose} />
        <Row className="align-items-center justify-content-between">
          <Col
            lg={4}
            className="order-xs-2 order-sm-2 order-md-2 order-lg-1 order-2"
            data-aos="fade-down"     data-aos-easing="linear"     data-aos-duration="1500"
          >
            <div className="animated_img text-center">
              <img className="updown" src={animationimg} alt='lets-talk-image' width="100%" height="100%"  loading="lazy" />
            </div>
          </Col>
          <Col
            lg={7}
            className="order-xs-1 order-sm-1 order-md-1 order-lg-2 order-1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <div className="global_heading text-start">
              <span>{data.subtitle}</span>
              <h2>{data.title}</h2>
              <p>
               {data.description}
              </p>
              <div className="">
              <div className="globe_btn">
                <button className="primery-btn" onClick={openMenu}>
                  <span>
                    Get Free Quote
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
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Letstalk;
