import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import postimg from "../../assets/Diwali.webp";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";    

const LIfeWebnautical = () => {
  return (
    <div className="life_webnautial">
      <div className="space_overlay"></div>

      <section className="life_webnautial_inner">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="top-heading">
                <h2>Life @ Webnautical</h2>
                <p>
                  another home for Codianters. Showcasing diverse experiences
                  that represent a mix of talents, who shine inclusively in
                  different colors.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="celbration_moment">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <div className="global_heading ">
                <h2>Our Celebration Moments</h2>
                <p>
                  Laughter and joyful chatter echoed with the melody of music.
                  See how we’re building success together, one team, one dream
                  at Codiant.
                </p>
              </div>
            </Col>
          </Row>

          <div className="listing_post mt-5">
            <div>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="2024">
                  <Row>
                    <Col md={4}>
                      <div className="listing-box">
                        <div className="overflow-hidden">
                          {" "}
                          <img src={postimg} />
                        </div>
                        <h2>Diwali</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>

                        <div className="blue_overlay text-end">
                          <button className="primery-btn">
                            <span>View All Photos</span>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="profile" title="2025">
            
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LIfeWebnautical;
