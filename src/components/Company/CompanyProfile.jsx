import React, { useState, useEffect, useLayoutEffect } from "react";
import config from "../../config";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BasicAppBanner from "../solutions/BasicAppBanner";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import appltimg from "../../assets/apply.png";
import circleimg from "../../assets/circle.png";
//about us in backend
import Skeleton from "@mui/material/Skeleton";

const CompanyProfile = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [aboutCompany, setAboutCompany] = useState({});
  const [loading, setLoading] = useState(true);
  const helmetContext = {};
  const aboutCompanyContent = {
    background_image: aboutCompany?.banner_section?.background_image,
    subtitle: aboutCompany?.banner_section?.subtitle,
    title: aboutCompany?.banner_section?.title,
  };
  const AboutCompanyRecord = async () => {
    try {
      const response = await fetch(`${config.url}/v1/about_us`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const apidata = await response.json();
      console.log("aboutCompany", aboutCompany);

      if (apidata.status === "success") {
        setAboutCompany(apidata.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useLayoutEffect(() => {
    AboutCompanyRecord();
  }, []);
  useEffect(() => {
    console.log(aboutCompany, "aboutCompany");
  }, [aboutCompany]);

  const currentUrl = window.location.href;
  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{aboutCompany.meta_title}</title>
          <meta name="description" content={aboutCompany.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
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
          <BasicAppBanner content={aboutCompanyContent} />
        )}
        {/* About Us Section */}
        {loading ? (
          <section className="meet_webnautical">
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Skeleton
                    variant="rectangular"
                    height={45}
                    className=" mb-3"
                    style={{
                      width: "50%",
                      margin: "auto",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className=" mb-3"
                    style={{
                      width: "100%",

                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className=" mb-3"
                    style={{
                      width: "40%",
                      margin: "auto",
                      borderRadius: "10px",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />
                  {/* <Skeleton
                        variant="rectangular"
                        height={350}
                        className=" mb-3"
                        style={{
                          width: "100%",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          borderRadius: "10px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      /> */}
                </Col>
              </Row>
              <Row>
                {[...Array(3)].map((_, index) => (
                  <Col md={4} key={index}>
                    <div className="meet_inner_box text-center">
                      <Skeleton
                        variant="circular"
                        height={250}
                        style={{
                          margin: "auto",
                          backgroundColor: " rgb(25 97 181 / 28%)",
                          width: "250px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        height={30}
                        className="mt-3"
                        style={{
                          width: "26%",
                          margin: "auto",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        height={30}
                        className="mt-3"
                        style={{
                          width: "46%",
                          margin: "auto",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        height={30}
                        className="mt-3"
                        style={{
                          width: "86%",
                          margin: "auto",
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        ) : (
          <section className="meet_webnautical">
            <Container>
              <Row className="justify-content-center">
                <Col md={10}>
                  {aboutCompany && aboutCompany.about_section && (
                    <div
                      className="global_heading text-center mb-5 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-duration="1000"
                    >
                      <div className="icon">
                        <img src={circleimg} alt="circleimg" />
                      </div>
                      <span>Who we are</span>
                      <h2>{aboutCompany.about_section.title}</h2>
                      <p>{aboutCompany.about_section.content}</p>{" "}
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg="9" className="mx-auto">
                  <Row>
                    {aboutCompany &&
                      aboutCompany.about_section &&
                      aboutCompany.about_section.image_box &&
                      aboutCompany.about_section.image_box.map(
                        (item, index) => (
                          <Col key={index}
                            md={4}
                            className="mb-lg-0 mb-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <div className="meet_inner_box text-center">
                              <h2>
                                {item.title_1} {item.title_2} {item.title_3}
                              </h2>
                              <img
                                src={item.image?.url}
                                alt={item.image?.alt}
                              />
                              {/* <p></p>
                              <h3> </h3> */}
                            </div>
                          </Col>
                        )
                      )}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        )}
        {/* Counter Section */}
        {loading ? (
          <section className="counter_design about_us_counter">
            <Container>
              <Skeleton
                variant="rectangular"
                height={30}
                className="mt-3"
                style={{
                  width: "20%",
                  margin: "auto",
                }}
              />
              <Row className="counter-box">
                {[...Array(4)].map((_, index) => (
                  <Col sm={6} md={3} className="p-5 text-center" key={index}>
                    <div className="count-b">
                      <Skeleton
                        variant="rectangular"
                        height={50}
                        className="mt-3"
                        style={{
                          width: "40%",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <Skeleton
                      variant="rectangular"
                      height={30}
                      className="mt-3"
                      style={{
                        width: "90%",
                        margin: "auto",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        ) : (
          <section className="counter_design about_us_counter">
            {aboutCompany && aboutCompany.about_section && (
              <Container>
                <div className="icon text-center">
                  <img src={circleimg} alt="circleimg" />
                </div>
                <h2 className="global_single_heading">
                  {aboutCompany.about_section.project_title}
                </h2>
                <Row className="counter-box">
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                    className="p-md-5 text-center"
                  >
                    <div className="count-b">
                      <span>
                        <em className="count">
                          <CountUp
                            duration={3}
                            end={aboutCompany.about_section.years_on_the_market}
                          />
                        </em>
                        +
                      </span>
                    </div>
                    <p>Years on the market</p>
                  </Col>

                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                    className="p-md-5 text-center"
                  >
                    <div className="count-b">
                      <span>
                        <em className="count">
                          <CountUp
                            duration={3}
                            end={aboutCompany.about_section.our_score}
                          />
                        </em>
                        +
                      </span>
                    </div>
                    <p>Our NPS score</p>
                  </Col>

                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                    className="p-md-5 text-center "
                  >
                    <div className="count-b">
                      <span>
                        <em className="count">
                          <CountUp
                            duration={3}
                            end={aboutCompany.about_section.people_on_board}
                          />
                        </em>
                        +
                      </span>
                    </div>
                    <p>People on board</p>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                    className="p-md-5 text-center"
                  >
                    <div className="count-b">
                      <span>
                        <em className="count">
                          <CountUp
                            duration={3}
                            end={aboutCompany.about_section.projects_delivered}
                          />
                        </em>
                        +
                      </span>
                    </div>
                    <p>Projects Delivered</p>
                  </Col>
                  {/* <div className="counter-one__shape leftani hidden visible animated fadeInUp"></div> */}
                </Row>
              </Container>
            )}
          </section>
        )}
        {/* Our Values Section */}

        <section className="our_values">
          {aboutCompany && aboutCompany.value_section && (
            <Container>
              <div
                className="global_heading text-center mb-5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
              >
                <div className="icon">
                  <img src={circleimg} alt="circleimg" />
                </div>
                {/* <span>we think</span> */}
                <h2>{aboutCompany.value_section.title} </h2>
              </div>
              <Row className="allign-items-center">
                <Col md={6}>
                  <div
                    className="valu_image"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img
                      src={aboutCompany.value_section.image?.url}
                      alt={aboutCompany.value_section.image?.alt}
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div
                    className="global_d_box mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2>Our Processes of being “RELEVANT”</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutCompany.value_section.vision,
                      }}
                    ></p>
                  </div>

                  <div
                    className="global_d_box mb-3"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h2>Our Overall Vision </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutCompany.value_section.mission,
                      }}
                    ></p>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </section>

        {/* Our Team Section */}

        <section className="teams">
          {aboutCompany && aboutCompany.our_team_section && (
            <Container>
              <Row className="justify-content-center">
                <Col md={9}>
                  <div
                    className="global_heading text-center mb-5 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                  >
                    <div className="icon">
                      <img src={circleimg} alt="circleimg" />
                    </div>
                    {/* <span>we think</span> */}
                    <h2>{aboutCompany.our_team_section.title}</h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                {aboutCompany &&
                  aboutCompany.our_team_section &&
                  aboutCompany.our_team_section.our_team &&
                  aboutCompany.our_team_section.our_team.map((item, index) => (
                    <Col md={3} className="mb-4">
                      <div
                        className="team_member_img text-center"
                        data-aos="zoom-in"
                      >
                        <img src={item.profile?.url} alt={item.profile?.alt} />
                        <h2>{item.name}</h2>
                        <p>{item.post}</p>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          )}
        </section>

        {/* Let's Create Section */}

        <section
          className="let_create"
          style={{
            // backgroundImage: `url(${aboutCompany.experience_section?.image?.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <Container>
            {aboutCompany && aboutCompany.experience_section && (
              <Row className="align-items-center">
                <Col md={6} data-aos="fade-up" data-aos-duration="1000">
                  <div className="left_cnt_area">
                    <h2>{aboutCompany.experience_section.title}</h2>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: aboutCompany.experience_section.content,
                      }}
                    ></p>
                  </div>

                  <div className="multi_btn mt-4">
                    <div className="globe_btn mobile_hide_class">
                      <button
                        className="primery-btn"
                        onClick={() => navigate("/work")}
                      >
                        <span>
                          Explore Our Masterpieces{" "}
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

                    <div className="globe_btn">
                      <button
                        className="primery-btn"
                        onClick={() => navigate("/contact")}
                      >
                        <span>
                          Let’s Build Your Dream
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

                <Col md={6} data-aos="zoom-in">
                  <div className="create_img">
                    <img
                      className="w-100"
                      src={aboutCompany.experience_section?.image?.url}
                      alt="create_img"
                    />
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </section>

        {/* We Are Section */}

        <section className="we_are">
          {aboutCompany && aboutCompany.join_us_section && (
            <Container>
              <div className="inner_we_are">
                <Row className="align-items-center">
                  <Col md={6}>
                    <div className="left_cnt_area">
                      <h2>{aboutCompany.join_us_section.title}</h2>

                      <p>{aboutCompany.join_us_section.content}</p>

                      <div className="multi_btn mt-4">
                        <div className="globe_btn">
                          <button
                            className="primery-btn"
                            onClick={() => navigate("/career")}
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
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className="text-end">
                    <div className="apply_img">
                      <img
                        src={aboutCompany.join_us_section?.image?.url}
                        alt={aboutCompany.join_us_section?.image?.alt}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          )}
        </section>
      </>
    </HelmetProvider>
  );
};

export default CompanyProfile;
