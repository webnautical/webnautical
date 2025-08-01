import React, { useState, useEffect, useLayoutEffect } from "react";
import config from "../../config";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Col, Container, Row } from "react-bootstrap";
import techiconimg from "../../assets/nodejs-banner-bg.png";
import { Link } from "react-router-dom";
import bigbg from "../../assets/bigbg.png";
import Accordion from "react-bootstrap/Accordion";
import Skeleton from "@mui/material/Skeleton";
import circleimg from "../../assets/circle.png";

const WebNauticalCareer = () => {
  const [carrer, setCarrer] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const carrerContent = {
    background_image: carrer?.banner_section?.background_image,
    subtitle: carrer?.banner_section?.subtitle,
    title: carrer?.banner_section?.title,
  };
  const CarrerRecord = async () => {
    try {
      const response = await fetch(`${config.url}/v1/carrer`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const apidata = await response.json();
      console.log("carrer", carrer);

      if (apidata.status === "success") {
        setCarrer(apidata.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useLayoutEffect(() => {
    CarrerRecord();
  }, []);
  useEffect(() => {
    console.log(carrer, "carrer");
  }, [carrer]);

  const
currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{carrer.meta_title}</title>
          <meta name="description" content={carrer.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
        {/* Loader */}
        {/* Banner Section */}
        {loading ? (
          <div className="bg_top">
            <Container>
              {" "}
              <Skeleton
                variant="rectangular"
                height={20}
                className=" mb-3"
                style={{
                  width: "50%",
                  backgroundColor: " rgb(25 97 181 / 28%)",
                }} // Inline CSS to set width to 40% and background color to blue
              />
              <Skeleton
                variant="rectangular"
                height={50}
                className=""
                style={{
                  width: "30%",
                  backgroundColor: " rgb(25 97 181 / 28%)",
                }} // Inline CSS to set width to 40% and background color to blue
              />
            </Container>
          </div>
        ) : (
          <BasicAppBanner content={carrerContent} />
        )}
        {/* Career Section */}
        {loading ? (
          <>
            <section className="current_opening">
              <Container>
                <Row className="justify-content-center">
                  <div className="col-md-10">
                    <div
                      className="global_heading text-center mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        style={{
                          width: "30%",

                          textAlign: "center",
                          margin: "auto",
                        }}
                        className=" mb-3"
                      />
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className=" mb-3"
                      />
                    </div>
                  </div>
                </Row>

                <Row className="justify-content-center">
                  {[...Array(4)].map((_, index) => (
                    <Col md={3} className="mb-3" key={index}>
                      <div className="opening_box">
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          className=" mb-3"
                          style={{
                            width: "50%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />

                        <Skeleton
                          variant="rectangular"
                          height={20}
                          className=" mb-3"
                          style={{
                            width: "80%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={20}
                          className=" mb-3"
                          style={{
                            width: "80%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={18}
                          className=" mb-3"
                          style={{
                            width: "100%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={18}
                          className=" mb-3"
                          style={{
                            width: "100%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={18}
                          className=" mb-3"
                          style={{
                            width: "100%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={18}
                          className=" mb-3"
                          style={{
                            width: "100%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />
                        <Skeleton
                          variant="rectangular"
                          height={17}
                          className=" mb-3"
                          style={{
                            width: "40%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />

                        <Skeleton
                          variant="rectangular"
                          height={17}
                          className=" mb-3"
                          style={{
                            width: "40%",
                            backgroundColor: " rgb(25 97 181 / 28%)",
                          }}
                        />

                        <div className="apply_now">
                          <div>
                            <Skeleton
                              variant="rectangular"
                              height={40}
                              className=" mt-3"
                              style={{
                                backgroundColor: "ghostwhite",
                                margin: "auto",
                                width: "80%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          </>
        ) : (
          <>
            <div>
              <section className="current_opening">
                <Container>
                  {carrer && carrer.carrer_section && (
                    <Row className="justify-content-center">
                      <div className="col-md-10">
                        <div
                          className="global_heading text-center mb-5 aos-init aos-animate"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          <div className="icon">
                            <img src={circleimg} alt="circleimg" />
                          </div>
                          <h2>{carrer.carrer_section.title}</h2>
                          <p>{carrer.carrer_section.description}</p>
                        </div>
                      </div>
                    </Row>
                  )}

                  <Row>
                    {carrer &&
                      carrer.carrer_section &&
                      carrer.carrer_section.opening_boxes &&
                      carrer.carrer_section.opening_boxes.map((item, index) => (
                        <Col md={3} className="mb-3">
                          <div className="opening_box">
                            <p>{item.subtitle}</p>
                            <h2>{item.title}</h2>
                            <h3>{item.content}</h3>
                            <ul>
                              {item.points?.map((point, index) => (
                                <li key={index}>{point.title}</li>
                              ))}
                            </ul>
                            <div className="globe_btn">
                              <a
                                href="mailto:sales@webnautical.com " // Replace your@email.com with the desired email address
                                className="primery-btn w-100 text-center"
                              >
                                <span>
                                  Apply Now{" "}
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
                              </a>
                            </div>
                          </div>
                        </Col>
                      ))}
                  </Row>

                  <Row>
                    <Col md="12">
                      <div className="career_box">
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <div className="about_main_career">
                                <div className="career_post_time">
                                  Full Time
                                </div>
                                <div className="career_post_name">
                                  {" "}
                                  Content Writter
                                </div>
                                <div className="points_career">
                                  <ul>
                                    <li>
                                      <i className="fa-solid fa-toolbox"></i> +3
                                      Years
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-sitemap"></i> On
                                      site
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-location-dot"></i>{" "}
                                      Location
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <div className="about_main_career">
                                <div className="career_post_time">
                                  Full Time
                                </div>
                                <div className="career_post_name">
                                  {" "}
                                  Content Writter
                                </div>
                                <div className="points_career">
                                  <ul>
                                    <li>
                                      <i className="fa-solid fa-toolbox"></i> +3
                                      Years
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-sitemap"></i> On
                                      site
                                    </li>
                                    <li>
                                      <i className="fa-solid fa-location-dot"></i>{" "}
                                      Location
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </>
        )}
      </>
    </HelmetProvider>
  );
};

export default WebNauticalCareer;
