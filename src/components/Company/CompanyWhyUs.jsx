import React from "react";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
//why-us section images
import why1Img from "../../assets/company-images/about-ic-04.png";
import why2Img from "../../assets/company-images/about-ic-01.png";
import why3Img from "../../assets/company-images/about-ic-02.png";
import why4Img from "../../assets/company-images/about-ic-07.png";
import ipadImg from "../../assets/company-images/ipad.jpg";
import education from "../../assets/educaton.png";
import food from "../../assets/food.png";
import health from "../../assets/health.png";
import sports from "../../assets/sports.png";
//vision-mission section images
import RelationshipImg from "../../assets/company-images/relation.png";
import teamImg from "../../assets/company-images/team.png";
import workImg from "../../assets/company-images/work.png";

function CompanyWhyUs() {
  return (
    <>
      {/* <section className="why-us">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <h2>Reasons why we are best</h2>
              <Row>
                <Col sm={6} className="why-box">
                 
                  <h6>The best user interfaces</h6>
                </Col>
                <Col sm={6} className="why-box">
                
                  <h6>Quick smooth web development</h6>
                </Col>
                <Col sm={6} className="why-box">
              
                  <h6>IDEA to prototype</h6>
                </Col>
                <Col sm={6} className="why-box">
                 
                  <h6>Maintenance and Support</h6>
                </Col>
                <Col sm={6} className="why-box">
                 
                  <h6>The best user interfaces</h6>
                </Col>
                <Col sm={6} className="why-box">
                
                  <h6>The best user interfaces</h6>
                </Col>
                <Col sm={6} className="why-box">
                 
                  <h6>IDEA to prototype</h6>
                </Col>
                <Col sm={6} className="why-box">
                
                  <h6>Maintenance and Support</h6>
                </Col>
              </Row>
            </Col>

            <Col md={12} lg={6}>
              <div className="img-ef">
                <div className="counter-one__shape1 updown"></div>
                <img src={ipadImg} alt="ipad-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="about_us_page exerp_in">
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
            <span>Expertise</span>
            <h2>Industries We Serve</h2>
          </div>
          <Row className="mt-5">
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={education} alt="Education" />
                </div>

                <div className="name mt-3">Education</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={food} alt="Food" />
                </div>

                <div className="name mt-3">Food</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={health} alt="Health" />
                </div>

                <div className="name mt-3">Health</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={sports} alt="Sports" />
                </div>

                <div className="name mt-3">Sports</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={education} alt="Education" />
                </div>

                <div className="name mt-3">Education</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={food} alt="food" />
                </div>

                <div className="name mt-3">Food</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={health} alt="Health" />
                </div>

                <div className="name mt-3">Health</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
            <Col md="3" className="mb-3">
              <div className="industry_box">
                <div className="icon_box">
                  <img src={sports} alt="Sports" />
                </div>

                <div className="name mt-3">Sports</div>
                <p className="mt-3">
                  Find out how we’re helping future-proof safety and security.
                </p>

                <button className="Read_more mt-5">Read More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="mission-vission">
        <Container>
          <Row>
            <Col md={4}>
              <div className="misssion_visoion_box">
                <div className="icons_mission">
                  <img src={RelationshipImg} alt="relationship-image" />
                </div>
                <h4>Relationship</h4>
                <p>
                  We plan to understand, evaluate and define a client purpose
                  change an in-depth search which results in delivering more
                  impressive and efficient development process.
                </p>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="misssion_visoion_box">
                <div className="icons_mission">
                  <img src={workImg} alt="work-image" />
                </div>
                <h4>Excellence at work</h4>
                <p>
                  We plan to understand, evaluate and define a client purpose
                  change an in-depth search which results in delivering more
                  impressive and efficient development process.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="misssion_visoion_box">
                <div className="icons_mission">
                  <img src={teamImg} alt="team-hands-image" />
                </div>
                <h4>Team Spirit</h4>
                <p>
                  We plan to understand, evaluate and define a client purpose
                  change an in-depth search which results in delivering more
                  impressive and efficient development process.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
}

export default CompanyWhyUs;
