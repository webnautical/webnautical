import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import circleimg from "../../assets/circle.png";
import svgone from "../../assets/svgone.svg";
import svgsec from "../../assets/svgsec.svg";
import svgthird from "../../assets/phoned.svg";
import svglast from "../../assets/neww.svg";
import line from "../../assets/line.svg";
import Spinner from "react-bootstrap/Spinner";
import Button from "../Buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const GetStarted = ({workProcess}) => {
  const navigate=useNavigate()
  return (
    <div className="work_porcess_our">
      <Container>
        <Row className=" justify-content-between">
          <Col lg={5}>
            <div className="left_tittle">
              <div className="global_heading text-start">
                <div className="icon">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <span>{workProcess.subtitle}</span>
                <h2>{workProcess.title}</h2>
                <p>
                <div dangerouslySetInnerHTML={{ __html:workProcess.description}} />
                <div className="">
              <div className="globe_btn">
                <button className="primery-btn" 
                 onClick={() => navigate("/contact")}
                >
                  <span>
                 Get In Touch
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
              
                </p>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="right_dot_img">
              <Row>
              <Col md={6} className=" ">
                <div className="img_box">
                <img src={svgone} alt="procces-Image" width="320" height="222"  loading="lazy" />
                </div>
              </Col>
              <Col md={6} className="mt-5 mr-5">
                <div className="first contant_box_inner">
                  <div className="panel">
                 
                      <div className="pulse-base pulse-circle"></div>
                 
                  </div>
 
                  <h2>Business Consultation</h2>
                </div>
              </Col>
 
              </Row>
              <Row>
              <Col md={6} className="mt-5 order-2 order-md-1 ">
                <div className="sec contant_box_inner">
                <div className="pulse-base pulse-circle"></div>
                  <h2>Plan</h2>
                </div>
              </Col>
              <Col md={6} className="mt-5 order-1 order-md-2">
                <div className="img_box">
                  <img src={svgsec} alt="procces-Image" width="320" height="222"  loading="lazy"   />
                </div>
              </Col>
 
              </Row>
              <Row>
              <Col md={6} className="mt-5">
                <div className="img_box">
                  <img src={svgthird} alt="procces-Image" width="320" height="222"  loading="lazy"    />
                </div>
              </Col>
              <Col md={6} className="mt-5">
                <div className="third contant_box_inner">
                <div className="pulse-base pulse-circle"></div>
                  <h2>Excute</h2>
                </div>
              </Col>
              </Row>
              <Row>
              <Col md={6} className="mt-5 order-2 order-md-1 ">
                <div className="fourth contant_box_inner">
                <div className="pulse-base pulse-circle"></div>
                  <h2>Delivering Excellence</h2>
                </div>
              </Col>
              <Col md={6} className="mt-5 order-1 order-md-2">
                <div className="img_box">
                  <img src={svglast} alt="procces-Image" width="320" height="222"  loading="lazy"  />
                </div>
              </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
 
export default GetStarted;