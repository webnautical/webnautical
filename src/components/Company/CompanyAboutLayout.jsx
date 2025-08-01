import React from "react";
// import CountUp from 'react-countup/build/CountUp';
import CountUp from "react-countup";
import circleimg from "../../assets/circle.png";
//bootstrap imports
import { Container, Col, Row } from "react-bootstrap";
//images imports
import okIcon from "../../assets/company-images/ok-icon.png";
import groupImg from "../../assets/company-images/group.png";

function CompanyAboutLayout({ textData }) {
  const { text1, text2 } = textData;
  return (
    <>
      <section className="company_profile">
        <Container>
          <Row>
            <Col md={12} className="leftani" lg={6}>
              <img className="group-img" src={groupImg} alt="group" />
            </Col>
            <Col md={12} lg={6}>
              <h3 className="mb-3">We’re shaping the perfect web solutions</h3>
              <Row>
                <Col sm={6}>
                  <div className="ab-box">
                    <h6 className="mb-0">
                      <img src={okIcon} alt="ok" />
                      Solution for <strong>small &amp; large businesses</strong>
                    </h6>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="ab-box">
                    <h6 className="mb-0">
                      <img src={okIcon} alt="ok" /> Grow your{" "}
                      <strong>online business</strong> with us
                    </h6>
                  </div>
                </Col>
              </Row>
              {text1 && <p>{text1}</p>}
              {text2 && <p>{text2}</p>}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="counter_design">
        <Container>
        <div className="icon text-center">
                  <img src={circleimg} alt="circleimg" />
                </div>
          <h2 className="global_single_heading">
          The Journey So Far
          </h2>
          <Row className="counter-box">
            <Col sm={6} md={3} className="p-5 text-center">
              <div className="count-b">
                <span>
                  <em className="count">
                    <CountUp duration={3} end={10} />
                  </em>
                  +
                </span>
              </div>
              <p>Years on the market</p>
            </Col>
            <Col sm={6} md={3} className="p-5 text-center">
              <div className="count-b">
                <span>
                  <em className="count">
                    <CountUp duration={3} end={95} />
                  </em>
                  +
                </span>
              </div>
              <p>Our NPS score</p>
            </Col>
            <Col sm={6} md={3} className="p-5 text-center">
              <div className="count-b">
                <span>
                  <em className="count">
                    <CountUp duration={3} end={50} />
                  </em>
                  +
                </span>
              </div>
              <p>People on board</p>
            </Col>

            <Col sm={6} md={3} className="p-5 text-center ">
              <div className="count-b">
                <span>
                  <em className="count">
                    <CountUp duration={3} end={100} />
                  </em>
                  +
                </span>
              </div>
              <p>Projects Delivered</p>
            </Col>
            {/* <div className="counter-one__shape leftani hidden visible animated fadeInUp"></div> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CompanyAboutLayout;
