import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Banner from "./Banner.home";
import About from "./About.home";
import { Helmet, HelmetProvider } from "react-helmet-async";
//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "@mui/material/Skeleton";

import Blog from "./Blog.home";
import Clients from "./Clients";
//images imports
import config from "../../config";

import aboutImg from "../../assets/image-02.png";
import Services from "./Services.home";
import GetStarted from "./GetStarted";
import WorkProcess from "./WorkProcess";
import Letstalk from "./Letstalk";
import CaseStudy from "./CaseStudy.home";
import Expertise from "../ourexpertise/Expertise";
import Expert from "./Expert";
import ClientReview from "./ClientReview";
import Weareon from "./Weareon";
import Awards from "./Awards";
import AppSolution from "../solutions/AppSolution";

const Home = () => {
  const [loading, setLoading] = useState(true);
   const hasFetchedRef = useRef(false);
  const [homePageData, setHomePageData] = useState({
    meta_title: "",
    meta_description: "",
    video: {},
    client_logos: [],
    short_description: "",
    title_1: "",
    title_2: "",
    title_3: "",
    button_1_url: "",
    button_2_url: "",
    trusted_by_clients_title: "",
    about_section: {},
    services_section: {},
    technology_section: {},
    awarded_section: {},
    expertise_section: {},
    testimonial_section: {},
    our_work_section: {},
    lets_talk_section: {},
    projects_section: {},
  });

  const helmetContext = {};

  const HomePageRecored = async () => {
    try {
      const response = await fetch(`${config.url}/v1/homepage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      if (data.status === "success") {
        setHomePageData({
          meta_title: data.data.meta_title,
          meta_description: data.data.meta_description,
          ...data.data.video_section,
          about_section: data.data.about_section,
          services_section: data.data.services_section,
          technology_section: data.data.technology_section,
          awarded_section: data.data.awarded_section,
          expertise_section: data.data.expertise_section,
          testimonial_section: data.data.testimonial_section,
          our_work_section: data.data.our_work_section,
          lets_talk_section: data.data.lets_talk_section,
          projects_section: data.data.projects_section,
        });
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };
  
 useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    HomePageRecored();
  }, []);

  const currentUrl = window.location.href;

  return (
    <HelmetProvider context={helmetContext}>
      <>
        <Helmet>
          <title>{homePageData.meta_title}</title>
          <meta name="description" content={homePageData.meta_description} />
          <link rel="canonical" href={currentUrl} />
        </Helmet>

        {/* Loader */}
        {loading ? (
          <div className="bg_top bg_skelton">
            <Container>
              <Row>
                <Col md={12}>
                  <Skeleton
                    variant="rectangular"
                    height={70}
                    className="mt-4 pt-5"
                    style={{
                      width: "60%",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <Skeleton
                    variant="rectangular"
                    height={70}
                    className="mt-5 pt-5"
                    style={{
                      width: "40%",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <Skeleton
                    variant="rectangular"
                    height={70}
                    className="mt-5 "
                    style={{
                      width: "38%",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mt-5"
                    style={{
                      width: "60%",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <Skeleton
                    variant="rectangular"
                    height={20}
                    className="mt-2"
                    style={{
                      width: "30%",
                    }} // Inline CSS to set width to 40% and background color to blue
                  />

                  <div className="d-flex" style={{ gap: "20px" }}>
                    <Skeleton
                      variant="rectangular"
                      height={48}
                      className="mt-4"
                      style={{
                        width: "133px",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={48}
                      className="mt-4"
                      style={{
                        width: "133px",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </div>
                </Col>
              </Row>

              <div className="mt-5 area_logo_skelton">
                <div className="container-fluid p-0">
                  <div className=" ">
                    <div className="global_heading">
                      <Skeleton
                        variant="rectangular"
                        width={20}
                        height={20}
                        className="mt-4 "
                        style={{
                          borderRadius: "100%",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mt-2"
                        style={{
                          width: "80px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className="mt-2"
                        style={{
                          width: "300px",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>

            <Container fluid>
              <div className="d-flex mt-5">
                <Skeleton
                  variant="rectangular"
                  height={53}
                  className="mt-2"
                  style={{
                    width: "100%",
                  }} // Inline CSS to set width to 40% and background color to blue
                />
              </div>
            </Container>

            <div className="about Skeleton_about">
              <Container>
                <Row className="justify-content-center">
                  <Col md={5}>
                    <div className="global_heading text-center">
                      <Skeleton
                        variant="rectangular"
                        width={20}
                        height={20}
                        className="mt-4 m-auto"
                        style={{
                          borderRadius: "100%",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={10}
                        className="mt-2 m-auto"
                        style={{
                          width: "10%",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mt-2 m-auto"
                        style={{
                          width: "100%",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />

                      <Skeleton
                        variant="rectangular"
                        height={42}
                        className="mt-2 m-auto"
                        style={{
                          width: "100%",
                        }} // Inline CSS to set width to 40% and background color to blue
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5 align-items-center justify-content-between">
                  <Col md={5}>
                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />

                    <Skeleton
                      variant="rectangular"
                      height={15}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </Col>
                  <Col md={6}>
                    <Skeleton
                      variant="rectangular"
                      height={400}
                      className="mt-2 m-auto"
                      style={{
                        width: "100%",
                      }} // Inline CSS to set width to 40% and background color to blue
                    />
                  </Col>
                </Row>

                <div className="h-services_new">
                  <Container>
                    <div className="services_slider">
                      <Row>
                        <Col lg={3}>
                          <div className="global_heading">
                            <Skeleton
                              variant="rectangular"
                              width={20}
                              height={20}
                              className="mt-4 "
                              style={{
                                borderRadius: "100%",
                              }} // Inline CSS to set width to 40% and background color to blue
                            />

                            <Skeleton
                              variant="rectangular"
                              height={20}
                              className="mt-2"
                              style={{
                                width: "80px",
                              }} // Inline CSS to set width to 40% and background color to blue
                            />

                            <Skeleton
                              variant="rectangular"
                              height={42}
                              className="mt-2"
                              style={{
                                width: "300px",
                              }} // Inline CSS to set width to 40% and background color to blue
                            />
                            <Skeleton
                              variant="rectangular"
                              height={42}
                              className="mt-2"
                              style={{
                                width: "200px",
                              }} // Inline CSS to set width to 40% and background color to blue
                            />
                          </div>
                        </Col>
                        <Col lg={9}>
                          <Row>
                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>
                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>

                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>

                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>

                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>

                            <Col md={6} className="mb-5">
                              <div
                                className="d-flex align-items-center"
                                style={{ gap: "20px" }}
                              >
                                <Skeleton
                                  variant="rectangular"
                                  width={60}
                                  height={60}
                                />
                                <Skeleton
                                  variant="rectangular"
                                  height={26}
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                  }} // Inline CSS to set width to 40% and background color to blue
                                />
                              </div>

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />

                              <Skeleton
                                variant="rectangular"
                                height={20}
                                className="mt-2 m-auto"
                                style={{
                                  width: "100%",
                                }} // Inline CSS to set width to 40% and background color to blue
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
              </Container>
            </div>
          </div>
        ) : (
          <>
            {homePageData && homePageData.video && homePageData.video.url && (
              <Banner homePageData={homePageData} />
            )}

            {homePageData &&
              homePageData.about_section &&
              homePageData.about_section.image && (
                <About
                  aboutData={homePageData.about_section}
                />
              )}

            {homePageData &&
              homePageData.services_section &&
              homePageData.services_section.services && (
                <Services serviceData={homePageData.services_section} />
              )}
            {homePageData && homePageData.technology_section && (
              <Expertise technology={homePageData.technology_section} />
            )}

            {homePageData &&
              homePageData.awarded_section &&
              homePageData.awarded_section.image && (
                <Awards awardData={homePageData.awarded_section} />
              )}

            {homePageData &&
              homePageData.expertise_section &&
              homePageData.expertise_section.certified_services && (
                <Expert data={homePageData.expertise_section} />
              )}

            {homePageData &&
              homePageData.testimonial_section &&
              homePageData.testimonial_section.reviews && (
                <ClientReview testimonial={homePageData.testimonial_section} />
              )}

            {homePageData && homePageData.our_work_section && (
              <GetStarted workProcess={homePageData.our_work_section} />
            )}

            {/* <WorkProcess /> */}
            <Letstalk data={homePageData.lets_talk_section} />
            {homePageData &&
              homePageData.projects_section &&
              homePageData.projects_section.projects && (
                <CaseStudy data={homePageData?.projects_section} />
              )}

          </>
        )}
      </>
    </HelmetProvider>
  );
};

export default Home;
