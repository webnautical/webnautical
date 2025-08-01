import React, { useState, useEffect, useLayoutEffect } from "react";
import config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import postimg from "../../assets/diwali.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Helmet, HelmetProvider } from "react-helmet-async";
const WebNauticalLife = () => {
  const [supportData, setSupportData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const helmetContext = {};
  const supportContent = {
    background_image: supportData?.banner_section?.background_image,
    subtitle: supportData?.banner_section?.subtitle,
    title: supportData?.banner_section?.title,
  };
  console.log(supportData, "support");
  const supportRecord = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${config.url}/v1/get_webnautical_life`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const apidata = await response.json();

      if (apidata.status === "success") {
        setSupportData(apidata.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      navigate("/*");
    }
  };
  useLayoutEffect(() => {
    supportRecord();
  }, []);

  const
currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{supportData.meta_title}</title>
          <meta name="description" content={supportData.meta_description} />

          <link rel="canonical" href={currentUrl} />
        </Helmet>
        <div className="life_webnautial">
          <div className="space_overlay"></div>

          <section className="life_webnautial_inner">
            <Container>
              <Row className="justify-content-center">
                <Col md={8} className="text-center">
                  <div className="top-heading">
                    <h2>{supportData.title}</h2>
                    <p>{supportData.description}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <BasicAppBanner content={supportContent}/> */}
          <section className="celbration_moment">
            <Container>
              {/* <Row className="justify-content-center">
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
          </Row> */}

              <div className="listing_post mt-5">
                <div>
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="home" title="2024">
                      <Row>
                        <Col md={4} className="mb-4">
                          <div className="listing-box">
                            <div className="overflow-hidden">
                              {" "}
                              <img src={postimg} />
                            </div>
                            <h2>Diwali</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.{" "}
                            </p>

                            <div className="globe_btn">
                              <button className="primery-btn">
                                <span>
                                  View All Photos{" "}
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
                        </Col>
                        <Col md={4} className="mb-4">
                          <div className="listing-box">
                            <div className="overflow-hidden">
                              {" "}
                              <img src={postimg} />
                            </div>
                            <h2>Diwali</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.{" "}
                            </p>

                            <div className="globe_btn">
                              <button className="primery-btn">
                                <span>
                                  View All Photos{" "}
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
                        </Col>
                        <Col md={4} className="mb-4">
                          <div className="listing-box">
                            <div className="overflow-hidden">
                              {" "}
                              <img src={postimg} />
                            </div>
                            <h2>Diwali</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.{" "}
                            </p>

                            <div className="globe_btn">
                              <button className="primery-btn">
                                <span>
                                  View All Photos{" "}
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
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="profile" title="2025">
                      <Row>
                        <Col md={4} className="mb-4">
                          <div className="listing-box">
                            <div className="overflow-hidden">
                              {" "}
                              <img src={postimg} />
                            </div>
                            <h2>Diwali</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.{" "}
                            </p>

                            <div className="globe_btn">
                              <button className="primery-btn">
                                <span>
                                  View All Photos{" "}
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
                        </Col>
                        <Col md={4} className="mb-4">
                          <div className="listing-box">
                            <div className="overflow-hidden">
                              {" "}
                              <img src={postimg} />
                            </div>
                            <h2>Diwali</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.{" "}
                            </p>

                            <div className="globe_btn">
                              <button className="primery-btn">
                                <span>
                                  View All Photos{" "}
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
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </>
    </HelmetProvider>
  );
};

export default WebNauticalLife;
