import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
// import bgright from "../../assets/bg.png";
// import Button from "../Buttons/Button";
import config from "../../config";
import Skeleton from "@mui/material/Skeleton";
import circleimg from "../../assets/circle.png";
import BasicAppBanner from "../solutions/BasicAppBanner";
const Industries = () => {
  const marketingContent = {
    background_image: Industries?.banner_section_top?.background_image,
    subtitle: Industries?.banner_section_top?.subtitle,
    title: Industries?.banner_section_top?.title,
  };
  const navigate = useNavigate();
  const { slug } = useParams();
  const [expertiseData, setExpertiseData] = useState({
    meta_title: "",
    meta_description: "",
    banner_section: {},
    solution_section: {},

    education_section: {},
    teachers_section: {},
  });
  const [loading, setLoading] = useState(true);
  const helmetContext = {};

  const ExpertiseRecord = async () => {
    try {
      const params = { page_slug: slug };
      const response = await fetch(`${config.url}/v1/expertise_details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const apidata = await response.json();
      console.log("expertise_details", expertiseData);

      if (apidata.status === "success") {
        setExpertiseData({
          meta_title: apidata.data.meta_title,
          meta_description: apidata.data.meta_description,
          banner_section: apidata.data.banner_section,
          solution_section: apidata.data.solution_section,
          education_section: apidata.data.education_section,
          teachers_section: apidata.data.teachers_section,
        });
      }
      setLoading(false);
    } catch (error) {
      navigate("/*");
      setLoading(false);
      console.error("Error:", error);
    }
  };
  useLayoutEffect(() => {
    ExpertiseRecord();
  }, [slug]);
  useEffect(() => {
    console.log(expertiseData, "expertiseData");
  }, [expertiseData]);
  const
currentUrl = window.location.href;
  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{expertiseData.meta_title}</title>
          <meta name="description" content={expertiseData.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>
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
            <>
              <BasicAppBanner content={marketingContent} />
            </>
          )}

        {/* Industries Page Section */}
        {loading ? (
          
          <div className="industries_page">
            {/* <div className="space_overlay"></div> */}
            <section className="industries_main">
              <Container fluid>
                <Row className="align-items-center justify-content-between">
                  <Col md={5}>
                    <div className="about_content">
                      <Skeleton
                        variant="rectangular"
                        height={50.39}
                        style={{ borderRadius: "10px" }}
                        className="w-100 mt-2"
                      />
                      <Skeleton
                        variant="rectangular"
                        height={78}
                        style={{ borderRadius: "10px" }}
                        className="w-100 mt-2"
                      />
                      <Skeleton
                        variant="rectangular"
                        height={48.8}
                        style={{ borderRadius: "10px" }}
                        className="w-50 mt-2"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="right_images">
                      <Skeleton
                        variant="rectangular"
                        height={600}
                        className="w-65 mt-2"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        ) : (
          <>
            {expertiseData && expertiseData.banner_section ? (
              <div className="industries_page">
                {/* <div className="space_overlay"></div> */}
                <section className="industries_main">
                  <Container fluid>
                    <Row className="align-items-center justify-content-between">
                      {expertiseData && expertiseData.banner_section && (
                        <Col md={5} className="order-md-1 order-2">
                          <div className="about_content">
                            <h2 className="mb-2"> {expertiseData.banner_section.title}</h2>
                            <p>{expertiseData.banner_section.description}</p>
                            <div className="">
                              <div className="globe_btn">
                                <button
                                  className="primery-btn"
                                  onClick={() => navigate("/contact")}
                                >
                                  <span>
                                    Contact Us{" "}
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
                      )}

                      <Col md={6} className="order-md-2 order-1">
                        <div
                          className="right_images"
                          style={{
                            backgroundImage: `url(${expertiseData.banner_section?.background_image?.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        >
                          <img
                            src={expertiseData.banner_section?.image?.url}
                            alt={expertiseData.banner_section?.image?.alt}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            ) : null}
          </>
        )}
        {/* Our Perk Section */}
        {loading ? (
          <section className="our_perk">
            <Container>
              <Row className="justify-content-center">
                <Col md={10}>
                  <div className="global_heading text-center">
                    <Skeleton
                      variant="rectangular"
                      height={40}
                      style={{ borderRadius: "10px" }}
                      className="w-100 mt-2"
                    />
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      style={{ borderRadius: "10px" }}
                      className="w-100 mt-2"
                    />
                  </div>
                </Col>
                <Row className="justify-content-center mt-5">
                  <Col md={6}>
                    {[...Array(4)].map((_, index) => (
                      <div className="perk_steps">
                        <div
                          className="head"
                          key={index}
                          style={{ alignItems: "start" }}
                        >
                          <div className="icon">
                            <Skeleton
                              variant="rectangular"
                              width={50}
                              height={50}
                              className="mt-2"
                            />
                          </div>
                          <div className="text">
                            <Skeleton
                              variant="rectangular"
                              width={200}
                              height={30}
                              className="mt-2"
                            />
                            <Skeleton
                              variant="rectangular"
                              width={250}
                              height={100}
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
              </Row>
            </Container>
          </section>
        ) : (
          <>
            {expertiseData && expertiseData.solution_section ? (
              <section className="our_perk">
                <Container>
                  <Row className="justify-content-center">
                    {expertiseData && expertiseData.solution_section && (
                      <Col md={10}>
                        <div className="global_heading text-center">
                          <div className="icon">
                            <img src={circleimg} alt="circleimg" />
                          </div>
                          <h2>{expertiseData.solution_section.title}</h2>
                          <p>{expertiseData.solution_section.description}</p>
                        </div>
                      </Col>
                    )}
                    <Row className="justify-content-center mt-5">
                      <Col md={12} lg={8} xl={6}>
                        {expertiseData.solution_section &&
                          expertiseData.solution_section.solutions &&
                          expertiseData.solution_section.solutions.map(
                            (item, index) => (
                              <div className="perk_steps">
                                <div
                                  className="head"
                                  data-aos="fade-right"
                                  data-aos-offset="300"
                                  data-aos-easing="ease-in-sine"
                                >
                                  <div className="icon">
                                    <img src={item.icon.url} width="35px" height="100%" alt="perk icon" />
                                  </div>
                                  <div className="text">
                                    <h2>{item.title}</h2>

                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                      </Col>
                    </Row>
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
        )}

        {/* Prime Features Section */}
        {loading ? (
          <section className="prime_features">
            <Container>
              <Row className="justify-content-center">
                <Col md={10}>
                  <div className="global_heading text-center mb-5">
                    <Skeleton
                      variant="rectangular"
                      height={40}
                      className="mt-2 w-100"
                    />
                  </div>
                  <Row>
                    {[...Array(4)].map((_, index) => (
                      <Col md={3} className="mb-4" key={index}>
                        <div className="feature_box" data-aos="zoom-in">
                          <div className="feature_icon">
                            <Skeleton
                              variant="rectangular"
                              className="mt-2 w-50"
                              height={40}
                            />
                          </div>
                          <Skeleton
                            variant="rectangular"
                            className="mt-2 w-100"
                            height={100}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="add_text">
                    <Skeleton
                      variant="rectangular"
                      height={40}
                      className="mt-2 w-100"
                    />
                  </div>
                  <Row>
                    {[...Array(4)].map((_, index) => (
                      <Col md={3} className="mb-4" key={index}>
                        <div className="feature_box">
                          <div className="feature_icon">
                            <Skeleton
                              variant="rectangular"
                              className="mt-2 w-50"
                              height={40}
                            />
                          </div>
                          <Skeleton
                            variant="rectangular"
                            className="mt-2 w-100"
                            height={100}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <>
            {expertiseData && expertiseData.education_section ? (
              <section className="prime_features">
                <Container>
                  <Row className="justify-content-center">
                    <Col md={10}>
                      {expertiseData && expertiseData.education_section && (
                        <div className="global_heading text-center mb-5">
                          <div className="icon">
                            <img src={circleimg} alt="circleimg" />
                          </div>
                          <h2>{expertiseData.education_section.title}</h2>
                        </div>
                      )}
                      <Row>
                        {expertiseData.education_section &&
                          expertiseData.education_section.educations &&
                          expertiseData.education_section.educations.map(
                            (item, index) => (
                              <Col md={6} lg={3} className="mb-4">
                                <div className="feature_box" data-aos="zoom-in">
                                  <div className="feature_icon">
                                    <img
                                      src={item.icon.url}
                                      alt={item.icon.alt}
                                    />
                                  </div>
                                  <p>{item.title}</p>
                                </div>
                              </Col>
                            )
                          )}

                        {expertiseData && expertiseData.teachers_section && (
                          <div className="add_text">
                            {expertiseData.teachers_section.title}
                          </div>
                        )}

                        {expertiseData.teachers_section &&
                          expertiseData.teachers_section.teachers &&
                          expertiseData.teachers_section.teachers.map(
                            (item, index) => (
                              <Col md={3} className="mb-4">
                                <div className="feature_box" data-aos="zoom-in">
                                  <div className="feature_icon">
                                    <img
                                      src={item.icon.url}
                                      alt={item.icon.alt}
                                    />
                                  </div>
                                  <p>{item.title}</p>
                                </div>
                              </Col>
                            )
                          )}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            ) : null}
          </>
        )}
      </>
    </HelmetProvider>
  );
};

export default Industries;
